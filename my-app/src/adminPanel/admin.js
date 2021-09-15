// import { keys } from '@material-ui/core/styles/createBreakpoints'
import React from 'react'
import Assets from '../assets/tt.jpeg'
import { useState } from 'react'
// import { db } from "../fire"

export default function Admin() {


    const [show, setShow] = useState(false)

    const user = ['Kamil', 'khattak', 'muhammad', 'semikhan', 'lilikhan',]
    return (
        <div>
            <div className="">
                <div className="panalcolor text-white font-bold p-4">
                    <p> TAILOR APP</p>
                </div>
                <div className="w-full flex ">

                    <div className="w-1/4 ">
                        <div className="  flex justify-center ">
                            <img src={Assets} className=" w-56 h-32 "></img>

                        </div>
                        <div className="p-6 usercolor text-white font-bold">
                            <p className="p-4">USERS</p>

                        </div>
                        {
                            user.map((res) => (
                                <div className=" p-6 shadow-xl panalcolor  rounded-sm text-white font-bold panalcolorHover  border-gray-700 border">

                                    <div onClick={() => setShow(!show)} className=" p-4" >
                                        <p>{res}</p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>

                    <div className="w-full">
                        <div className="font-bold bg-gray-300 panalcolor p-12  border">

                            <p>Customer Data</p>
                        </div>
                        <div className="p-12  flex mt-12   mx-12 ">
                            {
                                show ?
                                    <div className="bg-white rounded-md border shadow-xl w-1/2">

                                        <div className=" p-6 font-bold colordark">
                                            <p>Name</p>
                                            <p > kamil</p>
                                        </div>
                                        <div className="p-6 font-bold colordark">
                                            <p>FullName</p>
                                            <p >muhammad kamil</p>
                                        </div>
                                        <div className="p-6 font-bold colordark">
                                            <p>Email</p>
                                            <p >kamil.se@gmail.com</p>

                                        </div>
                                        <div className="p-6 font-bold colordark">
                                            <p>Adress</p>
                                            <p >Armour Colony Nsr</p>

                                        </div>
                                        <div className="p-6 font-bold colordark">
                                            <p>Phone No.</p>
                                            <p >03345434567</p>

                                        </div>
                                    </div>
                                    : null

                            }
                            <div className="animate-pulse  rounded-md p-6 usercolor text-white font-bold w-1/2">
                                <p>WELLCOME TO ADMIN</p>
                                {/* <span class="flex h-3 w-3">
                                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                            <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                                        </span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
