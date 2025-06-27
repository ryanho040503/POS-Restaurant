import React from 'react'
import { getRandomBG } from '../../utils'

const TableCard = ({key, name, status, initials}) => {

    const bgColor = getRandomBG();

    return (
        <div key={key} className="w-full max-w-[335px] bg-[#262626] p-4 rounded-lg mb-4 transition-transform transform hover:scale-[1.02] hover:bg-[#2c2c2c] cursor-pointer">
            <div className="flex items-center justify-between px-1">
                <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
                <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4a40]" : "text-white bg-[#a6781d] "} px-2 py-1 rounded-lg`}>{status}</p>
            </div>
            <div className="flex items-center justify-center mt-5 mb-9">
                <h1 style={{ backgroundColor: bgColor }}  className={`text-white rounded-full p-5 text-xl`}>{initials}</h1>
            </div>
        </div>
    )
}

export default TableCard