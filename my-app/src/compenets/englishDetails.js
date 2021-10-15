// import React from 'react'
import React, { useEffect, useState } from 'react'
// import Assets from '../assets/taab.jpeg'
import { db } from "../fire"
import FeatherIcon from 'feather-icons-react';
import Searchbar from '../pages/searchbar';
import Tabs from './tabs'

function EnglishDetails() {


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
                                                    <img src={user.image} className="border-4 p-2 border-yellow-500  rounded-full  w-24 h-24"></img>
                                                </div>
                                            </div>

                                            <div className=" mt-4  font-bold text-xs text-gray-700">
                                                <div className="p-1 items-center justify-between  flex  ">
                                                    <div className="flex  items-center">
                                                        <div>
                                                            <div className="flex items-center">
                                                                <FeatherIcon className="p-1 border mx-1 rounded-full light-orange-200 shadow-xl" icon="user" color="orange" />

                                                                <p> Customer Name: </p>
                                                            </div>
                                                            <p className="font-bold text-gray-600  p-2">{user.customerName}</p>

                                                        </div>
                                                    </div>
                                                    <div className="flex  items-center">
                                                        <div>
                                                            <div className="flex items-center ">
                                                                <FeatherIcon className="p-1 border mx-1 rounded-full light-orange-200 shadow-xl" icon="bar-chart-2" color="orange" />

                                                                <p> SerialNumber </p>

                                                            </div>
                                                            <p className="font-bold text-gray-600 p-2">{user.serialNumber}</p>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="p-1 flex items-center justify-between  ">
                                                    <div className="  items-center">
                                                        <div className="flex  items-center">

                                                            <FeatherIcon className="p-1 border mx-1 rounded-full light-orange-200 shadow-xl" icon="phone" color="orange" />

                                                            <p> Customer Phone: </p>
                                                        </div>
                                                        <p className="font-bold text-gray-600 p-1"> {user.customerNumber} </p>
                                                    </div>
                                                    {/* <p className="">{user.customerName}</p> */}
                                                    <div className="p-1  items-center justify-between  ">
                                                        <div className=" ">
                                                            <div className="flex items-center">

                                                                <FeatherIcon className="p-1 border mx-1 rounded-full light-orange-200 shadow-xl" icon="map-pin" color="orange" />

                                                                <p> Address: </p>
                                                            </div>
                                                        </div>
                                                        <p className="font-bold text-gray-600  p-1">{user.address}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                        <div >
                                            <div className="p-2 justify-center flex my-2 ">
                                                <p className="text-yellow-500 text-lg  font-bold">Measurements Of Customer</p>
                                            </div>
                                            <div>
                                                <div className="flex text-xs justify-between mx-2 font-bold text-gray-600">
                                                    <div className="flex p-2">
                                                        <p>Lenght:</p>
                                                        <p className="mx-1 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.lenght},(Inch){user.lenghtInch}</p>
                                                    </div>
                                                    <div className="flex p-2">
                                                        <p>Shoulder:</p>

                                                        <p className="mx-1 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.shoulder},(Inch){user.shoulderInch}</p>

                                                    </div>
                                                </div>
                                                <div className="flex text-xs justify-between mx-2 font-bold text-gray-600">
                                                    <div className="flex p-2">
                                                        <p>Neck:</p>

                                                        <p className="mx-2 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.neck},(Inch){user.neckInch}</p>
                                                    </div>
                                                    <div className="flex p-2">
                                                        <p>Chest:</p>


                                                        <p className="mx-2 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.chest},(Inch){user.chestInch}</p>

                                                    </div>
                                                </div>

                                                <div className="p-2 flex ml-2 text-xs">
                                                    <p>Waist:</p>
                                                    <p className="mx-2 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.waist},(Inch){user.waistInch}</p>


                                                </div>
                                                <div className="p-2 ">
                                                    <div className="p-2 font-bold text-gray-600 border border-yellow-500  rounded-md text-xs">

                                                        <div>
                                                            <p className="font-bold  text-yellow-500">Gheera:</p>

                                                        </div>
                                                        <div className="justify-between p-2 flex">
                                                            <div className="flex items-center text-xs">
                                                                <p>Gool:</p>
                                                                <p className="mx-2 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.gool},(inch)</p>

                                                            </div>
                                                            <div className="flex items-center text-xs">
                                                                <p >Choras:</p>
                                                                <p className="mx-2 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.choras},(Inch)</p>


                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div >
                                                        <div className="">
                                                            <div className="flex m-2 items-center text-xs">
                                                                <p>Arm:</p>

                                                                <p className="mx-3 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.arm},(Inch){user.armInch}</p>


                                                            </div>
                                                            <div className=" p-2 font-bold text-gray-600 border-b border-t border-yellow-500  rounded-sm text-xs flex">

                                                                <div className="">
                                                                    <div className="flex p-1 items-center text-xs">
                                                                        <p>Kaaf:</p>
                                                                        <p className="mx-3 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.kaaf}(Inch){user.kaafInch}</p>


                                                                    </div>
                                                                    <div className="flex p-1 items-center text-xs">
                                                                        <p>Kaaf-width</p>

                                                                        <p className="mx-3 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.kaafwidth}(Inch){user.kaafwidthInch}</p>


                                                                    </div>
                                                                    <div className="">
                                                                        <div className="flex p-1 items-center text-xs">
                                                                            <p>Arm Gool:</p>
                                                                            <p className="mx-3 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.armGoal}(Inch){user.armGoalInch},</p>

                                                                            {/* <p>34 (Inch),1/2</p> */}

                                                                        </div>
                                                                        <div className="flex items-center p-1 text-xs">
                                                                            <p>Arm Moori</p>
                                                                            <p className="mx-3 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.armGoalAram}(Inch){user.armGoalAramInch},</p>

                                                                            {/* <p>34 (Inch),1/2</p> */}

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="justify-between p-4 font-bold text-gray-600 border-b  border-yellow-500  rounded-sm text-xs flex">

                                                            <div className="flex items-center text-xs">
                                                                <p>Collar:</p>
                                                                <p className="mx-3 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.collar}(Inch){user.collarInch},</p>


                                                            </div>

                                                            <div className="flex items-center text-xs">
                                                                <p>Baen:</p>
                                                                <p className="mx-3 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.baen}(Inch){user.baenInch},</p>


                                                            </div>
                                                        </div>
                                                        <div className="p-2 font-bold text-gray-600">
                                                            <div className="flex p-1  justify-between text-xs">
                                                                <p>ShalwarLenght:</p>
                                                                <p className="mx-3 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.shalwarLenght}(Inch){user.shalwarLenghtInch},</p>


                                                            </div>


                                                            <div className="flex p-1 items-center justify-between text-xs">
                                                                <p>ShalwarGheera:</p>
                                                                <p className="mx-3 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.shalwarGheera}(Inch){user.shalwarGheeraInch},</p>


                                                            </div>
                                                            <div className="flex p-1 justify-between text-xs">
                                                                <p>ShalwarPaincha:</p>
                                                                <p className="mx-3 border  border-yellow-500  bg-yellow-500 text-white font-bold  rounded-md p-1">{user.shalwarPaincha}(Inch){user.shalwarPainchaInch},</p>


                                                            </div>


                                                        </div>
                                                        <div className=" p-4 font-bold text-gray-600 border-b  border-yellow-500  rounded-sm">
                                                            <div className="font-bold  text-yellow-500 ">
                                                                <p>Pockets:</p>


                                                            </div>
                                                            <div className="m-2">
                                                                <div className="p-1 flex text-xs">
                                                                    <p className="mt-2">Frond Pockets:</p>
                                                                    <p className="mx-3 border border-yellow-500 text-yellow-500 font-bold w-8 h-8 pl-1 pt-2  rounded-full ">{user.front}</p>

                                                                </div>


                                                                <div className="p-1 flex items-center text-xs">
                                                                    <p className="mt-2">Side Pockets:</p>
                                                                    <p className="mx-3 border border-yellow-500 text-yellow-500 font-bold w-8 h-8 pl-1 pt-2  rounded-full ">{user.side}</p>



                                                                </div>
                                                                <div className="p-1 flex text-xs">
                                                                    <p className="mt-2">Double side Pockets:</p>

                                                                    <p className="mx-3 border border-yellow-500 text-yellow-500 font-bold w-8 h-8 pl-1 pt-2 rounded-full ">{user.doubleSide}</p>



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

export default EnglishDetails
