import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    const { firstName, lastName, email, subject, message, region, phone } = req.body;
    const content = {
        to: 'ziggybadans@gmail.com',
        from: 'ziggybadans@gmail.com',
        subject: `New message from ${firstName} ${lastName ? lastName : ''}`,
        text: message,
        html: `
            <h1>Details</h1>
            <hr />
            <ul>
            <li><b>Firstname:</b> ${firstName}</li>
            ${lastName ? `<li><b>Lastname:</b> ${lastName}</li>` : ''}
            <li><b>Email:</b> ${email}</li>
            ${region ? `<li><b>Region:</b> ${region}</li>` : ''}
            ${phone ? `<li><b>Phone:</b> ${phone}</li>` : ''}
            <li><b>Subject:</b> ${subject}</li>
            <li><b>message:</b> ${message}</li>
            </ul>
        `,
    };

    try {
        await sgMail.send(content);
        return res.status(200).json({ error: '' });
    } catch (error) {
        console.log('ERROR ', error);
        return res.status(400).json({ error: 'Failed to send the message.' });
    }
}