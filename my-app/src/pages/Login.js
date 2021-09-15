import React, { useState, } from 'react'
import FeatherIcon from 'feather-icons-react';

import { app, db } from "../fire"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link, useHistory
} from "react-router-dom";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErr] = useState('');
    const [data, setdata] = useState([]);
    const history = useHistory()

    const signin = () => {
        app.auth().signInWithEmailAndPassword(email, password).then((resp) => {
            const data = resp.user.uid
            setdata(data)
            console.log(data, "respose1")
            if (email, password) {
                history.push("/home")
                console.log(data, "respose2")
            }
            else {
                alert("sah")

            }

        }).catch((err) => {
            {
                const error = err.message
                setErr(error)
                console.log(err, "wrong password")
            }
        })

    }
    const puchrout = useHistory();

    return (
        <div>


            <div className="h-screen">

                <div className="mx-4 mt-4 p-4 bg-white border shadow-xl">
                    <div className="flex justify-between mx-4  items-center">

                        <Link to="/">

                            <FeatherIcon Link to="/login" icon="arrow-left" color="gray" size="18" className="mx-1 " />
                        </Link>
                        <h1 className="font-bold text-gray-300">Register</h1>
                    </div>
                    <h1 className="font-bold mt-4 text-gray-700">Login</h1>

                    <div className="p-3 text-gray-700 fonts-size font-bold ">
                        <div>Email</div>
                        <input className="border rounded-md font-bold w-64 p-3" type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                        <p className="text-red-400">{errors}</p>

                    </div>
                    <div className="text-gray-700 fonts-size font-bold  p-3">
                        <div>Password</div>

                        <input className="border rounded-md  font-bold p-3 w-64" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                        <p className="text-red-400">{errors}</p>
                    </div>

                    <div className="mt-6 p-3 ">

                        <button className="border rounded-md  panalcolor w-32 text-white p-3 font-bold text-xs" onClick={signin}>
                            Login

                        </button>

                    </div>
                </div>
            </div>

        </div >
    )
}
