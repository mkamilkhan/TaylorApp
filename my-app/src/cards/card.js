import React, { useEffect, useState } from 'react'
import FeatherIcon from 'feather-icons-react';
import { db } from "../fire";
import Searchbar from '../pages/searchbar';
import Tabs from '../compenets/tabs';
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
            console.log(resp, "delete")
        })
    }





    return (
        <div className="  h-screen w-full pb-16 ">
            <div className="w-full flex justify-center  p-4">
                <Searchbar onSearch={setSearchValue} value={searchValue} />
            </div>

            {
                users.filter(filterNames).map((user) => (

                    <div className="p-6 mx-6 font-bold rounded-xl m-4 shadow-xl fonts-size bg-gray-800 ">
                        <div>
                            <FeatherIcon className="p-1 border rounded-full  shadow-xl" icon="trash-2" color="orange" onClick={() => delet(user.id)} />
                        </div>
                        <div className="flex w-full  my-3 justify-between">

                            <div className=" font-bold ">
                                <div>
                                    <div >
                                        <p className="p-1  text-yellow-500 font-bold px-3 rounded-full">{user.progresss}</p>
                                    </div>
                                </div>


                            </div>
                            <div >

                                <FeatherIcon icon="chevron-down" color="orange" onClick={() => setIsOpen(!isOpen)} />
                                {/* <img src={data.image} className="border-2 border-yellow-300 rounded-full  w-12 h-12"></img> */}

                            </div>
                        </div>
                        <div >

                            <div className="flex my-2 rounded-md    p-3  text-gray-400 justify-between">
                                <div className="">
                                    <p>Name: {user.customer}</p>
                                </div>

                            </div>


                        </div>

                        {

                            isOpen ?
                                < div >
                                    <div className="flex text-gray-400 justify-between ">


                                        <div className="w-full rounded-md     p-3 flex">
                                            <p className="w-1/2 ">Date: {user.dates}</p>
                                            <p className=" w-1/2 ">DueDate: {user.dueDates}</p>
                                        </div>
                                    </div>
                                    <div className="flex my-2   rounded-md   p-3  text-gray-400 justify-between ">
                                        <div>
                                            <p>T/Cloths: {user.typeOfCloths}</p>

                                        </div>
                                        <div>
                                            <p>N/Suits: {user.numberOfSuitss}</p>

                                        </div>
                                    </div>
                                    <div className="flex  rounded-md    p-3  text-gray-400 justify-between  mt-4">

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
            <div>
                <Tabs />
            </div>
        </div>
    )
}
