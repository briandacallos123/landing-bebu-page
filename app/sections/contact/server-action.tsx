"use server"
import nodemailer from 'nodemailer'

export const sendEmail = async(data:any) => {

    try {
     const {user, subject, message, contact} = data;
 
 
     var transporter = nodemailer.createTransport({
         host: 'smtp.gmail.com',
         port: 465,
         secure: true,
         auth: {
           user: process.env.USER_EMAIL,
           pass: process.env.USER_PASS
         }
       });
 
       await new Promise((resolve, reject) => {
         // verify connection configuration
         transporter.verify(function (error, success) {
             if (error) {
                 console.log(error);
                 reject(error);
             } else {
                 console.log("Server is ready to take our messages");
                 resolve(success);
             }
         });
     });
       
       var mailOptions = {
         from:  `"${user}": <${user}>`,
         to: process.env.USER_EMAIL,
         subject:`Someone sent an inquery`,
         html:`<html>
         <body>
         Hi, there.<br/>
 
         ${message}<br/><br/>
         Best Regards,<br/>
         Email: ${user}<br/>
         Contact: ${contact}
 
 
         </body>
         </html>`
       };
       
 
       await new Promise((resolve, reject) => {
         // send mail
         transporter.sendMail(mailOptions, (err, info) => {
             if (err) {
                 console.error(err);
                 reject(err);
             } else {
                 console.log(info);
                 resolve(info);
             }
         });
     });
 
       return {
         message:"success"
       }
    } catch (error:any) {
     throw new Error(error)
    }
 }