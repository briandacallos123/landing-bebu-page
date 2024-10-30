'use client';

import React from 'react'
// import { useMediaQuery } from "@uidotdev/usehooks";
import Image from 'next/image';

const ImageComponent = () => {
    // const isSm = useMediaQuery("only screen and (max-width : 768px)");

    return (
        <div className="relative">
            <Image
                src={'/assets/images/dashboard/me.jpg'}
                alt="me"
                // width={isSm ? 400 : 700}
                // height={isSm ? 400 : 700}
                width={700}
                height={700}
            />
            {/* backdrop */}
            <div className="h-[350px] w-[400px] lg:h-[600px] lg:w-[700px] rounded-lg bg-gray-400 opacity-6 top-0 lg:top-10 absolute -z-30 -left-10 lg:-left-20 ">
            </div>
        </div>

    )
}

export default ImageComponent