// import React from 'react'
import React, { useEffect, useState } from 'react'
import Assets from '../assets/taab.jpeg'
import { db } from "../fire"
import FeatherIcon from 'feather-icons-react';
import Searchbar from '../pages/searchbar';
import Tabs from '../compenets/tabs'
import { Link } from 'react-router-dom'

function EnglishCard() {

    const [searchValue, setSearchValue] = useState("");
    const [users, setUsers] = useState([]);
    const [user, setForm] = useState([]);
    const [show, setShow] = useState(false);
    const [dlt, setDlt] = useState([]);
    const [id, setId] = useState([]);
    useEffect(() => {
        db.collection('englsihMeasurements').onSnapshot((resp) => {
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
        db.collection('englsihMeasurements').doc(id).delete().then((resp) => {
            console.log(resp, "delete")
        })
    }
    return (
        <div >
            <div className="h-screen  ">
                <div className="w-full flex justify-center  p-4">
                    <Searchbar onSearch={setSearchValue} value={searchValue} />
                </div>
                {

                    users.filter(filterNames).map((user, i) => (
                        <div key={i} >
                            <div className="">
                                <div className="relative ">
                                    <div className="shadow-xl mx-8 rounded-xl  border mt-12 border h-56 border bg-white ">
                                        <div className=" absolute  w-4/5  top-0">
                                            <div className="flex  justify-center">
                                                <img src={user.image} className="border-2  border-yellow-500  rounded-full  w-16 h-16"></img>
                                            </div>
                                        </div>
                                        <div className="flex items-center my-6 justify-between mx-3">
                                            <FeatherIcon className="p-1 border rounded-full light-orange-200 shadow-xl" icon="trash-2" color="orange" onClick={() => trash(user.id)} />
                                            <Link to={`/cartDetails/:${user.id}`} exact>
                                                <div>

                                                    <FeatherIcon className="p-1 border rounded-full light-orange-200 shadow-xl" icon="file-minus" color="orange" />
                                                </div>
                                            </Link>

                                        </div>
                                        <div className=" mt-4  font-bold text-xs text-gray-700">
                                            <div className="p-1 items-center justify-between mx-3 flex  ">
                                                <div className="flex  items-center">
                                                    <FeatherIcon className="p-1 mx-1 border rounded-full light-orange-200 shadow-xl" icon="user" color="orange" />

                                                    <p> Customer Name: </p>
                                                </div>
                                                <p className="font-normal">{user.customerName}</p>
                                            </div>
                                            <div className="p-1 flex  items-center justify-between mx-3 ">
                                                <div className="flex  items-center">
                                                    <FeatherIcon className="p-1 mx-1 border rounded-full light-orange-200 shadow-xl" icon="edit-2" color="orange" />

                                                    <p> SerialNumber </p>
                                                </div>
                                                <p className="font-normal">{user.serialNumber}</p>
                                            </div>
                                            <div className="p-1 flex items-center justify-between mx-3 ">
                                                <div className="flex  items-center">
                                                    <FeatherIcon className="p-1 mx-1 border rounded-full light-orange-200 shadow-xl" icon="phone" color="orange" />

                                                    <p> Customer Number: </p>
                                                </div>
                                                {/* <p className="">{user.customerName}</p> */}
                                                <p className="font-normal"> {user.customerNumber} </p>
                                            </div>
                                            <div className="p-1 flex items-center justify-between mx-3 ">
                                                <div className="flex  items-center">
                                                    <FeatherIcon className="p-1 mx-1 border rounded-full light-orange-200 shadow-xl" icon="map-pin" color="orange" />

                                                    <p> Address: </p>
                                                </div>
                                                <p className="font-normal">{user.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    )
                    )
                }
            </div>
            <Tabs />
        </div>
    )
}

export default EnglishCard
