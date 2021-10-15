// import React from 'react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Assets from '../assets/taab.jpeg'
import { db } from "../fire"
import FeatherIcon from 'feather-icons-react';
import Searchbar from '../pages/searchbar';
import Tabs from '../compenets/tabs';
import { Link } from 'react-router-dom'

import EnglishForm from '../compenets/englishForm';
function UrduCard() {

    // const [users, setUsers] = useState([]);

    const [users, setUsers] = useState([]);
    const [user, setForm] = useState([]);
    const [show, setShow] = useState(false);
    const [dlt, setDlt] = useState([]);
    const [id, setId] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    // const [search, setSearch] = useState();

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


    const filterNames = (res) => {


        return res.customerName.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;

    };

    const trash = (id) => {
        db.collection('naap').doc(id).delete().then((resp) => {
        })
    }

    return (
        <div>
            <div className="h-screen ">

                <div className="w-full flex justify-center  p-4">
                    <Searchbar onSearch={setSearchValue} value={searchValue} />
                </div>

                <div >
                    <div>
                        <Link to="/urduForm">
                            <FeatherIcon className="p-1 ml-6 border border-yellow-500 rounded-full light-orange-200 shadow-xl" icon="arrow-left" color="orange" />

                        </Link>
                    </div>
                    {
                        users.filter(filterNames).map((user) => (



                            <div className="">
                                <div className="relative  ">
                                    <div className="shadow-xl bg-gray-800 mx-8 rounded-xl   my-12  h-56 border  ">
                                        <div className=" absolute  w-4/5  top-0">
                                            <div className="flex  justify-center">
                                                <img src={user.image} className="border-2  border-yellow-500  rounded-full  w-16 h-16"></img>
                                            </div>
                                        </div>
                                        <div className="flex items-center my-6 justify-between mx-3">
                                            <FeatherIcon className="p-1 border rounded-full border-gray-700 shadow-xl" icon="trash-2" color="orange" onClick={() => trash(user.id)} />
                                            <Link to={`/urduDetails/:${user.id}`} exact>
                                                <div>

                                                    <FeatherIcon className="p-1 border rounded-full border-gray-700 shadow-xl" icon="file-minus" color="orange" />
                                                </div>
                                            </Link>

                                        </div>
                                        <div className=" mt-4  font-bold text-xs text-gray-400">
                                            <div className="p-1 items-center justify-between mx-3 flex  ">
                                                <p className="font-normal">{user.customerName}</p>

                                                <div className="flex items-center">

                                                    <p> گاہک نام </p>
                                                    <FeatherIcon className="p-1 mx-1 border rounded-full border-gray-700 shadow-xl" icon="user" color="orange" />
                                                </div>

                                            </div>
                                            <div className="p-1 flex  items-center justify-between mx-3 ">
                                                <p className="font-normal">{user.serialNumber}</p>
                                                <div className="flex  items-center">

                                                    <p> سلسلہ وار </p>
                                                    <FeatherIcon className="p-1 mx-1 border rounded-full border-gray-700 shadow-xl" icon="edit-2" color="orange" />
                                                </div>
                                            </div>
                                            <div className="p-1 flex items-center justify-between mx-3 ">
                                                <p className="font-normal"> {user.customerNumber}</p>
                                                <div className="flex  items-center">

                                                    <p>گاہک نمبر </p>
                                                    <FeatherIcon className="p-1 mx-1 border rounded-full border-gray-700 shadow-xl" icon="phone" color="orange" />
                                                </div>
                                            </div>
                                            <div className="p-1 flex items-center justify-between mx-3 ">
                                                <p className="font-normal">{user.address}</p>
                                                <div className="flex  items-center">

                                                    <p> پتہ </p>
                                                    <FeatherIcon className="p-1 mx-1 border rounded-full border-gray-700 shadow-xl" icon="map-pin" color="orange" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>

                <Tabs />
            </div>
        </div>
    )
}

export default UrduCard
