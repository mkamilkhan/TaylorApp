import React from 'react'

export default function searchbar(props) {
    return (
        <div>
            <input className="input-Width  border rounded-xl text-sm  font-bold border-gray-300 p-2" placeholder="search"
                type="text"
                onChange={(e) => props.onSearch(e.target.value)}
                value={props.value}
            />
        </div>
    )
}
