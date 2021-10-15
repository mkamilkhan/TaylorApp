import React from 'react'
import FeatherIcon from 'feather-icons-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
function tabs() {
    return (
        <div>
            <div className=" bottom-0 fixed panalcolor justify-center w-full flex">
                <div className="text-center text-xs   p-2  text-white font-bold">
                    <Link to="/urduForm">

                        <FeatherIcon className="p-1     shadow-xl" icon="scissors" color="white" />

                        <p className="text-gray-200 ">Naap</p>

                    </Link>
                </div>

                <div className="text-center text-xs   p-2  text-white font-bold">
                    <Link to="/englishCard">

                        <FeatherIcon className="p-1 ml-6  shadow-xl" icon="book-open" color="white" />

                        <p className="text-gray-200 ">EnglishCard</p>
                    </Link>
                </div>

                <div className="text-center text-xs     p-2  text-white font-bold">
                    <Link to="/urduCard">
                        <FeatherIcon className="p-1   ml-4   shadow-xl" icon="shopping-bag" color="white" />

                        <p className="text-gray-200 ">UrduCard</p>
                    </Link>
                </div>
                <div className="text-center text-xs    p-2  text-white font-bold">
                    <Link to="/orderCard">
                        <FeatherIcon className="p-1   ml-2  shadow-xl" icon="book" color="white" />

                        <p className="text-gray-200 ">Orders</p>
                    </Link>
                </div>
                <div className="text-center text-xs    p-2  text-white font-bold">
                    <Link to="/orderForm">
                        <FeatherIcon className="p-1   ml-4  shadow-xl" icon="box" color="white" />

                        <p className="text-gray-200 ">OrdersForm</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default tabs
