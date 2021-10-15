// import React from 'react'
import { db } from "../fire"
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import Searchbar from '../pages/searchbar';
import Tabs from '../compenets/tabs'

function UrduDetails() {
    const [users, setUsers] = useState([]);
    const [user, setForm] = useState([]);
    const [show, setShow] = useState(false);
    const [dlt, setDlt] = useState([]);
    const [id, setId] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        db.collection('urduMeasurements').onSnapshot((resp) => {
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
            <div>
                <div className="w-full flex justify-center  p-4">
                    <Searchbar onSearch={setSearchValue} value={searchValue} />
                </div>
                <div>
                    <Link to="/urduCard">
                        <FeatherIcon className="p-1 ml-6 border border-yellow-500 rounded-full light-orange-200 shadow-xl" icon="arrow-left" color="orange" />

                    </Link>
                </div>
                {
                    users.filter(filterNames).map((user) => (


                        <div className="border mx-8  text-gray-300 font-bold mt-6 bg-gray-800 shadow-xl rounded-xl py-6">
                            <div className=" ">
                                <div className="  mx-4 ">
                                    <div className=" ">
                                        <div className="flex  justify-center">
                                            <img src={users.image} className="border-4 p-2 border-yellow-500  rounded-full  w-24 h-24"></img>
                                        </div>
                                    </div>

                                    <div className=" mt-4  font-bold text-xs text-gray-400">
                                        <div className="p-1 items-center justify-between mx-3 flex  ">
                                            <p className="font-normal">{user.customerName}</p>

                                            <div className="flex items-center">

                                                <p> گاہک نام </p>
                                                <FeatherIcon className="p-1 mx-1 border rounded-full border-gray-700 shadow-xl" icon="user" color="orange" />
                                            </div>

                                        </div>
                                        <div className="p-1 flex  items-center justify-between mx-3 ">
                                            <p className="font-normal">{user.serialNumber}</p>
                                            <div className="flex  items-center">

                                                <p> سلسلہ وار </p>
                                                <FeatherIcon className="p-1 mx-1 border rounded-full border-gray-700 shadow-xl" icon="edit-2" color="orange" />
                                            </div>
                                        </div>
                                        <div className="p-1 flex items-center justify-between mx-3 ">
                                            <p className="font-normal"> {user.customerNumber} </p>
                                            <div className="flex  items-center">

                                                <p>گاہک نمبر </p>
                                                <FeatherIcon className="p-1 mx-1 border rounded-full border-gray-700 shadow-xl" icon="phone" color="orange" />
                                            </div>
                                        </div>
                                        <div className="p-1 flex items-center justify-between mx-3 ">
                                            <p className="font-normal">{user.address}</p>
                                            <div className="flex  items-center">

                                                <p> پتہ </p>
                                                <FeatherIcon className="p-1 mx-1 border rounded-full border-gray-700 shadow-xl" icon="map-pin" color="orange" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div >
                                <div className="p-2 justify-center flex my-2 ">
                                    <p className="text-yellow-500 text-lg  font-bold">کسٹمر کی پیمائش</p>
                                </div>
                                <div>
                                    <div className="font-bold flex justify-end text-yellow-500 m-2 text-md">
                                        <p> قمیص پیمائش    </p>

                                    </div>
                                    <div className=" text-xs justify-between mx-2 font-bold text-gray-400">

                                        <div className="flex justify-end p-2">
                                            <p className="mx-1 border  border-yellow-500 text-white text-xs bg-yellow-500  font-bold  rounded-md p-1">{user.lenght},(انچ){user.lenghtInch}</p>
                                            <p>لمبای</p>
                                        </div>
                                        <div className="border-gray-700 rounded-md border p-2">
                                            <div className="flex justify-end">

                                                <p className="mx-1 border  border-yellow-500 text-white bg-yellow-500  font-bold  rounded-md p-1">{user.shoulder},(انچ){user.shoulderInch}</p>
                                                <p className="border-yellow-500 flex text-xs text-lg text-yellow-500 justify-end">بازو</p>
                                            </div>



                                            <div className="flex text-xs justify-between p-2 mx-2 font-bold text-gray-400">
                                                <div className="flex items-center p-2">
                                                    <p className="mx-2 border  border-yellow-500 text-white  bg-yellow-500  font-bold  rounded-md p-1">{user.neck},(انچ){user.neckInch}</p>
                                                    <p>کف</p>

                                                </div>
                                                <div className="flex p-2 items-center">
                                                    <p className="mx-2 border  border-yellow-500 text-white  bg-yellow-500  font-bold  rounded-md p-1">{user.chest},(انچ){user.chestInch}</p>
                                                    <p>چیک پٹی</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="p-2 flex ml-2 justify-end border-yellow-500 text-xs">

                                        <div className="flex m-2">
                                            <div className="flex items-center">
                                                <p className="mx-2 border  border-yellow-500 text-white bg-yellow-500  font-bold  rounded-md p-1">{user.waist},(انچ){user.waistInch}</p>
                                                <p>کٹ بین</p>

                                            </div>
                                            <div className="flex items-center">
                                                <p className="mx-2 border  border-yellow-500 text-white bg-yellow-500  font-bold  rounded-md p-1">{user.waist},(انچ){user.waistInch}</p>
                                                <p className="">کالر</p>


                                            </div>

                                        </div>

                                    </div>
                                    <div className="p-2 ">
                                        <div className="p-2 font-bold text-gray-600 text-xs">

                                            <div className="flex text-gray-400 justify-between items-center p-2">
                                                <div className="flex items-center">
                                                    <p className="mx-2 border  border-yellow-500 text-white  bg-yellow-500  font-bold  rounded-md p-1">{user.waist},(انچ){user.waistInch}</p>
                                                    <p>چھوڑاںؑی</p>


                                                </div>
                                                <div className="flex items-center">
                                                    <p className="mx-2 border  border-yellow-500 text-white  bg-yellow-500  font-bold  rounded-md p-1">{user.waist},(انچ){user.waistInch}</p>

                                                    <p>چھاتی</p>

                                                </div>


                                            </div>
                                            <div className="justify-end  border-gray-700 rounded-md border my-4  rounded-md  p-2 flex">

                                                <div className=" items-center text-xs">

                                                    <p className="font-bold flex  ml-24 text-lg text-yellow-500">دامن</p>

                                                    <div className="text-gray-400 m-2">
                                                        <div className="flex items-center font-bold text-xs">
                                                            <div className="flex items-center">
                                                                <p className="mx-2 border text-white border-yellow-500  bg-yellow-500  font-bold  rounded-md p-1">{user.waist},(انچ){user.waistInch}</p>
                                                                <p>گول دامن</p>


                                                            </div>
                                                        </div>
                                                        <div className="flex my-2 items-center font-bold text-xs ">
                                                            <div className="flex items-center">

                                                                <p className="mx-2 border  text-white border-yellow-500  bg-yellow-500  font-bold  rounded-md p-1">{user.waist},(انچ){user.waistInch}</p>
                                                                <p>چورس دامن</p>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        <div >
                                            <div className="text-gray-400">
                                                <div className="flex m-2 justify-end items-center text-xs">
                                                    <div className="flex items-center">

                                                        <p className="mx-2 border  border-yellow-500 text-white  bg-yellow-500  font-bold  rounded-md p-1">{user.waist},(انچ){user.waistInch}</p>
                                                        <p>فرنٹ یٹی</p>

                                                    </div>

                                                </div>
                                                <div className=" border-b border-yellow-500 p-1">
                                                    <div>
                                                        <div className="font-bold flex justify-end text-yellow-500">
                                                            <p>جیبیں:</p>
                                                        </div>
                                                        <div className="font-bold flex  ">

                                                            <div className="flex  justify-end  text-xs  p-1 w-full items-center  ">
                                                                <div className="flex  items-center">

                                                                    <p className="mx-2 border text-xs text-white border-yellow-500  bg-yellow-500  font-bold  rounded-md p-1">{user.waist},(انچ){user.waistInch}</p>
                                                                    <p className="">سامنے جیب۔:</p>


                                                                </div>
                                                                <div className="flex mx-2 items-center">

                                                                    <p className="mx-2 border text-white  border-yellow-500  bg-yellow-500  font-bold  rounded-md p-1">{user.waist},(انچ){user.waistInch}</p>
                                                                    <p className="">سائیڈ جیب</p>


                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end mx-2  mt-3 text-yellow-500 font-bold">

                                                    <p>شلوار </p>
                                                </div>
                                                <div className="   items-center ">

                                                    <div className=" p-1">

                                                        <div className=" flex justify-end items-center">
                                                            <div className=" items-center text-xs ">
                                                                <div className="p-1">
                                                                    <div className="flex items-center">

                                                                        <p className="mx-2 border text-white  border-yellow-500  bg-yellow-500  font-bold  rounded-md p-1">{user.waist},(انچ){user.waistInch}</p>

                                                                        <p className="">شلوار کی لمبائی</p>

                                                                    </div>
                                                                </div>
                                                                <div className="p-1">
                                                                    <div className="flex items-center">

                                                                        <p className="mx-2 border  text-white  border-yellow-500  bg-yellow-500  font-bold  rounded-md p-1">{user.waist},(انچ){users.waistInch}</p>


                                                                        <p>شلوار پانچھ۔</p>
                                                                    </div>
                                                                </div>
                                                                <div className="p-1">
                                                                    <div className="flex items-center">

                                                                        <p className="mx-2 border text-white   border-yellow-500  bg-yellow-500  font-bold  rounded-md p-1">{users.waist},(انچ){users.waistInch}</p>

                                                                        <p> شلوار جیب    </p>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
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
                    ))

                }
            </div>


        </div >
    )
}

export default UrduDetails
