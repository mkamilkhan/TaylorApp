// import React from 'react'
import { db, app } from "../fire"
import FeatherIcon from 'feather-icons-react';
import Tabs from "../compenets/tabs";
import Orders from '../pages/naap'
import OrderCard from '../pages/orderCard';
import OrderForm from "../pages/orderForm";
import UrduCard from '../compenets/urduCard';
import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
// import { Tabs, } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
function UrduForm() {
    // const data = ["پینتیس", "پچاس", "انچاس", "اڑتالیس", "سینتالیس", "چھیالیس", "پینتالیس", "چوالیس", "تینتالیس", "بیالیس", "اکتالیس", "چالیس", "انتالیس", "اڑتیس", "سینتیس", "چھتیس", "ایک ", "دو", "تین", "چار", "پانچ", "چھ", "سات", "آٹھ", "نو", "دس", "گیارہ", "بارہ", "تیرہ", "چودہ", "پندرہ", "سولہ", "سترہ", "اٹھارہ", "انیس", "بیس", "اکیس", "بائیس", "تئیس", "چوبیس", "پچیس", "چھببیس", "ستائیس", "اٹھائیس", "انتیس", "تیس", "اکتیس", "بتیس", "تینتیس", "چونتیس"];
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
    const arr = ["1 / 2", "1 / 3", "1 / 4", "1 / 5"];

    const [CustomerNumber, setCustomerNumber] = useState('');
    const [CustomerName, setCustomerName] = useState('');
    const [SerialNumber, setSerialNumber] = useState('');
    const [Address, setAddress] = useState('');
    const [Lenght, setLenght] = useState('');
    const [LenghtInch, setLenghtInch] = useState('');
    const [Shoulder, setShoulder] = useState('');
    const [ShoulderInch, setShoulderInch] = useState('');
    const [Neck, setNeck] = useState('');
    const [NeckInch, setNeckInch] = useState('');
    const [Chest, setChest] = useState('');
    const [ChestInch, setChestInch] = useState('');
    const [Waist, setWaist] = useState('');
    const [WaistInch, setWaistInch] = useState('');
    const [Gheera, setGheera] = useState('');
    const [GheeraInch, setGheeraInch] = useState('');
    const [Gool, setGool] = useState('');
    const [Choras, setChoras] = useState('');
    const [Arm, setArm] = useState('');
    const [ArmInch, setArmInch] = useState('');
    const [Kaaf, setKaaf] = useState('');
    const [KaafInch, setKaafInch] = useState('');
    const [Kaafwidth, setKaafwidth] = useState('');
    const [ArmGoal, setArmGoal] = useState('');
    const [ArmGoalInch, setArmGoalInch] = useState('');
    const [ArmGoalInchInch, setArmGoalInchInch] = useState('');
    const [Collar, setCollar] = useState('');
    const [CollarInch, setCollarInch] = useState('');
    const [CollarInchCollor, setCollarInchCollor] = useState('');
    const [Baen, setBaen] = useState('');
    const [BaenInch, setBaenInch] = useState('');
    const [BaenInchBean, setBaenInchBean] = useState('');
    const [ShalwarLenght, setShalwarLenght] = useState('');
    const [ShalwarLenghtInch, setShalwarLenghtInch] = useState('');
    const [ShalwarLenghtInchShalwar, setShalwarLenghtInchShalwar] = useState('');
    const [ShalwarGheera, setShalwarGheera] = useState('');
    const [ShalwarGheeraInch, setShalwarGheeraInch] = useState('');
    const [ShalwarGheeraInchShalwar, setShalwarGheeraInchShalwar] = useState('');
    const [ShalwarPaincha, setShalwarPaincha] = useState('');
    const [ShalwarPainchaInch, setShalwarPainchaInch] = useState('');
    const [ShalwarPainchaInchShalwar, setShalwarPainchaInchShalwar] = useState('');
    const [Front, setFront] = useState('');
    const [FrontInch, setFrontInch] = useState('');
    const [Side, setSide] = useState('');
    const [SideInch, setSideInch] = useState('');
    const [Shalwar, setShalwar] = useState('');

    const [users, setUsers] = useState([]);
    const [user, setForm] = useState([]);
    const [imageUrl, setImageUrl] = useState('');



    const save = () => {
        Handledata()
    }
    const Handledata = () => {

        db.collection("urduMeasurements").add({
            customerName: CustomerName,
            customerNumber: CustomerNumber,
            address: Address,
            serialNumber: SerialNumber,
            lenght: Lenght,
            lenghtInch: LenghtInch,
            shalwarGheera: ShalwarGheera,
            shalwar: Shalwar,
            shalwarGheeraInchShalwar: ShalwarGheeraInchShalwar,
            shalwarPaincha: ShalwarPaincha,
            side: Side,
            sideInch: SideInch,
            front: Front,
            frontInch: FrontInch,
            shalwarPainchaInch: ShalwarPainchaInch,
            shalwarGheeraInch: ShalwarGheeraInch,
            shalwarPainchaInchShalwar: ShalwarPainchaInchShalwar,
            shalwarLenghtInchShalwar: ShalwarLenghtInchShalwar,
            shalwarLenghtInch: ShalwarLenghtInch,
            shalwarLenght: ShalwarLenght,
            baenInchBean: BaenInchBean,
            baenInch: BaenInch,
            baen: Baen,
            collarInchCollor: CollarInchCollor,
            collarInch: CollarInch,
            collar: Collar,
            armGoalInchInch: ArmGoalInchInch,
            armGoalInch: ArmGoalInch,
            armGoal: ArmGoal,
            kaafwidth: Kaafwidth,
            kaafInch: KaafInch,
            kaaf: Kaaf,
            armInch: ArmInch,
            arm: Arm,
            choras: Choras,
            Gool: Gool,
            gheeraInch: GheeraInch,
            gheera: Gheera,
            waistInch: WaistInch,
            waist: Waist,
            chestInch: ChestInch,
            chest: Chest,
            neckInch: NeckInch,
            neck: Neck,
            shoulderInch: ShoulderInch,
            shoulder: Shoulder,
            front: Front,
            frontInch: FrontInch,
            image: imageUrl,

        })
            .then((resp) => {
                console.log("working: ", resp);
            })
            .catch((error) => {
                console.error("Error adding document: " + error);
            });

    }
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
    const upload = async (e) => {
        const file = e.target.files[0];
        console.log("sjkla")
        const storageRef = app.storage().ref("customerProfile").child(file.name)
        await storageRef.put(file)
        storageRef.getDownloadURL().then((url) => {
            setImageUrl(url)
        })
    }

    return (
        <div>

            <div className="mb-12 ">

                < div className="bg-gray-800  " >


                    <div className="p-4  bg-yellow-500 justify-end flex border">
                        <p className="text-yellow-800 mr-2 text-lg font-bold">کسٹمر کی پیمائش</p>
                    </div>
                    <div className="mx-2">
                        <div className="flex  mt-2 w-full">

                            <div className="w-1/2 mx-1 p-2">
                                <input type="number" maxLength="4" value={SerialNumber} onChange={(e) => setSerialNumber(e.target.value)} className="border-b-2 bg-gray-800 font-bold text-xs outline-none text-yellow-500  hover:border-yellow-500 p-2 w-full" placeholder="سیریل نمبر"></input>
                            </div>
                            <div className="w-1/2 mx-1 p-2">
                                <input type="text" value={CustomerName} onChange={(e) => setCustomerName(e.target.value)} className=" border-b-2 bg-gray-800 font-bold text-xs outline-none text-yellow-500  hover:border-yellow-500 w-full p-2" placeholder="نام"></input>

                            </div>
                        </div>
                        <div className="flex  mt-2 w-full">

                            <div className="w-1/2 mx-1">
                                <input type="number" value={CustomerNumber} onChange={(e) => setCustomerNumber(e.target.value)} className="bg-gray-800 border-b-2 font-bold text-xs outline-none text-yellow-500  hover:border-yellow-500 w-full p-2" placeholder="موبائل فون کانمبر"></input>
                            </div>
                            <div className="w-1/2 mx-1">
                                <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} className="border-b-2 bg-gray-800 font-bold text-xs outline-none text-yellow-500  hover:border-yellow-500 p-2 w-full" placeholder="پتہ"></input>

                            </div>
                        </div>
                        <form onSubmit={Handledata} className="p-2 text-gray-200">
                            <div className=" p-2 flex justify-end">

                                <div className="flex items-center mx-4">
                                    <Link to="/englishForm">
                                        <p className="w-3 border   h-3 rounded-full"></p>
                                    </Link>
                                    <p className="mx-1 font-bold text-yellow-500">English</p>
                                </div>
                                <div className="flex items-center">
                                    <Link to="/urduForm">
                                        <p className="w-3 bg-yellow-600  hover:bg-yellow-600 border h-3 rounded-full"></p>
                                    </Link>

                                    <p className="mx-1 font-bold text-yellow-500">اردو</p>
                                </div>
                            </div>
                            <div className="font-bold flex justify-end text-yellow-500 m-2 text-md">
                                <p> قمیص پیمائش    </p>

                            </div>



                            <div className="flex font-bold p-1 text-xs w-full items-center justify-between ">

                                <div className="flex ">
                                    <select onChange={(e) => setLenght(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >
                                        <option >آدھا انچ</option>
                                        {
                                            arr.map((user) => (
                                                <option >{user}</option>
                                            ))
                                        }


                                    </select>
                                    <select onChange={(e) => setLenghtInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >


                                        <option >(انچ)</option>
                                        {
                                            data.map((user) => (
                                                <option >{user}</option>
                                            ))
                                        }

                                    </select>
                                </div>
                                <p>لمبائی</p>

                            </div>
                            <form className=" border border-gray-700 p-2 rounded  items-center">
                                <div className="flex font-bold text-xs  p-1 w-full items-center justify-between ">
                                    <div className="flex ">
                                        <select onChange={(e) => setArmInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >

                                            <option >آدھا انچ</option>
                                            {
                                                arr.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }
                                        </select>
                                        <select onChange={(e) => setArm(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >

                                            <option >(انچ)</option>
                                            {
                                                data.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <p>بازو</p>

                                </div>

                                <div className="flex items-center justify-between  font-bold text-xs ">

                                    <div className="flex  ">
                                        <select onChange={(e) => setKaafwidth(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >

                                            <option >آدھا انچ</option>
                                            {
                                                arr.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }
                                        </select>
                                        <select onChange={(e) => setKaafInch(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >
                                            <option >(انچ)</option>
                                            {
                                                data.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }

                                        </select>
                                    </div>
                                    <div className="flex">
                                        <div className="">

                                            <p className="">کف:</p>

                                        </div>
                                        <input onChange={(e) => setKaaf(e.target.value)} className=" m-2" type="radio" name="fav_language" />
                                    </div>
                                </div>
                                <div className="flex  items-center justify-between font-bold text-xs ">


                                    <div className="flex ">
                                        <select onChange={(e) => setArmGoalInchInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >

                                            <option >آدھا انچ</option>
                                            {
                                                arr.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }
                                        </select>
                                        <select onChange={(e) => setArmGoalInch(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >
                                            <option >(انچ)</option>
                                            {
                                                data.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }

                                        </select>
                                    </div>
                                    <div className="flex">
                                        <div className="">


                                            <p>چیک پٹی</p>
                                        </div>
                                        <input onChange={(e) => setArmGoal(e.target.value)} className=" m-2" type="radio" name="fav_language" value="HTML" />
                                    </div>
                                </div>
                            </form>
                            <form className="border border-gray-700 p-2 rounded  my-2">

                                <div className="flex  items-center justify-between  font-bold text-xs ">

                                    <div className="flex  ">
                                        <select onChange={(e) => setCollarInchCollor(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >
                                            <option >آدھا انچ</option>
                                            {
                                                arr.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }
                                        </select>
                                        <select onChange={(e) => setCollarInch(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >

                                            <option >(انچ)</option>
                                            {
                                                data.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }

                                        </select>
                                    </div>
                                    <div className="flex ">
                                        <p className="">کالر:</p>
                                        <input onChange={(e) => setCollar(e.target.value)} className="mx-2" type="radio" name="fav_language" value="HTML" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between font-bold text-xs ">

                                    <div className="flex ">

                                        <select onChange={(e) => setBaenInchBean(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >
                                            <option >آدھا انچ</option>
                                            {
                                                arr.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }
                                        </select>
                                        <select onChange={(e) => setBaenInch(e.target.value)} className="bg-gray-800  mx-1  p-3 mt-1 text-white rounded-lg font-bold " >
                                            <option >(انچ)</option>
                                            {
                                                data.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }

                                        </select>
                                    </div>
                                    <div className="flex">

                                        <p>کٹ بین:</p>
                                        <input onChange={(e) => setBaen(e.target.value)} className="mx-2" type="radio" name="fav_language" value="CSS" />
                                    </div>
                                </div>
                            </form>
                            <div className="flex font-bold p-1 text-xs w-full items-center justify-between ">
                                <div className="flex ">
                                    <select onChange={(e) => setShoulder(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >

                                        <option >آدھا انچ</option>
                                        {
                                            arr.map((user) => (
                                                <option >{user}</option>
                                            ))
                                        }
                                    </select>
                                    <select onChange={(e) => setShoulderInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >


                                        <option >(انچ)</option>
                                        {
                                            data.map((user) => (
                                                <option >{user}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <p>چھوڑاںؑی</p>
                            </div>

                            <div className="flex font-bold text-xs p-1 w-full items-center justify-between ">
                                <div className="flex ">
                                    <select onChange={(e) => setWaist(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >


                                        <option >آدھا انچ</option>
                                        {
                                            arr.map((user) => (
                                                <option >{user}</option>
                                            ))
                                        }

                                    </select>
                                    <select onChange={(e) => setWaistInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >

                                        <option >(انچ)</option>
                                        {
                                            data.map((user) => (
                                                <option >{user}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <p>چھاتی</p>

                            </div>
                            <div className=" rounded-md">
                                <div className="flex p-1 font-bold text-xs w-full items-center justify-between ">

                                    <div className="flex ">
                                        <select onChange={(e) => setGheeraInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >

                                            <option >آدھا انچ</option>
                                            {
                                                arr.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }
                                        </select>
                                        <select onChange={(e) => setGheera(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >
                                            <option >(انچ)</option>
                                            {
                                                data.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <p className="font-bold ml-4 text-yellow-500">دامن</p>

                                </div>
                                <div >
                                    <form className="flex p-2 items-center justify-end ">

                                        <div className="flex items-center font-bold text-xs ml-8">
                                            <input onChange={(e) => setGool(e.target.value)} className="mx-2" type="radio" name="fav_language" value="HTML" />
                                            <p>گول دامن</p>
                                        </div>
                                        <div className="flex items-center font-bold text-xs mx-2">
                                            <input onChange={(e) => setChoras(e.target.value)} className="mx-2" type="radio" name="fav_language" value="CSS" />
                                            <p>چورس دامن</p>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className=" my-2 rounded-xl items-center ">

                                <div className=" p-1">

                                    <div className="flex font-bold p-1 text-xs w-full items-center justify-between ">
                                        <div className="flex ">
                                            <select onChange={(e) => setShoulder(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >

                                                <option >آدھا انچ</option>
                                                {
                                                    arr.map((user) => (
                                                        <option >{user}</option>
                                                    ))
                                                }
                                            </select>
                                            <select onChange={(e) => setShoulderInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >


                                                <option >(انچ)</option>
                                                {
                                                    data.map((user) => (
                                                        <option >{user}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <p>فرنٹ یٹی</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" border-b border-gray-700 p-1">
                                <div>
                                    <div className="font-bold flex justify-end text-yellow-500">
                                        <p>جیبیں:</p>
                                    </div>
                                    <div>
                                        <div className="flex my-2 font-bold text-xs  p-1 w-full items-center justify-between ">
                                            <div className="flex ">
                                                <input onChange={(e) => setShalwarPaincha(e.target.value)} className="mx-2" type="radio" value="CSS" />

                                            </div>
                                            <p className="ml-8">سامنے جیب۔:</p>

                                        </div>
                                        <div className="flex font-bold text-xs  p-1 w-full items-center justify-between ">
                                            <div className="flex ">
                                                <input onChange={(e) => setShalwarPaincha(e.target.value)} className="mx-2" type="radio" value="CSS" />

                                            </div>
                                            <p className="ml-8">سائیڈ جیب</p>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end mx-2  mt-3 text-yellow-500 font-bold">

                                <p>شلوار </p>
                            </div>
                            <div className="   items-center ">

                                <div className=" p-1">

                                    <div className=" items-center">


                                        <form className=" p-1 my-1 rounded-xl">

                                            <div className="flex items-center justify-between font-bold text-xs ">

                                                <div className="flex ">
                                                    <select onChange={(e) => setShalwarLenghtInchShalwar(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >
                                                        <option >آدھا انچ</option>
                                                        {
                                                            arr.map((user) => (
                                                                <option >{user}</option>
                                                            ))
                                                        }
                                                    </select>
                                                    <select onChange={(e) => setShalwarLenghtInch(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >
                                                        <option >(انچ)</option>
                                                        {
                                                            data.map((user) => (
                                                                <option >{user}</option>
                                                            ))
                                                        }

                                                    </select>
                                                </div>
                                                <div className="flex">

                                                    <p>شلوار کی لمبائی</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between font-bold text-xs ">

                                                <div className="flex ">
                                                    <select onChange={(e) => setShalwarGheeraInchShalwar(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >
                                                        <option >آدھا انچ</option>
                                                        {
                                                            arr.map((user) => (
                                                                <option >{user}</option>
                                                            ))
                                                        }
                                                    </select>
                                                    <select onChange={(e) => setShalwarGheeraInch(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >
                                                        <option >(انچ)</option>
                                                        {
                                                            data.map((user) => (
                                                                <option >{user}</option>
                                                            ))
                                                        }

                                                    </select>
                                                </div>
                                                <div className="flex">

                                                    <p>شلوار پانچھ۔</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-end font-bold text-xs ">


                                                <div className="flex m-2">

                                                    <p> شلوار جیب    </p>
                                                    <input onChange={(e) => setShalwarPaincha(e.target.value)} className="mx-2" type="radio" name="fav_language" value="CSS" />
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full items-center">

                                <Link to="/urduCard" className="w-full">
                                    <div className="  p-2  rounded-lg  text-center bg-yellow-500 m-4">

                                        <button className="font-bold p-2  " onClick={save}>شامل کریں</button>
                                    </div>

                                </Link>
                                <img src={imageUrl} className="rounded-full border border-yellow-500   w-12 h-12" />
                            </div>
                            <div className="p-2 my-2 bg-white ">

                                <input onChange={upload} type="file" className="border w-48 rounded  p-2"></input>
                            </div>

                        </form>
                    </div>
                </div>
                <Tabs />
            </div >
        </div>
    )
}

export default UrduForm
