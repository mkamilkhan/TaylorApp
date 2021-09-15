
import { db } from "../fire"
import App from '../App.css';

import Orders from './naap'
import OrderCard from './orderCard';
import OrderForm from "./orderForm";
import React, { useState } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



export default function Naap() {
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [option5, setOption5] = useState('');
    const [option6, setOption6] = useState('');
    const [option7, setOption7] = useState('');
    const [optionInch, setOptionInch] = useState('');
    const [customerName, setCustomername] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

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
            bt8: serialNumber,
            phone: optionInch,

            customer: customerName,
        })
            .then((resp) => {
                console.log("working: ", resp);
            })
            .catch((error) => {
                console.error("Error adding document: " + error);
            });

    }

    return (
        <Tabs>

            <TabPanel >

                <div className="bg-gray-100   ">

                    <div className=" shadow-xl  border p-2 mt-2 bg-white rounded-md">
                        <div className="text-xs flex  justify-between">
                            <div className="flex text-gray-700 fonts-size font-bold items-center">
                                <p>S.No</p>
                                <input type="text" maxLength="4" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} className=" mx-1  border w-16 rounded-md font-bold fonts-size  border-gray-400 p-1" placeholder="S.no"></input>

                            </div>

                        </div>
                        <div className=" mt-2 fonts ">

                            <div className="flex items-center  w-full justify-between">
                                <div className=" fonts-size w-2/3">
                                    <p className="font-bold text-gray-600">Customer Name:</p>
                                    <input type="text" placeholder=" Name" value={customerName} onChange={(e) => setCustomername(e.target.value)} className="border p-2 w-full   outline-none rounded-md border-gray-400 text-xs "></input>
                                </div>
                                <div className="fonts-size w-2/3  mx-1">
                                    <p className="font-bold text-gray-600">Customer P/
                                        Number</p>
                                    <input type="number" placeholder="Contect" className=" p-2 outline-none border w-full  border-gray-400 text-xs rounded-md" value={optionInch} onChange={(e) => setOptionInch(e.target.value)}></input>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex winaap font-bold orange p-3 text-white text-sm rounded-md justify-between  ">
                                    <p>NAAP</p>
                                    <p className="mr-4">INCH</p>
                                </div>
                                <div className="winlambai">
                                    <p className="text-gray-700 border rounded-lg light-orange mt-1 p-3 font-bold">Kamees</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className=" w-full">
                                    <div className="winlambai">
                                        <p className="text-gray-700 border rounded-lg light-orange mt-1 p-3 font-bold">Lambai</p>
                                    </div>
                                    <div className="winlambai ">
                                        <p className="text-gray-700 border rounded-lg light-orange mt-1 p-3 font-bold">Bazoo</p>
                                    </div>
                                    <div className=" winlambai">
                                        <p className="text-gray-700 border rounded-lg light-orange mt-1 p-3 font-bold">Teera</p>
                                    </div>
                                    <div className="winlambai ">
                                        <p className="text-gray-700 border rounded-lg light-orange mt-1 p-3 font-bold">Kalar</p>
                                    </div>
                                    <div className="winlambai ">
                                        <p className="text-gray-700 border rounded-lg light-orange mt-1 p-3 font-bold">Chatee</p>
                                    </div>
                                    <div className=" winlambai">
                                        <p className="text-gray-700 border rounded-lg light-orange mt-1 p-3 font-bold">Gheera</p>
                                    </div>
                                    <div className=" winlambai">
                                        <p className="text-gray-700 border rounded-lg light-orange mt-1 p-3 font-bold">Pancha</p>
                                    </div>
                                </div>
                                <div className=" flex     ">
                                    <form className="mx-1" onSubmit={handledata}>
                                        <select className="light-orange border  p-3 mt-1 text-gray-700 rounded-lg font-bold " onChange={(e) => setOption1(e.target.value)}>
                                            {
                                                arr.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }
                                        </select>
                                        <select className="light-orange border p-3 mt-1 text-gray-700 rounded-lg font-bold " onChange={(e) => setOption2(e.target.value)}>
                                            {
                                                arr.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }
                                        </select>
                                        <select className="light-orange border p-3 mt-1 text-gray-700 rounded-lg font-bold " onChange={(e) => setOption3(e.target.value)}>
                                            {
                                                arr.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }
                                        </select>
                                        <select className="light-orange border p-3 mt-2 text-gray-700 rounded-lg font-bold " onChange={(e) => setOption4(e.target.value)}>
                                            {
                                                arr.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }
                                        </select>
                                        <select className="light-orange border p-3 mt-1 text-gray-700 rounded-lg font-bold " onChange={(e) => setOption5(e.target.value)}>
                                            {
                                                arr.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }
                                        </select>
                                        <select className="light-orange border p-3 mt-2 text-gray-700 rounded-lg font-bold " onChange={(e) => setOption6(e.target.value)}>
                                            {
                                                arr.map((user) => (
                                                    <option >{user}</option>
                                                ))
                                            }
                                        </select>
                                        <select className="light-orange border p-3 mt-1 text-gray-700 rounded-lg font-bold " onChange={(e) => setOption7(e.target.value)}>
                                            {
                                                arr.map((user) => (
                                                    <option >{user}</option>

                                                ))
                                            }

                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* <Tabss /> */}
                        </div>
                        <div className="justify-center  flex p-2">
                            <button type="button" className="orange w-32 mb-12 text-xs rounded-lg  p-3 text-white font-bold rounded-lg  border" onClick={save}>SAVE
                            </button>
                        </div>
                    </div>
                    <div>
                        {/* </TabPanel> */}

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

            <TabList className="flex text-center orange fixed w-full bottom-0 p-1 rounded-md text-white font-bold">
                <Tab className=" p-3 w-1/2">Home</Tab>

                <Tab className=" w-1/2 p-3">Naap</Tab>
                <Tab className="w-1/2 p-3 ">Orders</Tab>
                <Tab className="w-1/2 p-3 ">OrdersForm</Tab>

                {/* <Tabs></Tabs> */}
            </TabList>
        </Tabs>

    )
}
