import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method === 'POST') {

    try {
      const { email, textarea, subject, phone } = await req.body.values
      const messageBodyToUser = {
        from: `Potential Employer Opportunity <${process.env.username}>`,
        to: `${process.env.email}`,
        subject,
        html: `<div>
        <h1>${subject}</h1>
        <h3>Sender: ${email}</h3>
        <h3>Phone: ${phone}</h3>
        <h4>Message: ${textarea}</h4>
        </div>`
      }

      const messageBodyToSender = {
        from: `Sharjeel Iqbal <${process.env.username}>`,
        to: `$${email}`,
        subject: `Excited and looking forward to talking with you!`,
        html: `<div>
          <h1>Hello!</h1>
          <p>
            Thank you so much for reaching out to me.
            I might be busy with other projects or work,
            but your email is very important to me, and I will get back to you as soon as possible.
            Looking forward to speaking with you!
            <br>
            <br>
            <h3>Best Regards,</h3>
            <h3>Sharjeel Iqbal </h3>
            <p>This is an auto-generated email, please do not reply to this email.</p>
          </p>
        </div>`

      }

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.username,
          pass: process.env.password,
        },
      })
      const mail = await transporter.sendMail(messageBodyToUser)
      const mailToSender = transporter.sendMail(messageBodyToSender)
      res.status(200).json('Message sent sucessfully')
    }
    catch {
      res.status(500).json('something went wrong')
    }
  }
}
