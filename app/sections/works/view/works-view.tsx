'use client'
import Image from 'next/image'
import React from 'react'
import { useMediaQuery } from "@uidotdev/usehooks";
import { useInView, InView } from "react-intersection-observer";

import { delay, motion } from "framer-motion"

const worksImages = [
    {
        id: 1,
        path: "/assets/images/works/work1.jpg"
    },
    {
        id: 2,
        path: "/assets/images/works/work2.jpg"
    },
    {
        id: 3,
        path: "/assets/images/works/work3.jpg"
    },
    {
        id: 4,
        path: "/assets/images/works/work4.jpg"
    },
    {
        id: 5,
        path: "/assets/images/works/work5.jpg"
    },
    {
        id: 6,
        path: "/assets/images/works/work6.jpg"
    },
    {
        id: 7,
        path: "/assets/images/works/work7.jpg"
    },
    {
        id: 8,
        path: "/assets/images/works/work8.jpg"
    },
    {
        id: 9,
        path: "/assets/images/works/work9.jpg"
    },
    {
        id: 10,
        path: "/assets/images/works/work10.jpg"
    },
]

const textVariant = {
    open: {
        opacity: 1,
        y: 0,

        transition: {
            // delay: .5,
            ease: 'circInOut',
            duration: .5
        }
    },
    closed: { opacity: 0, y: "10%" },

}


const WorksView = () => {
    // const isSm = useMediaQuery("only screen and (max-width : 768px)");

    return (
        <div id="works" className="space-y-6 lg:space-y-20 ">

            <InView triggerOnce={true} threshold={1}>
                {({ inView, ref }) => (
                    <motion.div
                        animate={inView ? "open" : "closed"}
                        variants={textVariant}
                        className="relative"
                        ref={ref}>
                        <div className="p-4">
                        <h1 className="text-3xl lg:text-4xl">Sample Works</h1>
                        <p className="text-sm lg:text-lg text-gray-500">Expertly Designed Virtual Spaces That Inspire.</p>
                        </div>
                    </motion.div>
                )}
            </InView>
         

            <div className="flex flex-col space-y-12 lg:space-y-40 p-4 lg:p-0">
                {worksImages?.map((item: any, index: number) => {
                    return (
                        <InView key={index} triggerOnce={true} threshold={.5}>
                            {({ inView, ref }) => (
                                <motion.div
                                    animate={inView ? "open" : "closed"}
                                    variants={textVariant}
                                    className="relative"
                                    ref={ref}>

                                    <Image
                                        key={item?.id}
                                        alt="work"
                                        height={700}
                                        width={700}
                                        src={item?.path}
                                        className={`${index % 2 === 1 ? 'float-right' : ''} rounded-xl`}
                                    />
                                    {/* {!isSm && <>
                                        {index % 2 === 1 && <div className="h-[750px] w-[1000px] rounded-lg bg-gray-300 opacity-6 top-14 absolute -z-30 -right-10 ">
                                        </div>}
                                        {index % 2 === 0 && <div className="h-[750px] w-[1000px] rounded-lg bg-gray-300 opacity-6 top-14 absolute -z-30 -left-10 ">
                                        </div>}
                                    </>} */}

                                </motion.div>
                            )}

                        </InView>
                    )
                    // return (

                    // )
                })}
            </div>
        </div>
    )
}

export default WorksView