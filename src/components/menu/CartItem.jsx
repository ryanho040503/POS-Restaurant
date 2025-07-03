import React from 'react'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";


const CartItem = () => {
    return (
        <div className="px-4 py-2">
            <h1 className="text-lg text-[#ababab] font-semibold tracking-wide">Order Details</h1>
            <div className="mt-4 overflow-y-scroll scrollbar-hide h-[380px]">

                <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#ababab] font-semibold tracking-wide text-md">Chicken Tikka</h1>
                        <p className="text-[#ababab] font-semibold">x2</p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3">
                            <RiDeleteBin2Fill size={20} className="text-[#ababab] cursor-pointer" />
                            <FaNotesMedical size={20} className="text-[#ababab] cursor-pointer" />
                        </div>
                        <p className="text-[#f5f5f5] text-md font-bold">$123</p>
                    </div>
                </div>

                <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#ababab] font-semibold tracking-wide text-md">Chicken Tikka</h1>
                        <p className="text-[#ababab] font-semibold">x2</p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3">
                            <RiDeleteBin2Fill size={20} className="text-[#ababab] cursor-pointer" />
                            <FaNotesMedical size={20} className="text-[#ababab] cursor-pointer" />
                        </div>
                        <p className="text-[#f5f5f5] text-md font-bold">$123</p>
                    </div>
                </div>

                <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#ababab] font-semibold tracking-wide text-md">Chicken Tikka</h1>
                        <p className="text-[#ababab] font-semibold">x2</p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3">
                            <RiDeleteBin2Fill size={20} className="text-[#ababab] cursor-pointer" />
                            <FaNotesMedical size={20} className="text-[#ababab] cursor-pointer" />
                        </div>
                        <p className="text-[#f5f5f5] text-md font-bold">$123</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartItem