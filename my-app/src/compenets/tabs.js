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

                        <FeatherIcon className="p-1    light-orange-200 shadow-xl" icon="scissors" color="orange" />

                        <p>Naap</p>

                    </Link>
                </div>

                <div className="text-center text-xs   p-2  text-white font-bold">
                    <Link to="/englishCard">

                        <FeatherIcon className="p-1 ml-6  light-orange-200 shadow-xl" icon="book-open" color="orange" />

                        <p>EnglishCard</p>
                    </Link>
                </div>

                <div className="text-center text-xs     p-2  text-white font-bold">
                    <Link to="/urduCard">
                        <FeatherIcon className="p-1   ml-4  light-orange-200 shadow-xl" icon="shopping-bag" color="orange" />

                        <p>UrduCard</p>
                    </Link>
                </div>
                <div className="text-center text-xs    p-2  text-white font-bold">
                    <Link to="/orderCard">
                        <FeatherIcon className="p-1   ml-2 light-orange-200 shadow-xl" icon="book" color="orange" />

                        <p>Order</p>
                    </Link>
                </div>
                <div className="text-center text-xs    p-2  text-white font-bold">
                    <Link to="/orderForm">
                        <FeatherIcon className="p-1   ml-4 light-orange-200 shadow-xl" icon="box" color="orange" />

                        <p>OrdersForm</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default tabs
