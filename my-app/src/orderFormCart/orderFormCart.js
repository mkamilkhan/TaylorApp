import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import Home from '../pages/home';
import { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
// import Assets from '../assets/taab.jpeg'
import { app, db } from "../fire"
// import FeatherIcon from 'feather-icons-react';
export default function OrderFormCart() {
    const [date, setDate] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [typeOfCloth, setTypeOfCloth] = useState('');
    const [numberOfSuits, setNumberOfSuits] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [paidAmount, setPaidAmount] = useState('');
    const [remainingAmount, setRemainingAmount] = useState('');
    const [progress, setProgress] = useState('');
    const [users, setUsers] = useState([0]);
    const [customerName, setCustomerName] = useState([]);
    // const [id, setIt] = useState('')s


    const handledata = () => {

        db.collection("orders").add({
            typeOfCloths: typeOfCloth,
            dueDates: dueDate,
            numberOfSuitss: numberOfSuits,
            totalAmounts: totalAmount,
            paidAmounts: paidAmount,
            progresss: progress,
            remainingAmounts: remainingAmount,
            dates: date,
            // naapid: id,
            customer: customerName


        })
            .then((resp) => {
                console.log("working: ", resp);
            })
            .catch((error) => {
                console.error("Error adding document: " + error);
            });


    }

    const logout = () => {
        app.auth().signOut().then(function () {
            // navigator('')
            console.log("Sign-out successful")
            // Redirect to = "./home"
            // console.log(, "sigout")
        }).catch(function (error) {
            console.log("An error happened")
            // .
        });
    }
    useEffect(() => {
        db.collection('naap').get().then((resp) => {

            const lists = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setUsers(lists);
            console.log(lists, "given lists")
        })

    }, []);

    return (
        <div>
            <div className="h-screen fixed ">
                <div className=" hightcart bg-white border-gray-300 shadow-xl rounded-xl  mx-4 mt-4  ">

                    <div className="flex justify-between mt-4 ">
                        <div className="flex justify-between">
                            <form className="flex fonts-size font-bold">


                                <select value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-48 border   rounded-md text-gray-700 light-orange  border-gray-300 fonts-size font-bold mx-2" >
                                    <option> Name</option>
                                    {

                                        users.map((user,) => (




                                            <option> {user.customer} </option>
                                        ))
                                    }
                                </select>
                                <div className="bg-yellow-700 mx-2 p-3 fonts-size text-white rounded-md text-center text-xs font-bold w-24">
                                    <Link to="../pages/home">
                                        <p onClick={logout}>


                                            LogOut</p>

                                    </Link>

                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="flex mx-2 my-3  text-gray-700 fonts-size font-bold w-full">
                        <div className="  ">
                            <p>Date</p>
                            <input min="2021-01-01" max="2023-12-31" type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border rounded-md fonts-size light-orange font-bold border-gray-300 p-3 text-gray-700 inputdate-Width " placeholder=""></input>
                        </div>
                        <div className=" text-gray-700 ">
                            <p className="ml-2 ">Due Date</p>

                            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} name="trip-start"

                                min="2021-01-01" max="2023-12-31" className=" p-2 text-gray-700 rounded-md fonts-size font-bold light-orange border border-gray-300  inputdate-Width p-3 mx-2" ></input>
                        </div>


                    </div>

                    <div className="text-gray-700">
                        <div className="flex fonts-size font-bold items-center">

                            <form className="  mx-2">
                                <p className="">Type of Cloth</p>

                                <select value={typeOfCloth} onChange={(e) => setTypeOfCloth(e.target.value)} className="rounded-md fonts-size text-green-600 fonts-size text-xs font-bold border light-orange p-3 inputdate-Width">

                                    <option >T/cloth</option>
                                    <option>shirt</option>
                                    <option>cloth</option>

                                </select>
                            </form>
                            <div>

                                <p className="">Number of Suits</p>

                                <input value={numberOfSuits} onChange={(e) => setNumberOfSuits(e.target.value)} type="text" className="rounded-md border-gray-300 border  p-3 inputdate-Width"></input>
                            </div>
                        </div>

                    </div>
                    <div className="flex text-gray-700 fonts-size font-bold mx-2 my-3 w-full">
                        <div className=" ">
                            <p>Total Amount</p>
                            <input value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} type="" className="rounded-md fonts-size font-bold border border-gray-300 p-3 w-20" placeholder=""></input>
                        </div>
                        <div className=" mx-1">
                            <p>Paid Amount</p>

                            <input value={paidAmount} onChange={(e) => setPaidAmount(e.target.value)} type="" className="rounded-md fonts-size font-bold border border-gray-300 p-3 w-20" placeholder=""></input>
                        </div>
                        <div className=" mx-2">
                            <p>Remaining Amount</p>

                            <input value={remainingAmount} onChange={(e) => setRemainingAmount(e.target.value)} type="" className="rounded-md fonts-size font-bold border border-gray-300 p-3 w-32" placeholder=""></input>

                        </div>

                    </div>
                    <div className="flex items-center">

                        <form className="  mx-2">


                            <select value={progress} onChange={(e) => setProgress(e.target.value)} className="rounded-md text-green-600 fonts-size text-xs font-bold border border-gray-300 light-orange p-3 inputdate-Width">

                                <option>selection</option>
                                <option>In Progress</option>
                                <option>Ready</option>
                                <option>Delivered</option>

                            </select>
                        </form>

                        <button onClick={handledata} type="button" className="w-24 ml-2 fonts-size font-bold rounded-md border border-gray-300 orange text-white font-bold p-3">save</button>

                    </div>
                </div>
            </div>
        </div>

    )
}
