import React, { useState, } from 'react'
import { app, db, storage } from "../fire"
import FeatherIcon from 'feather-icons-react';
import Assets from '../assets/tt.jpeg'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adress, setadress] = useState('');
    const [contect, setContect] = useState('');
    const [error, setError] = useState('')
    const [imageUrl, setImageUrl] = useState('');

    const signUP = () => {


        app.auth().createUserWithEmailAndPassword(email, password).then((resp) => {
            const a = resp.user
            console.log(a, "working")

        }).catch((err) => {
            {
                const error = err.message
                setError(error)
                console.log(err, "wrong password")
            }
            ;
        })

        // localStorage.setItem('login', JSON.stringify({ email, password }));
        // console.log(localStorage, "khan")

        db.collection('form').add(
            {

                username: name,
                useremail: email,
                userpassword: password,
                useradress: adress,
                usercontect: contect,
                // image: imageUrl

            }
        )
    }
    const upload = async (e) => {
        const file = e.target.files[0];
        console.log("sjkla")
        const storageRef = app.storage().ref("images").child(file.name)
        await storageRef.put(file)
        storageRef.getDownloadURL().then((url) => {
            setImageUrl(url)
        })
    }

    return (
        <div className="h-screen">

            <div className="mx-2 p-4 bg-white border shadow-xl">
                <div className="flex justify-between my-4  items-center">

                    <h1 className="font-bold text-gray-300 ">Login</h1>
                    <Link to="/login">

                        <FeatherIcon Link to="/login" icon="arrow-right" color="gray" size="18" className="mx-1 mr-6" />
                    </Link>
                </div>
                <div>

                    <h1 className="font-bold text-gray-700">Register</h1>
                </div>
                <div className="flex justify-center">

                    <img src={Assets} className="  h-32 "></img>
                    {/* <img src={imageUrl} className=" desh h-32 "></img> */}
                </div>

                <div className="p-2 text-gray-700 fonts-size font-bold ">

                    {/* <div className="text-xs  ">UserName</div> */}

                    <input className="border rounded-md font-bold w-full p-4" type="text" placeholder="Username" onChange={(e) => setName(e.target.value)} value={name}></input>
                </div>
                <div className="p-2 text-gray-700 fonts-size font-bold ">
                    {/* <div>Email</div> */}
                    <input className="border rounded-md  font-bold w-full p-4" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                    {/* <p className="text-red-400">{error}</p> */}

                </div>
                <div className="text-gray-700 fonts-size font-bold  p-2">
                    {/* <div>Password</div> */}

                    <input className="border rounded-md  font-bold p-4 w-full" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                    {/* <p className="text-red-400">{error}</p> */}

                </div>
                <div className="p-2 text-gray-700 fonts-size font-bold ">
                    {/* <div>Address</div> */}

                    <input className="border rounded-md  font-bold w-full p-4" type="text" placeholder="Address" onChange={(e) => setadress(e.target.value)} value={adress}></input>
                </div>
                <div className="p-2 text-gray-700   fonts-size font-bold ">
                    {/* <div>Contect</div> */}

                    <input className="border rounded-md font-bold w-full p-4" type="number" placeholder="Number" onChange={(e) => setContect(e.target.value)} value={contect}></input>

                </div>
                <div className=" flex p-3">


                    <button className="text-white rounded-md   flex panalcolor fonts-size font-bold border p-3 w-24" onClick={signUP}>

                        <Link to="/login" className="flex font-bold items-center ">
                            <p className=""> Register</p>

                            <FeatherIcon Link to="/login" icon="arrow-right" color="white" size="12" className="mx-1 " />
                        </Link>

                    </button>
                    {/* <input onChange={upload} type="file" className=" rounded  p-2"></input> */}
                </div>
            </div>
        </div>
    )
}
