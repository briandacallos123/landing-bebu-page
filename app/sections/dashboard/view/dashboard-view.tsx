
'use client'
import Image from 'next/image'
import React from 'react'
import ImageComponent from './ImageComponent'
import { useInView, InView } from "react-intersection-observer";

import { Roboto } from 'next/font/google';

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ weight: '500', subsets: ['latin-ext'] })


import { delay, motion } from "framer-motion"


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


const DashboardView = () => {
  return (
    <div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">

        <ImageComponent />
        <div className="p-3 space-y-6 pt-20">
          <h1 className={`text-3xl lg:text-5xl mt-2 ${montserrat.className}`}>Turn Your Ideas into Stunning Reality</h1>
          <p className="leading-7">Transforming spaces into stunning visual experiences, I’m Rica Reyes, a passionate virtual staging designer. With a knack for 3D design, I bring interiors to life, making properties irresistible to buyers. Let’s create captivating environments that tell your unique story!</p>

          <a href="#works" className="w-full block text-center rounded-xl border border-green-500 text-green-500 hover:scale-105 lg:w-[120px] p-1">View Work</a>


        </div>
      </div>
      {/* <InView triggerOnce={true} threshold={1}>
        {({ inView, ref }) => (
          <motion.div
            animate={inView ? "open" : "closed"}
            variants={textVariant}
            className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20"
            ref={ref}>


          </motion.div>)}
      </InView> */}
      {/* image */}

    </div>
  )
}

export default DashboardView