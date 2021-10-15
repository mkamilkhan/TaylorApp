// import React from 'react'
import { db, app } from "../fire"
import Tabs from "../compenets/tabs";
// import useInfiniteScroll from 'react-infinite-scroll-hook';
import Orders from '../pages/naap'
import OrderCard from '../pages/orderCard';
import OrderForm from "../pages/orderForm";

import React, { useState, useEffect } from 'react'
// import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

// import 'react-tabs/style/react-tabs.css';
function EnglishForm() {
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
    const [KaafRatio, setKaafRatio] = useState('');
    const [Kaaf, setKaaf] = useState('');
    const [KaafInch, setKaafInch] = useState('');
    const [Kaafwidth, setKaafwidth] = useState('');
    const [KaafwidthInch, setKaafwidthInch] = useState('');
    // 
    const [ArmRation, setArmRation] = useState('');
    const [ArmGoal, setArmGoal] = useState('');
    const [ArmGoalInch, setArmGoalInch] = useState('');
    const [ArmGoalAram, setArmGoalAram] = useState('');
    const [ArmGoalAramInch, setArmGoalAramInch] = useState('');
    // 
    const [Collar, setCollar] = useState('');
    const [CollarInch, setCollarInch] = useState('');
    const [CollarInchCollor, setCollarInchCollor] = useState('');
    const [Baen, setBaen] = useState('');
    const [BaenInch, setBaenInch] = useState('');
    const [BaenInchBean, setBaenInchBean] = useState('');
    const [ShalwarLenght, setShalwarLenght] = useState('');
    const [ShalwarLenghtInch, setShalwarLenghtInch] = useState('');
    const [ShalwarGheera, setShalwarGheera] = useState('');
    const [ShalwarGheeraInch, setShalwarGheeraInch] = useState('');
    const [ShalwarPaincha, setShalwarPaincha] = useState('');
    const [ShalwarPainchaInch, setShalwarPainchaInch] = useState('');
    const [Front, setFront] = useState('');
    const [DoubleSide, SetDoubleSide] = useState('');
    const [Side, setSide] = useState('');
    const [Shalwar, setShalwar] = useState('');

    const [users, setUsers] = useState([]);
    const [user, setForm] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const save = () => {
        Handledata()
    }
    const Handledata = () => {
        db.collection("englsihMeasurements").add({
            customerName: CustomerName,
            customerNumber: CustomerNumber,
            address: Address,
            serialNumber: SerialNumber,
            lenght: Lenght,
            lenghtInch: LenghtInch,
            shalwar: Shalwar,
            side: Side,
            front: Front,
            doubleSide: DoubleSide,
            shalwarPainchaInch: ShalwarPainchaInch,
            shalwarPaincha: ShalwarPaincha,
            shalwarGheeraInch: ShalwarGheeraInch,
            shalwarGheera: ShalwarGheera,
            shalwarLenghtInch: ShalwarLenghtInch,
            shalwarLenght: ShalwarLenght,
            baenInchBean: BaenInchBean,
            baenInch: BaenInch,
            baen: Baen,
            collarInchCollor: CollarInchCollor,
            collarInch: CollarInch,
            collar: Collar,

            armRation: ArmRation,
            armGoal: ArmGoal,
            armGoalInch: ArmGoalInch,
            armGoalAram: ArmGoalAram,
            armGoalAramInch: ArmGoalAramInch,


            kaafRatio: KaafRatio,
            kaaf: Kaaf,
            kaafInch: KaafInch,
            kaafwidth: Kaafwidth,
            kaafwidthInch: KaafwidthInch,

            armInch: ArmInch,
            arm: Arm,
            choras: Choras,
            gool: Gool,
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
        db.collection('naap').onSnapshot((resp) => {

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
        <div className="mb-12 ">

            < div className="bg-gray-800  " >


                <div className="p-4 bg-yellow-500 flex border">
                    <p className="text-yellow-800 text-lg  font-bold">Measurements Of Customer</p>
                </div>
                <div className="mx-2">
                    <div className="flex  mt-2 w-full">

                        <div className="w-1/2 mx-1">
                            <input type="number" maxLength="4" value={SerialNumber} onChange={(e) => setSerialNumber(e.target.value)} className="border-b-2 bg-gray-800 font-bold text-xs outline-none text-yellow-500  hover:border-yellow-500 p-3 w-full" placeholder="S.No"></input>
                        </div>
                        <div className="w-1/2 mx-1">
                            <input type="text" value={CustomerName} onChange={(e) => setCustomerName(e.target.value)} className=" border-b-2 bg-gray-800 font-bold text-xs outline-none text-yellow-500  hover:border-yellow-500 w-full p-3" placeholder="Name"></input>

                        </div>
                    </div>
                    <div className="flex  mt-2 w-full">

                        <div className="w-1/2 mx-1">
                            <input type="number" value={CustomerNumber} onChange={(e) => setCustomerNumber(e.target.value)} className="bg-gray-800 border-b-2 font-bold text-xs outline-none text-yellow-500  hover:border-yellow-500 w-full p-3" placeholder="Mobile Number"></input>
                        </div>
                        <div className="w-1/2 mx-1">
                            <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} className="border-b-2 bg-gray-800 font-bold text-xs outline-none text-yellow-500  hover:border-yellow-500 p-3 w-full" placeholder="City/Village "></input>

                        </div>
                    </div>
                    <form onSubmit={Handledata} className="p-2 text-gray-200">
                        <div className=" p-2 flex justify-end">

                            <div className="flex items-center mx-4">
                                <Link to="/englishForm">
                                    <p className="w-3 border bg-yellow-600   h-3 rounded-full"></p>
                                </Link>
                                <p className="mx-1 font-bold text-yellow-500">English</p>

                            </div>
                            <div className="flex items-center">
                                <Link to="/urduForm">
                                    <p className="w-3  hover:bg-yellow-600 border h-3 rounded-full"></p>
                                </Link>
                                <p className="mx-1 font-bold text-yellow-500">  اردو</p>

                            </div>
                        </div>
                        <div className="font-bold text-yellow-500 m-2 text-md">
                            <p>Measurements (inch)</p>

                        </div>



                        <div className="flex font-bold p-1 text-xs w-full items-center justify-between ">

                            <p>Lenght:</p>
                            <div className="flex ">
                                <select onChange={(e) => setLenght(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >

                                    <option >Inch</option>
                                    {
                                        data.map((user) => (
                                            <option >{user}</option>
                                        ))
                                    }

                                </select>
                                <select onChange={(e) => setLenghtInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >


                                    <option >1/2</option>
                                    <option >1/3</option>
                                    <option >1/4</option>
                                    <option >1/5</option>

                                </select>
                            </div>

                        </div>
                        <div className="flex font-bold p-1 text-xs w-full items-center justify-between ">
                            <p>Shoulder:</p>
                            <div className="flex ">
                                <select onChange={(e) => setShoulder(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >
                                    <option >Inch</option>
                                    {
                                        data.map((user) => (
                                            <option >{user}</option>
                                        ))
                                    }

                                </select>
                                <select onChange={(e) => setShoulderInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >


                                    <option >1/2</option>
                                    <option >1/3</option>
                                    <option >1/4</option>
                                    <option >1/5</option>

                                </select>
                            </div>

                        </div>

                        <div className="flex font-bold p-1 text-xs w-full items-center justify-between ">
                            <p>Neck:</p>
                            <div className="flex ">
                                <select onChange={(e) => setNeck(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >
                                    <option >Inch</option>
                                    {
                                        data.map((user) => (
                                            <option >{user}</option>
                                        ))
                                    }
                                </select>
                                <select onChange={(e) => setNeckInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >


                                    <option >1/2</option>
                                    <option >1/3</option>
                                    <option >1/4</option>
                                    <option >1/5</option>

                                </select>
                            </div>

                        </div>
                        <div className="flex font-bold text-xs p-1 w-full items-center justify-between ">
                            <p>Chest:</p>
                            <div className="flex ">
                                <select onChange={(e) => setChest(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >

                                    <option >Inch</option>
                                    {
                                        data.map((user) => (
                                            <option >{user}</option>
                                        ))
                                    }
                                </select>
                                <select onChange={(e) => setChestInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >


                                    <option >1/2</option>
                                    <option >1/3</option>
                                    <option >1/4</option>
                                    <option >1/5</option>

                                </select>
                            </div>

                        </div>
                        <div className="flex font-bold text-xs p-1 w-full items-center justify-between ">
                            <p>Waist:</p>
                            <div className="flex ">
                                <select onChange={(e) => setWaist(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >
                                    <option >Inch</option>
                                    {
                                        data.map((user) => (
                                            <option >{user}</option>
                                        ))
                                    }



                                </select>
                                <select onChange={(e) => setWaistInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >


                                    <option >1/2</option>
                                    <option >1/3</option>
                                    <option >1/4</option>
                                    <option >1/5</option>

                                </select>
                            </div>

                        </div>
                        <div className=" rounded-md">
                            <div className="flex p-1 font-bold text-xs w-full items-center justify-between ">

                                <p className="font-bold ml-4 text-yellow-500">Gheera:</p>
                                <div className="flex ">
                                    <select onChange={(e) => setGheera(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >
                                        <option >Inch</option>
                                        {
                                            data.map((user) => (
                                                <option >{user}</option>
                                            ))
                                        }
                                    </select>
                                    <select onChange={(e) => setGheeraInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >


                                        <option >1/2</option>
                                        <option >1/3</option>
                                        <option >1/4</option>
                                        <option >1/5</option>

                                    </select>
                                </div>

                            </div>
                            <div >
                                <form className="flex p-2 items-center ">

                                    <div className="flex items-center font-bold text-xs ml-8">
                                        <input onChange={(e) => setGool(e.target.value)} className="mx-2" type="radio" value={Gool} />
                                        <p>Gool</p>
                                    </div>
                                    <div className="flex items-center font-bold text-xs mx-2">
                                        <input onChange={(e) => setChoras(e.target.value)} className="mx-2" type="radio" value={Choras} />
                                        <p>Choras</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex font-bold text-xs  p-1 w-full items-center justify-between ">
                            <p>Arm:</p>
                            <div className="flex ">
                                <select onChange={(e) => setArm(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >

                                    <option >Inch</option>
                                    {
                                        data.map((user) => (
                                            <option >{user}</option>
                                        ))
                                    }
                                </select>
                                <select onChange={(e) => setArmInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >


                                    <option >1/2</option>
                                    <option >1/3</option>
                                    <option >1/4</option>
                                    <option >1/5</option>

                                </select>
                            </div>

                        </div>
                        <div className=" border border-gray-600 p-2 rounded-xl items-center ">

                            <div className=" p-1">

                                <form className=" items-center">

                                    <div className="flex  items-center justify-between  font-bold text-xs ">
                                        <div className="flex">
                                            <input onChange={(e) => setKaafRatio(e.target.value)} className=" m-2 mt-5" type="radio" name="fav_language" />
                                            <div className="">

                                                <p className="my-2">Kaaf:</p>
                                                <p>Kaaf-width</p>
                                            </div>
                                        </div>
                                        <div className="  ">
                                            <div className=" flex">

                                                <select onChange={(e) => setKaaf(e.target.value)} className="bg-gray-800  mx-1 p-1 mt-1 text-gray-100 rounded-lg font-bold " >
                                                    <option >Inch</option>
                                                    {
                                                        data.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }

                                                </select>
                                                <select onChange={(e) => setKaafInch(e.target.value)} className="bg-gray-800   p-1 mt-1 text-white rounded-lg font-bold " >


                                                    <option >1/2</option>
                                                    <option >1/3</option>
                                                    <option >1/4</option>
                                                    <option >1/5</option>

                                                </select>
                                            </div>
                                            <div>
                                                <select onChange={(e) => setKaafwidth(e.target.value)} className="bg-gray-800  mx-1 p-1 mt-1 text-gray-100 rounded-lg font-bold " >
                                                    <option >Inch</option>
                                                    {
                                                        data.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }

                                                </select>

                                                <select onChange={(e) => setKaafwidthInch(e.target.value)} className="bg-gray-800   p-1 mt-1 text-white rounded-lg font-bold " >


                                                    <option >1/2</option>
                                                    <option >1/3</option>
                                                    <option >1/4</option>
                                                    <option >1/5</option>

                                                </select>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex  items-center justify-between mt-2 font-bold text-xs ">
                                        <div className="flex">
                                            <input onChange={(e) => setArmRation(e.target.value)} className=" m-2 mt-5" type="radio" name="fav_language" />
                                            <div className="">
                                                <p className="my-2">Arm</p>
                                                <p >Arm Goal</p>

                                            </div>
                                        </div>
                                        <div className="  ">
                                            <div className=" flex">

                                                <select onChange={(e) => setArmGoal(e.target.value)} className="bg-gray-800  mx-1 p-1 mt-1 text-gray-100 rounded-lg font-bold " >
                                                    <option >Inch</option>
                                                    {
                                                        data.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }

                                                </select>
                                                <select onChange={(e) => setArmGoalInch(e.target.value)} className="bg-gray-800   p-1 mt-1 text-white rounded-lg font-bold " >


                                                    <option >1/2</option>
                                                    <option >1/3</option>
                                                    <option >1/4</option>
                                                    <option >1/5</option>

                                                </select>
                                            </div>
                                            <div>
                                                <select onChange={(e) => setArmGoalAram(e.target.value)} className="bg-gray-800  mx-1 p-1 mt-1 text-gray-100 rounded-lg font-bold " >
                                                    <option >Inch</option>
                                                    {
                                                        data.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }

                                                </select>

                                                <select onChange={(e) => setArmGoalAramInch(e.target.value)} className="bg-gray-800   p-1 mt-1 text-white rounded-lg font-bold " >


                                                    <option >1/2</option>
                                                    <option >1/3</option>
                                                    <option >1/4</option>
                                                    <option >1/5</option>

                                                </select>
                                            </div>

                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="   items-center ">

                            <div className=" p-1">

                                <div className=" items-center">
                                    <form>

                                        <div className="flex  items-center justify-between  font-bold text-xs ">
                                            <div className="flex ">
                                                <input onChange={(e) => setCollar(e.target.value)} className="mx-2" type="radio" name="fav_language" value="HTML" />
                                                <p className="">Collar:</p>
                                            </div>
                                            <div className="flex  ">
                                                <select onChange={(e) => setCollarInch(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >

                                                    <option >Inch</option>
                                                    {
                                                        data.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }

                                                </select>
                                                <select onChange={(e) => setCollarInchCollor(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >


                                                    <option >1/2</option>
                                                    <option >1/3</option>
                                                    <option >1/4</option>
                                                    <option >1/5</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between font-bold text-xs ">
                                            <div className="flex">
                                                <input onChange={(e) => setBaen(e.target.value)} className="mx-2" type="radio" name="fav_language" value={Baen} />

                                                <p>Baen:</p>
                                            </div>
                                            <div className="flex ">

                                                <select onChange={(e) => setBaenInch(e.target.value)} className="bg-gray-800  mx-1  p-3 mt-1 text-white rounded-lg font-bold " >
                                                    <option >Inch</option>
                                                    {
                                                        data.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }

                                                </select>
                                                <select onChange={(e) => setBaenInchBean(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >
                                                    <option >1/2</option>
                                                    <option >1/3</option>
                                                    <option >1/4</option>
                                                    <option >1/5</option>

                                                </select>
                                            </div>
                                        </div>
                                    </form>

                                    <form className="border border-gray-600 p-2 my-2 rounded-xl">

                                        <div className="flex items-center justify-between font-bold text-xs ">
                                            <div className="flex">

                                                <p>Shalwar Lenght:</p>
                                            </div>
                                            <div className="flex ">
                                                <select onChange={(e) => setShalwarLenght(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >
                                                    <option >Inch</option>
                                                    {
                                                        data.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }

                                                </select>
                                                <select onChange={(e) => setShalwarLenghtInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >
                                                    <option >1/2</option>
                                                    <option >1/3</option>
                                                    <option >1/4</option>
                                                    <option >1/5</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between font-bold text-xs ">
                                            <div className="flex">

                                                <p>Shalwar Gheera:</p>
                                            </div>
                                            <div className="flex ">
                                                <select onChange={(e) => setShalwarGheera(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >
                                                    <option >Inch</option>
                                                    {
                                                        data.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }

                                                </select>
                                                <select onChange={(e) => setShalwarGheeraInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >
                                                    <option >1/2</option>
                                                    <option >1/3</option>
                                                    <option >1/4</option>
                                                    <option >1/5</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between font-bold text-xs ">
                                            <div className="flex">

                                                <p>Shalwar Paincha:</p>
                                            </div>
                                            <div className="flex ">
                                                <select onChange={(e) => setShalwarPaincha(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >
                                                    <option >Inch</option>
                                                    {
                                                        data.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }

                                                </select>
                                                <select onChange={(e) => setShalwarPainchaInch(e.target.value)} className="bg-gray-800   p-3 mt-1 text-white rounded-lg font-bold " >
                                                    <option >1/2</option>
                                                    <option >1/3</option>
                                                    <option >1/4</option>
                                                    <option >1/5</option>

                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                    <div className=" rounded-xl p-1">
                                        <div>
                                            <div className="font-bold  text-yellow-500">
                                                <p>Pockets:</p>
                                            </div>
                                            <div>
                                                <div className="flex font-bold text-xs  p-1 w-full items-center justify-between ">
                                                    <p className="ml-8">Front:</p>
                                                    <div className="flex ">
                                                        <select onChange={(e) => setFront(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >

                                                            <option >Front</option>
                                                            <option >Yes</option>
                                                            <option >No</option>

                                                        </select>

                                                    </div>

                                                </div>
                                                <div className="flex font-bold text-xs  p-1 w-full items-center justify-between ">
                                                    <p className="ml-8">Side:</p>
                                                    <div className="flex ">
                                                        <select onChange={(e) => setSide(e.target.value)} className="bg-gray-800  mx-1  p-3 mt-1 text-white rounded-lg font-bold " >



                                                            <option >Side</option>
                                                            <option >Yes</option>
                                                            <option >No</option>

                                                        </select>

                                                    </div>

                                                </div>
                                                <div className="flex font-bold text-xs  p-1 w-full items-center justify-between ">
                                                    <p className="ml-8">Doubel Side Pockets:</p>
                                                    <div className="flex ">
                                                        <select onChange={(e) => SetDoubleSide(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-white rounded-lg font-bold " >

                                                            <option >Doubel Side Pockets</option>


                                                            <option >Yes</option>
                                                            <option >No</option>

                                                        </select>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/englishCard" className="flex w-full items-center">
                            <div className="  p-2 border border-yellow-700 rounded-lg w-full text-center bg-yellow-500 m-4">

                                <button className="font-bold p-2  " onClick={save}>Submit</button>
                            </div>
                            <img src={imageUrl} className="rounded-full border border-yellow-700 w-12 h-12" />

                        </Link>
                        <div className="p-2 my-2 bg-white ">

                            <input onChange={upload} type="file" className="border w-48 rounded  p-2"></input>
                        </div>

                    </form>
                </div>
            </div>
            <Tabs />
        </div >

    )
}
export default EnglishForm




















