import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Tabs from '../compenets/tabs';
import { useEffect, useState } from 'react'
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
    const [use, setUse] = useState([0]);
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
        db.collection('englsihMeasurements').get().then((resp) => {

            const lists = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setUsers(lists);
            console.log(lists, "given lists")
        })
        db.collection('urduMeasurements').get().then((resp) => {

            const lists = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setUse(lists);
            console.log(lists, "given lists")
        })

    }, []);

    return (
        <div>
            <div className=" ">
                <div className=" hightcart py-6 bg-gray-800 border-yellow-500 shadow-xl rounded-xl  mx-4 mt-4  ">

                    <div className="flex justify-between mt-4 ">
                        <div className="flex items-center justify-between">
                            <form className=" fonts-size font-bold">


                                <select value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-48 border-b p-3 text-yellow-500 bg-gray-800 outline-none border-yellow-500 fonts-size font-bold mx-2" >
                                    <option> EnglishOrders</option>
                                    {

                                        users.map((user) => (




                                            <option> {user.customerName} </option>
                                        ))
                                    }

                                </select>
                                <select value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-48 border-b p-3 text-yellow-500 bg-gray-800 outline-none border-yellow-500 fonts-size font-bold mx-2" >
                                    <option> UrduOrders</option>

                                    {

                                        use.map((user) => (




                                            <option> {user.customerName} </option>
                                        ))
                                    }

                                </select>

                            </form>
                            <div className="bg-gray-800 h-11 border-yellow-500 rounded-md border mx-2 p-3 fonts-size text-white  text-center text-xs font-bold w-24">
                                <Link to="/home
                                ">
                                    <p onClick={logout}>


                                        LogOut</p>

                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className="flex mx-2 my-3  text-gray-300 fonts-size font-bold w-full">
                        <div className="  ">
                            <p>Date</p>
                            <input min="2021-01-01" max="2023-12-31" type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border-b outline-none  fonts-size bg-gray-800 font-bold border-yellow-500 p-3 text-yellow-500 inputdate-Width " placeholder=""></input>
                        </div>
                        <div className=" text-gray-300 ">
                            <p className="ml-2 ">Due Date</p>

                            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} name="trip-start"

                                min="2021-01-01" max="2023-12-31" className=" p-2 text-yellow-500 outline-none  fonts-size font-bold bg-gray-800 border-b border-yellow-500  inputdate-Width p-3 mx-2" ></input>
                        </div>


                    </div>

                    <div className="text-gray-300">
                        <div className="flex fonts-size w-full font-bold items-center">

                            <form className="  w-1/2 mx-2">


                                <select value={typeOfCloth} onChange={(e) => setTypeOfCloth(e.target.value)} className=" text-yellow-500 outline-none bg-gray-800  font-bold  border-yellow-500 bg-gray-800 p-3 ">

                                    <option >TypeOfcloth</option>
                                    <option>Shalwar/Qamees</option>

                                    <option>Shirt</option>
                                    <option>Cout</option>
                                    <option>Waiscot</option>
                                    <option>Paint</option>


                                </select>
                            </form>
                            <div className="w-24">
                                <select onChange={(e) => setNumberOfSuits(e.target.value)} className="bg-gray-800  mx-1 p-3 mt-1 text-yellow-500 outline-none rounded-lg font-bold " >

                                    <option >Number of Suits </option>

                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                    <option >4</option>
                                    <option >5</option>
                                    <option >6</option>
                                    <option >7</option>
                                    <option >8</option>
                                    <option >9</option>
                                    <option >10</option>



                                </select>

                                {/* <input value={numberOfSuits} onChange={(e) => setNumberOfSuits(e.target.value)} type="text" className=" border-b  desh border-yellow-500 bg-gray-800  p-3 w-full"></input> */}
                            </div>
                        </div>

                    </div>
                    <div className="flex text-gray-300 fonts-size font-bold mx-2 my-3 w-full">
                        <div className=" ">
                            <input value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} type="" className=" fons-size font-bold border-b outline-none bg-gray-800 border-yellow-500 p-3 w-20" placeholder="Total Amount"></input>
                        </div>
                        <div className=" mx-1">

                            <input value={paidAmount} onChange={(e) => setPaidAmount(e.target.value)} type="" className=" fons-size font-bold border-b outline-none bg-gray-800 border-yellow-500 p-3 w-20" placeholder="Paid Amount"></input>
                        </div>
                        <div className=" mx-2">

                            <input value={remainingAmount} onChange={(e) => setRemainingAmount(e.target.value)} type="" className=" fons-size font-bold border-b outline-none bg-gray-800 border-yellow-500 p-3 w-32" placeholder="Remaining Amount"></input>

                        </div>

                    </div>
                    <div className="flex items-center">

                        <form className="  mx-2">


                            <select value={progress} onChange={(e) => setProgress(e.target.value)} className="outline-none text-yellow-600 fonts-size text-xs font-bold border-b border-yellow-500 bg-gray-800 p-3 inputdate-Width">

                                <option>selection</option>
                                <option>In Progress</option>
                                <option>Ready</option>
                                <option>Delivered</option>

                            </select>
                        </form>
                        <Link to="/orderCard">

                            <button onClick={handledata} type="button" className="w-24 ml-2  text-xs font-bold hover:bg-yellow-500 border border-yellow-500  rounded-md text-white mt-2 font-bold p-2">save</button>
                        </Link>

                    </div>
                </div>
            </div>

            <Tabs />
        </div>

    )
}
