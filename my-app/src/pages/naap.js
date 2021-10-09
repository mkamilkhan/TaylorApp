import React, { useEffect } from 'react'
import { useState } from 'react'
import Assets from '../assets/taab.jpeg'
import { db } from "../fire"
import FeatherIcon from 'feather-icons-react';
// import { useMemo } from 'react';
import Searchbar from './searchbar';

import EnglishForm from '../compenets/englishForm';
export default function Orders() {
       const [searchValue, setSearchValue] = useState("");
       // const [users, setUsers] = useState([]);

       const [users, setUsers] = useState([]);
       const [user, setForm] = useState([]);
       const [show, setShow] = useState(false);
       const [dlt, setDlt] = useState([]);
       const [id, setId] = useState([]);
       // const [search, setSearch] = useState();

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




       const filterNames = (res) => {


              return res.customer.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;

       };

       const delet = (id) => {
              db.collection('naap').doc(id).delete().then((resp) => {
              })
       }
       return (
              <div className="h-screen  light-orange">

                     <div className="w-full flex justify-center  p-4">
                            <Searchbar onSearch={setSearchValue} value={searchValue} />
                     </div>


                     {


                            users.filter(filterNames).map((user, i) => (
                                   <div key={i} >
                                          <div className="shadow-xl   my-2 border bg-white mx-6 rounded-xl p-3">
                                                 <div className="flex fonts-size font-bold">
                                                        <div className="  w-full fonts-size p-4 font-bold">
                                                               <div className="flex items-center justify-between">

                                                                      <FeatherIcon className="p-1 border rounded-full light-orange-200 shadow-xl" icon="trash-2" color="red" onClick={() => delet(user.id)} />

                                                                      <img src={user.image} className="border-2 border-yellow-300 rounded-full  w-12 h-12"></img>
                                                               </div>

                                                               <div className=" my-2 items-center flex ">
                                                                      <div className=" w-4/5 flex items-center ">
                                                                             <div>
                                                                                    <img src={Assets} className=" w-20 "></img>
                                                                             </div>

                                                                             <div className=" w-full ml-2 items-center justify-around ">
                                                                                    <p className="text-gray-800 my-1"> {user.customer}</p>
                                                                                    <p className="text-gray-800">

                                                                                           Ph: {user.phone}
                                                                                    </p>
                                                                                    {/* <p className="ml-4">ar</p> */}
                                                                             </div>
                                                                      </div>
                                                                      <div className="ml-12 ">
                                                                             <p className="my-1 text-yellow-700">#{user.bt8}</p>

                                                                             <FeatherIcon icon="chevron-down" color="gray" onClick={() => setShow(!show)} />

                                                                      </div>


                                                               </div>

                                                        </div>
                                                        <div >

                                                        </div>
                                                 </div>
                                                 {
                                                        show ?
                                                               <div className="fonts-size my-4 font-bold">
                                                                      <div className="flex  my-2 w-full">
                                                                             <div className="border light-orange mx-2 rounded-xl w-1/2 p-3 justify-between flex">
                                                                                    <p className="">Lambai </p>
                                                                                    <p> {user.bt1}Inch</p>
                                                                             </div>
                                                                             <div className="border light-orange mx-2 rounded-xl p-3 w-1/2 justify-between flex">
                                                                                    <p className="">Bazoo </p>
                                                                                    <p> {user.bt2}Inch</p>
                                                                             </div>
                                                                      </div>
                                                                      <div className="flex  my-2 w-full">
                                                                             <div className="border light-orange mx-2  rounded-xl w-1/2 p-3 justify-between flex">
                                                                                    <p className="">Teera </p>
                                                                                    <p> {user.bt3}Inch</p>
                                                                             </div>
                                                                             <div className="border mx-2 light-orange rounded-xl w-1/2 p-3 justify-between flex">
                                                                                    <p className="">Kalar </p>
                                                                                    <p> {user.bt4}Inch</p>
                                                                             </div>
                                                                      </div>
                                                                      <div className="flex  my-2 w-full">

                                                                             <div className="border mx-2 light-orange rounded-xl p-3 w-1/2 justify-between flex">
                                                                                    <p className="">Chatee </p>
                                                                                    <p> {user.bt5}Inch</p>
                                                                             </div>
                                                                             <div className="border mx-2 light-orange rounded-xl w-1/2 p-3 justify-between flex">
                                                                                    <p className="">Gheera </p>
                                                                                    <p> {user.bt6}Inch</p>
                                                                             </div>
                                                                      </div>
                                                                      <div className="flex  w-full">

                                                                             <div className="border mx-2 light-orange rounded-xl w-1/2 p-3 justify-between flex">
                                                                                    <p className="">Pancha </p>
                                                                                    <p> {user.bt7}Inch</p>
                                                                             </div>
                                                                             <div className="border mx-2 light-orange rounded-xl w-1/2 p-3 justify-between flex">
                                                                                    <p className="">Pancha </p>
                                                                                    <p> {user.bt88}Inch</p>
                                                                             </div>

                                                                      </div>

                                                               </div> : null

                                                 }
                                          </div>

                                   </div>
                            )
                            )
                     }
              </div>
       )
}
