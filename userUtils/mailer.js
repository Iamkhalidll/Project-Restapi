import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()
let mailer =async (usermail,userName,packageName) =>{
    
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user:process.env.EMAIL, // generated ethereal user
        pass: process.env.PASSWORD // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });
    
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `Parcel delivery ${process.env.Email}`, // sender address
        to: usermail, // list of receivers
      subject: "Status", // Subject line
      text: "Hello world?", // plain text body
      html: `<b>hello ${userName} your ${packageName} have been delivered</b>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    
  }
  let mailVerifier=async (usermail,userName) =>{
    
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
    service:"gmail",
      secure: false, // true for 465, false for other ports
      auth: {
        user: "youngatere04@gmail.com", // generated ethereal user
        pass: 'szrn eajj afoj jmvx' // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });
    
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"Parcel delivery" youngatere04@gmail.com`, // sender address
        to: usermail, // list of receivers
      subject: "Status", // Subject line
      text: "Hello world?", // plain text body
      html: `<b>Congratulations  ${userName} you have signed up </b>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    
  }

  export {mailer,mailVerifier}