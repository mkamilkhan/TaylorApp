import React from 'react'
import FeatherIcon from 'feather-icons-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function OrderList() {
    return (
        <div>
            <Link to="/register">

                <div className="border shadow-xl m-3  rounded-xl bg-yellow-500  flex p-8">

                    <div>
                        <FeatherIcon icon="user-plus" color="white" size="18" className="mx-1 mt-1" />

                    </div>
                    <div className="text-white mx-2">
                        <p className="font-bold">Customer Registration</p>
                        <p className="text-xs">To  Registration a New Customer</p>

                    </div>
                </div>
            </Link>
            <Link to="/urduCard">

                <div className="border shadow-xl  rounded-xl bg-yellow-500  m-3 flex p-8">

                    <div>
                        <FeatherIcon icon="inbox" color="white" size="18" className="mx-1 mt-1" />

                    </div>
                    <div className="text-white mx-2">
                        <p className="font-bold">Urdu Card</p>
                        <p className="text-xs"> To See Customer Urdu Cart</p>


                    </div>
                </div>
            </Link>
            <Link to="/orderForm">

                <div className="border shadow-xl rounded-xl  bg-yellow-500  m-3 flex p-8">

                    <div>
                        <FeatherIcon icon="x-circle" color="white" size="18" className="mx-1 mt-1 " />

                    </div>
                    <div className="text-white mx-2">
                        <p className="font-bold">New Order</p>
                        <p className="text-xs">Placing Order of Customer</p>

                    </div>
                </div>
            </Link>
            <Link to="/orderCard">

                <div className="border shadow-xl m-3  rounded-xl bg-yellow-500  flex p-8">

                    <div>
                        <FeatherIcon icon="user-plus" color="white" size="18" className="mx-1 mt-1" />

                    </div>
                    <div className="text-white mx-2">
                        <p className="font-bold">Order Card</p>
                        <p className="text-xs"> New Customer Order Card</p>

                    </div>
                </div>
            </Link>
            <Link to="/englishCard">

                <div className="border shadow-xl  rounded-xl bg-yellow-500  m-3 flex p-8">

                    <div>
                        <FeatherIcon icon="shopping-bag" color="white" size="18" className="mx-1 mt-1 " />

                    </div>
                    <div className="text-white mx-2">
                        <p className="font-bold">English  Cart</p>
                        <p className="text-xs"> To See Customer English Cart</p>

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default OrderList
