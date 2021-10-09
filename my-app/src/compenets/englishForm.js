// import React from 'react'
import { db, app } from "../fire"

import Orders from '../pages/naap'
import OrderCard from '../pages/orderCard';
import OrderForm from "../pages/orderForm";
import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
function EnglishForm() {
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [option5, setOption5] = useState('');
    const [option6, setOption6] = useState('');
    const [option7, setOption7] = useState('');
    const [option8, setOption8] = useState('');
    const [optionInch, setOptionInch] = useState('');
    const [customerName, setCustomername] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
    const [users, setUsers] = useState([]);
    const [user, setForm] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const save = () => {
        handledata()
    }
    const handledata = () => {
        db.collection("naap").add({
            bt1: option1,
            bt2: option2,
            bt3: option3,
            bt4: option4,
            bt5: option5,
            bt6: option6,
            bt7: option7,
            bt88: option8,
            bt8: serialNumber,
            phone: optionInch,
            image: imageUrl,

            customer: customerName,
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
        <Tabs>

            <TabPanel >

                <div>

                    <div className=" shadow-xl  border p-2 pt-2 bg-white rounded">
                        <div className="mb-3 panalcolor justify-around flex desh">
                            <p className="  p-3 font-bold text-yellow-600">Wellcome To Tailor App</p>
                            {
                                user.map((res) => (

                                    <img src={res.image} className="border-2 border-yellow-600 rounded-full  w-12 h-12"></img>
                                ))
                            }

                        </div>
                        <div className="text-xs flex  justify-between">
                            <div className="flex text-gray-700 fonts-size font-bold items-center">
                                <p>S.No</p>
                                <input type="text" maxLength="4" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} className=" mx-1  border w-16 rounded font-bold fonts-size  border-gray-400 p-1" placeholder="S.no"></input>

                            </div>

                        </div>
                        <div className=" mt-2 fonts ">

                            <div className="flex items-center  w-full justify-between">
                                <div className=" fonts-size w-2/3">

                                    <input type="text" placeholder=" Customer Name" value={customerName} onChange={(e) => setCustomername(e.target.value)} className="border p-3 w-full   outline-none rounded border-gray-2 00 text-xs "></input>
                                </div>
                                <div className="fonts-size w-2/3  mx-1">

                                    <input type="number" placeholder="Customer Number" className=" p-3 outline-none border w-full  border-gray-200  text-xs rounded" value={optionInch} onChange={(e) => setOptionInch(e.target.value)}></input>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex w-full bg-gray-200  font-bold  p-4 text-yellow-600 text-sm rounded justify-between  ">
                                    <p>NAAP</p>
                                    <p className="mr-4">INCH</p>
                                </div>
                                <div className="justify-end p-3 flex">
                                    <div className="flex items-center">
                                        <Link to="/urduForm">
                                            <p className="w-3  hover:bg-yellow-600 border h-3 rounded-full"></p>{/* <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" /> */}
                                        </Link>

                                        <p className="mx-1 font-bold text-yellow-500">اردو</p>
                                    </div>
                                    <div className="flex items-center mx-4">
                                        <Link to="/englishForm">
                                            <p className="w-3 bg-yellow-600 border   h-3 rounded-full"></p>
                                        </Link>
                                        <p className="mx-1 font-bold text-yellow-500">English</p>
                                    </div>
                                </div>
                            </div>
                            <form className="mx-1 m-3" onSubmit={handledata}>

                                <div className="flex">
                                    <div className=" w-full">
                                        <div className="w-full flex ">
                                            <div className="w-1/2  flex">
                                                {/* <p className="text-gray-700 w-full border rounded-lg light-orange mt-1 p-3 font-bold">Lambai</p> */}
                                                <p className="text-gray-700 border w-full rounded-lg light-orange mt-1 p-3 font-bold">Kamees</p>

                                                <select className="light-orange border  p-3 mt-1 text-gray-700 rounded-lg font-bold " onChange={(e) => setOption1(e.target.value)}>
                                                    {
                                                        arr.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                            <div className="w-1/2 mx-2 flex">
                                                <p className="text-gray-700 w-full border rounded-lg light-orange mt-1 p-3 font-bold">Bazoo</p>

                                                <select className="light-orange border  p-3 mt-1 text-gray-700 rounded-lg font-bold " onChange={(e) => setOption2(e.target.value)}>
                                                    {
                                                        arr.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>

                                        </div>
                                        <div className="w-full flex ">
                                            <div className="w-1/2 flex">
                                                <p className="text-gray-700 w-full border rounded-lg light-orange mt-1 p-3 font-bold">Lambai</p>

                                                <select className="light-orange border  p-3 mt-1 text-gray-700 rounded-lg font-bold " onChange={(e) => setOption3(e.target.value)}>
                                                    {
                                                        arr.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                            <div className="w-1/2 mx-2 flex">
                                                {/* <p className="text-gray-700 w-full border rounded-lg light-orange mt-1 p-3 font-bold">Bazoo</p> */}
                                                <p className="text-gray-700 border rounded-lg w-full light-orange mt-1 p-3 font-bold">Theera</p>

                                                <select className="light-orange border  p-3 mt-1 text-gray-700 rounded-lg font-bold " onChange={(e) => setOption4(e.target.value)}>
                                                    {
                                                        arr.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>

                                        </div>
                                        <div className="w-full flex ">
                                            <div className="w-1/2 flex">
                                                {/* <p className="text-gray-700 w-full border rounded-lg light-orange mt-1 p-3 font-bold">Lambai</p> */}
                                                <p className="text-gray-700 border rounded-lg w-full light-orange mt-1 p-3 font-bold">Kalar</p>

                                                <select className="light-orange border  p-3 mt-1 text-gray-700 rounded-lg font-bold " onChange={(e) => setOption5(e.target.value)}>
                                                    {
                                                        arr.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                            <div className="w-1/2 mx-2 flex">
                                                <p className="text-gray-700 border w-full rounded-lg light-orange mt-1 p-3 font-bold">Chatee</p>

                                                <select className="light-orange border  p-3 mt-1 text-gray-700 rounded-lg font-bold " onChange={(e) => setOption6(e.target.value)}>
                                                    {
                                                        arr.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>

                                        </div>
                                        <div className="w-full flex ">
                                            <div className="w-1/2 flex">
                                                <p className="text-gray-700 border rounded-lg w-full light-orange mt-1 p-3 font-bold">Gheera</p>

                                                <select className="light-orange border  p-3 mt-1 text-gray-700 rounded-lg font-bold " onChange={(e) => setOption7(e.target.value)}>
                                                    {
                                                        arr.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                            <div className="w-1/2 mx-2 flex">
                                                <p className="text-gray-700 border rounded-lg w-full light-orange mt-1 p-3 font-bold">Pancha</p>

                                                <select className="light-orange border  p-3 mt-1 text-gray-700 rounded-lg font-bold " onChange={(e) => setOption8(e.target.value)}>
                                                    {
                                                        arr.map((user) => (
                                                            <option >{user}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>

                        </div>
                        <div className="justify-center  mb-12 flex p-2">
                            <button type="button" className="panalcolor w-32  text-xs rounded-lg  p-3 text-white font-bold rounded-lg  border" onClick={save}>SAVE
                            </button>
                            <input onChange={upload} type="file" className=" rounded  p-2"></input>

                        </div>

                    </div>


                </div>
            </TabPanel>

            <TabPanel>
                <Orders />

            </TabPanel>
            <TabPanel>
                <OrderCard />

            </TabPanel>
            <TabPanel>
                <OrderForm />

            </TabPanel>

            <TabList className="flex text-center panalcolor mt-12 fixed w-full bottom-0 p-2 rounded text-white font-bold">
                <Tab className=" p-3 w-1/2">Home</Tab>

                <Tab className=" w-1/2 p-3">Naap</Tab>
                <Tab className="w-1/2 p-3 ">Orders</Tab>
                <Tab className="w-1/2 p-3 ">OrdersForm</Tab>

                {/* <Tabs></Tabs> */}
            </TabList>
        </Tabs>
    )
}

export default EnglishForm
