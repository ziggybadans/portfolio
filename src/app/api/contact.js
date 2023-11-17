import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(req, res) {
    const { firstName, lastName, email, subject, message, region, phone } = req.body;

    if (firstName === '' || email === '' || subject === '' || message === '') {
        return res.status(400).json({ error: 'The first name, email, subject and message fields are required. Please fill in those fields and try again.' });
    }

    const content = {
        to: 'ziggybadans@gmail.com',
        from: email,
        subject: `New message from ${firstName} ${lastName}`,
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
            <li><b>Message:</b> ${message}</li>
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