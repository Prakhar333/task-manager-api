const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>
{
   sgMail.send({
       to:email,
       from:'prakharsharma783@gmail.com',
       subject:'Thank you for signing up!',
       text:`Hello ${name}. How we can help you with`
   })
}

const sendCancelEmail = (email, name)=>
{
    sgMail.send({
        to:email,
        from:'prakharsharma783@gmail.com',
        subject:'Cancellation Email',
        text:`Sorry to see you go ${name}. If there is anything we can improve we are always ready for your valuable feedback.`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelEmail
}