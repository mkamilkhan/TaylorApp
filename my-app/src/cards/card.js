// import React from 'react'
import React, { useEffect, useState } from 'react'
import FeatherIcon from 'feather-icons-react';
// import OrderFormCart from '../orderFormCart/orderFormCart';
import Assets from '../assets/cloth.jpeg';
import { db } from "../fire";
import Searchbar from '../pages/searchbar';

export default function Card() {
    const [isOpen, setIsOpen] = useState()
    const [users, setUsers] = useState([]);
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState("");



    useEffect(() => {




        db.collection('orders').onSnapshot((resp) => {

            const list = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setUsers(list);
            console.log(list, "list-orders");
        })
        db.collection('naap').onSnapshot((resp) => {

            const list1 = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id, isOpen: false }));
            setData(list1);
            console.log(list1, "list1 naap");
        })


    }, []);

    const filterNames = (response) => {


        return response.customer.toString().toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;

    };


    const delet = (id) => {
        db.collection('orders').doc(id).delete().then((resp) => {
            console.log(resp, "woekkk")
        })
    }





    return (
        <div className=" light-orange w-full pb-16 ">
            <div className="w-full flex justify-center  p-2">
                <Searchbar onSearch={setSearchValue} value={searchValue} />
            </div>

            {
                users.filter(filterNames).map((user) => (

                    <div className="p-6 font-bold rounded-xl m-4 shadow-xl fonts-size bg-white ">
                        <div>
                            <FeatherIcon className="p-1 border rounded-full bg-gray-200 shadow-xl" icon="trash-2" color="red" onClick={() => delet(user.id)} />
                        </div>
                        <div className="flex w-full  my-3 justify-between">

                            <div className=" font-bold ">
                                <div>
                                    <div className="">
                                        <p className="p-1 bg-gray text-green-500 font-bold px-3 rounded-full">{user.progresss}</p>
                                    </div>
                                </div>


                            </div>
                            <div >

                                <FeatherIcon icon="chevron-down" color="gray" onClick={() => setIsOpen(!isOpen)} />

                            </div>
                        </div>
                        <div >

                            <div className="flex my-2 rounded-md border light-orange  p-3  text-gray-600 justify-between">
                                <div className="">
                                    <p>Name: {user.customer}</p>
                                </div>
                                {/* <div>
                                    <img src={Assets} className=" w-6 border border-xl border-gray-400 h-6 rounded-full "></img>

                                </div> */}
                            </div>


                        </div>

                        {

                            isOpen ?
                                < div >
                                    <div className="flex text-gray-600 justify-between ">


                                        <div className="w-full rounded-md   border light-orange p-3 flex">
                                            <p className="w-1/2 ">Date: {user.dates}</p>
                                            <p className=" w-1/2 ">DueDate: {user.dueDates}</p>
                                        </div>
                                    </div>
                                    <div className="flex my-2 border  rounded-md light-orange  p-3  text-gray-600 justify-between ">
                                        <div>
                                            <p>T/Cloths: {user.typeOfCloths}</p>

                                        </div>
                                        <div>
                                            <p>N/Suits: {user.numberOfSuitss}</p>

                                        </div>
                                    </div>
                                    <div className="flex border rounded-md  light-orange  p-3  text-gray-600 justify-between  mt-4">

                                        <div>
                                            <p>Total</p>
                                            <p>{user.totalAmounts}</p>
                                        </div>
                                        <div>
                                            <p>Paid</p>
                                            <p>{user.paidAmounts}</p>
                                        </div>
                                        <div>
                                            <p>Remaining</p>
                                            <p>{user.remainingAmounts}</p>
                                        </div>

                                    </div>
                                </div> : null
                        }

                    </div>
                )
                )
            }
        </div>
    )
}
