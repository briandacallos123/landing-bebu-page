"use client"
import React, { useState } from 'react'
// import { useMediaQuery } from "@uidotdev/usehooks";
import { Icon } from '@iconify/react';

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ weight: '400', subsets: ['latin'] })

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const HeaderComponent = () => {
    const [openSide, setSidOpen] = useState(false);

    // const isSm = useMediaQuery("only screen and (max-width : 768px)");

    const handleOpen = () => setSidOpen(true)
    const handleClose = () => setSidOpen(false)

    const handleChange = () => console.log("Yes")


    const sidebarMobile = (
        <Sheet onOpenChange={handleClose} open={openSide}>

            <SheetContent side="left">
                <SheetHeader className="space-y-20">
                    <SheetTitle className="text-left">
                        Rica Reyes
                    </SheetTitle>
                    <SheetDescription className=" flex flex-col space-y-6">

                        <a onClick={handleClose} href="#" className="text-sm/6  text-gray-900">
                            Home
                        </a>
                        {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
                                About
                            </a> */}
                        <a onClick={handleClose} href="#works" className="text-sm/6  text-gray-900">
                            Works
                        </a>
                        <a onClick={handleClose} href="#contact" className="text-sm/6  text-gray-900">
                            Contacts
                        </a>

                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )

    // if (isSm) {
    //     return (
    // <div className="flex w-full py-5 px-5 justify-between items-center">
    //     {/* header / logo */}
    //     <h1 className="text-lg  font-semibold">RICA REYES</h1>
    //     <Icon onClick={handleOpen} icon="stash:burger-arrow-left" className="text-black text-2xl lg:text-4xl" />

    //     {sidebarMobile}
    // </div>
    //     )
    // }

    return (
        <div className={` ${montserrat.className}`}>
            <div className={`hidden lg:flex items-center justify-between py-10`}>
                {/* header / logo */}
                <h1 className={`text-2xl tracking-widest font-bold`}>RICA REYES</h1>

                <div className="space-x-10">
                    <a href="#home" className="text-sm/6 font-semibold text-gray-900">
                        Home
                    </a>
                    {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    About
                </a> */}
                    <a href="#works" className="text-sm/6 font-semibold text-gray-900">
                        Works
                    </a>
                    <a href="#contact" className="text-sm/6 font-semibold text-gray-900">
                        Contacts
                    </a>
                </div>
            </div>
            <div className="lg:hidden">
                <div className="flex w-full py-5 px-5 justify-between items-center">
                    {/* header / logo */}
                    <h1 className="text-lg  font-semibold">RICA REYES</h1>
                    <Icon onClick={handleOpen} icon="stash:burger-arrow-left" className="text-black text-2xl lg:text-4xl" />

                    {sidebarMobile}
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent