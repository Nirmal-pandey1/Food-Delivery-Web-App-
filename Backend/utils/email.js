import nodeMailer from 'nodemailer';

export const sendEmail = async (to, subject, text) => {
    try {
        let transporter = nodeMailer.createTransport({
            service: 'gmail',   
            auth: {
                user:process.env.EMAIL_USER, 
                pass:process.env.EMAIL_PASS
            }
        });
        let info = await transporter.sendMail({ 
            from: process.env.EMAIL_USER,
            to,
            subject,    
            text
        });
        console.log(`Email sent: ${info.response}`);
    } catch (error) {
        console.error(`Error sending email: ${error.message}`);
        throw new Error(error.message);
    }   
}
