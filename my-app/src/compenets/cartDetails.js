// import React from 'react'
import React, { useEffect, useState } from 'react'
// import Assets from '../assets/taab.jpeg'
import { db } from "../fire"
import FeatherIcon from 'feather-icons-react';
import Searchbar from '../pages/searchbar';
import Tabs from '../compenets/tabs'

function CartDetails() {


    const [searchValue, setSearchValue] = useState("");
    const [users, setUsers] = useState([]);
    const [user, setForm] = useState([]);
    const [show, setShow] = useState(false);
    const [dlt, setDlt] = useState([]);
    const [id, setId] = useState([]);
    useEffect(() => {
        db.collection('englsihMeasurements').onSnapshot((resp) => {
            const list = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setUsers(list);
            console.log(list);
        })
        db.collection('form').onSnapshot((resp) => {
            const list = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setForm(list);
            console.log(list);
        })
    }, []);

    const filterNames = (res) => {
        return res.customerName.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    };
    const trash = (id) => {
        db.collection('englsihMeasurements').doc(id).delete().then((resp) => {
            console.log(resp, "delete")
        })
    }
    return (
        <div>
            <div >
                <div className="h-screen  ">
                    <div className="w-full flex justify-center  p-4">
                        <Searchbar onSearch={setSearchValue} value={searchValue} />
                    </div>
                    {

                        users.filter(filterNames).map((user, i) => (
                            <div key={i} >
                                <div className="border mx-8 mt-12 bg-white shadow-xl rounded-xl py-6">
                                    <div className=" ">
                                        <div className="  mx-4 ">
                                            <div className=" ">
                                                <div className="flex  justify-center">
                                                    <img src={user.image} className="border-2  border-yellow-500  rounded-full  w-24 h-24"></img>
                                                </div>
                                            </div>

                                            <div className=" mt-4  font-bold text-xs text-gray-700">
                                                <div className="p-1 items-center justify-between  flex  ">
                                                    <div className="flex  items-center">
                                                        <div>
                                                            <div className="flex items-center">
                                                                <FeatherIcon className="p-1 border rounded-full light-orange-200 shadow-xl" icon="user" color="orange" />

                                                                <p> Customer Name: </p>
                                                            </div>
                                                            <p className="font-normal  p-2">{user.customerName}</p>

                                                        </div>
                                                    </div>
                                                    <div className="flex  items-center">
                                                        <div>
                                                            <div className="flex items-center">
                                                                <FeatherIcon className="p-1 border rounded-full light-orange-200 shadow-xl" icon="bar-chart-2" color="orange" />

                                                                <p> SerialNumber </p>

                                                            </div>
                                                            <p className="font-normal p-2">{user.serialNumber}</p>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="p-1 flex items-center justify-between  ">
                                                    <div className="  items-center">
                                                        <div className="flex  items-center">

                                                            <FeatherIcon className="p-1 border rounded-full light-orange-200 shadow-xl" icon="phone" color="orange" />

                                                            <p> Customer Phone: </p>
                                                        </div>
                                                        <p className="font-normal p-1"> {user.customerNumber} </p>
                                                    </div>
                                                    {/* <p className="">{user.customerName}</p> */}
                                                    <div className="p-1  items-center justify-between  ">
                                                        <div className=" ">
                                                            <div className="flex items-center">

                                                                <FeatherIcon className="p-1 border rounded-full light-orange-200 shadow-xl" icon="map-pin" color="orange" />

                                                                <p> Address: </p>
                                                            </div>
                                                        </div>
                                                        <p className="font-normal  p-1">{user.address}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                        <div >
                                            <div className="p-4 bg-yellow-500 flex border">
                                                <p className="text-yellow-800 text-lg  font-bold">Measurements Of Customer</p>
                                            </div>
                                            <div>
                                                <div className="flex text-xs justify-between mx-2 font-normal">
                                                    <div className="flex p-2">
                                                        <p>Lenght:</p>
                                                        <p>34 (Inch),1/2</p>
                                                    </div>
                                                    <div className="flex p-2">
                                                        <p>Shoulder:</p>

                                                        <p>34 (Inch),1/2</p>
                                                    </div>
                                                </div>
                                                <div className="flex text-xs justify-between mx-2 font-normal">
                                                    <div className="flex p-2">
                                                        <p>Neck:</p>

                                                        <p>34 (Inch),1/2</p>
                                                    </div>
                                                    <div className="flex p-2">
                                                        <p>Chest:</p>


                                                        <p>34 (Inch),1/2</p>
                                                    </div>
                                                </div>

                                                <div className="p-2 flex ml-2 text-xs">
                                                    <p>Waist:</p>
                                                    <p>34 (Inch),1/2</p>

                                                </div>
                                                <div className="p-2 ">
                                                    <div className="p-2 font-normal border border-yellow-500  rounded-sm text-xs">

                                                        <div>
                                                            <p className="font-bold  text-yellow-500">Gheera:</p>

                                                        </div>
                                                        <div className="justify-between p-2 flex">
                                                            <div className="flex items-center text-xs">
                                                                <p>Gool:</p>
                                                                <p>34 (Inch),1/2</p>

                                                            </div>
                                                            <div className="flex text-xs">
                                                                <p>Choras:</p>
                                                                <p>34 (Inch),1/2</p>

                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div >
                                                        <div className="">
                                                            <div className="flex m-2 items-center text-xs">
                                                                <p>Arm:</p>

                                                                <p>34 (Inch),1/2</p>

                                                            </div>
                                                            <div className=" p-2 font-normal border-b border-t border-yellow-500  rounded-sm text-xs flex">

                                                                <div className="">
                                                                    <div className="flex p-1 text-xs">
                                                                        <p>Kaaf:</p>

                                                                        <p>34 (Inch),1/2</p>

                                                                    </div>
                                                                    <div className="flex p-1 items-center text-xs">
                                                                        <p>Kaaf-width</p>

                                                                        <p>34 (Inch),1/2</p>

                                                                    </div>
                                                                </div>
                                                                <div className="mx-2 ">
                                                                    <div className="flex p-1 text-xs">
                                                                        <p>,Arm Gool:</p>

                                                                        {/* <p>34 (Inch),1/2</p> */}

                                                                    </div>
                                                                    <div className="flex p-1 items-center text-xs">
                                                                        <p>,Arm Moori</p>

                                                                        {/* <p>34 (Inch),1/2</p> */}

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="justify-between p-4 font-normal border-b  border-yellow-500  rounded-sm text-xs flex">

                                                            <div className="flex text-xs">
                                                                <p>Collar:</p>
                                                                <p>34 (Inch),1/2</p>

                                                            </div>

                                                            <div className="flex items-center text-xs">
                                                                <p>Baen:</p>
                                                                <p>34 (Inch),1/2</p>

                                                            </div>
                                                        </div>
                                                        <div className="p-2 ">
                                                            <div className="flex p-1 justify-between text-xs">
                                                                <p>ShalwarLenght:</p>
                                                                <p >34 (Inch),1/2</p>

                                                            </div>


                                                            <div className="flex p-1 items-center justify-between text-xs">
                                                                <p>ShalwarGheera:</p>
                                                                <p>34 (Inch),1/2</p>

                                                            </div>
                                                            <div className="flex p-1 justify-between text-xs">
                                                                <p>ShalwarPaincha:</p>
                                                                <p>34 (Inch),1/2</p>

                                                            </div>


                                                        </div>
                                                        <div className=" p-4 font-normal border-b  border-yellow-500  rounded-sm">
                                                            <div className="font-bold  text-yellow-500 ">
                                                                <p>Pockets:</p>


                                                            </div>
                                                            <div className="m-2">
                                                                <div className="p-1 flex text-xs">
                                                                    <p>Frond Pockets:</p>
                                                                    <p className="mx-3 border border-yellow-500 w-4 h-4 pl-1 rounded-full ">1</p>

                                                                </div>


                                                                <div className="p-1 flex items-center text-xs">
                                                                    <p>Side Pockets:</p>
                                                                    <p className="mx-3 border border-yellow-500 w-4 h-4 pl-1 rounded-full ">2</p>


                                                                </div>
                                                                <div className="p-1 flex text-xs">
                                                                    <p className="mt-1">Double side Pockets:</p>

                                                                    <p className="mx-3 border border-yellow-500 w-6 h-6 pt-1 rounded-full ">yes</p>


                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div>

                                                        </div>
                                                        <div>

                                                        </div>
                                                        <div>

                                                        </div>
                                                        <div>


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                        )
                    }
                </div>
                <Tabs />
            </div>
        </div>
    )
}

export default CartDetails
