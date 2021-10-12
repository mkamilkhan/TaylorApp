import React from 'react'

export default function searchbar(props) {
    return (
        <div>
            <input className="input-Width  border rounded-lg text-white text-sm  font-bold bg-gray-800 p-4" placeholder="search"
                type="text"
                onChange={(e) => props.onSearch(e.target.value)}
                value={props.value}
            />
        </div>
    )
}
