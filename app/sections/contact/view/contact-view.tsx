'use client'

import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"

import { useForm } from "react-hook-form"

import { Textarea } from "@/components/ui/textarea"

import { z } from "zod"

import { Icon } from '@iconify/react';

import { useInView, InView } from "react-intersection-observer";

import { delay, motion } from "framer-motion"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { sendEmail } from '../server-action'

const formSchema = z.object({
    email: z.string({required_error:"email is required"}).email(),
    subject: z.string({required_error:"subject is required"}),
    contact: z.string({required_error:"contact is required"}),
    message: z.string({
        required_error:"message is required"
    })
    
})

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

const ContactView = () => {

    const defaultValues = {
        email: "" ,
        subject:"",
        contact:"",
        message:""

    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {

        const {email, subject, contact, message} = values;

        await sendEmail({
            user:email,
            subject,
            message,
            contact
        })
    }

    return (
        <div id="contact" className=" bg-[#12313f] pt-32 flex justify-center pb-20">

            <InView triggerOnce={true} threshold={.5}>
                {({ inView, ref }) => (
                    <motion.div
                    animate={inView ? "open" : "closed"}
                    variants={textVariant}
                    className="w-full px-5 lg:w-[1000px] grid grid-cols-1  lg:grid-cols-2 space-y-10 lg:space-y-0"
                    ref={ref}>
                   
                            <div className="space-y-5 lg:space-y-10">
                                <div className="space-y-2">
                                    <h1 className="text-3xl lg:text-5xl text-white">Contact</h1>
                                    <div className="h-[1px] w-[100px] bg-white"></div>
                                    <p className="text-gray-400 text-xl">Let's build your ideas.</p>
                                </div>

                                {/* icons */}
                                <div className="flex flex-col space-y-2">
                                    <div className="flex items-center space-x-3">
                                        <Icon icon="ic:baseline-facebook" className="text-white text-2xl lg:text-4xl" />
                                        <p className="text-white">www.facebook.com/reccaricxrics</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Icon icon="basil:gmail-solid" className="text-white text-2xl lg:text-4xl" />
                                        <p className="text-white">ms.reyesrica@gmail.com</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Icon icon="ic:round-phone" className="text-white text-2xl lg:text-4xl" />
                                        <p className="text-white">+09939964417</p>
                                    </div>

                                </div>

                            </div>

                            <div className="bg-white rounded-lg p-10">
                                <Form {...form}>
                                  <form onSubmit={form.handleSubmit(onSubmit)}>
                                  <div className="space-y-3">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input className="bg-slate-100" type="email"  {...field} />
                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="subject"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Subject</FormLabel>
                                                    <FormControl>
                                                        <Input className="bg-slate-100" {...field} />
                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="contact"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Contact</FormLabel>
                                                    <FormControl>
                                                        <Input className="bg-slate-100" {...field} />
                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Message</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            className="bg-slate-100 resize-none"
                                                            rows={10}
                                                            placeholder="Tell me something..."

                                                            {...field}
                                                        />
                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button type="submit" className="w-full bg-green-500">Submit</Button>
                                    </div >
                                  </form>
                                </Form>
                            </div>
                      
                    </motion.div>
                )}
            </InView>
        </div>
    )
}

export default ContactView