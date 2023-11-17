import sgMail from "@sendgrid/mail"
import multer from "multer"

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const upload = multer;

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const form = upload.array("fileUpload")(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                res.status(500).json({ error: err.message });
            } else if (err) {
                res.status(500).json({ error: err.message });
            } else {
                const { email, name } = req.body;
                const attachments = req.files.map((file) => ({
                    filename: file.originalname,
                    content: file.buffer.toString('base64'),
                    type: file.mimetype,
                    disposition: 'attachment',
                }));

                const msg = {
                    to: 'ziggybadans@gmail.com',
                    from: email,
                    subject: `New contact from ${name}`,
                    attachments,
                };

                try {
                    await sgMail.send(msg);
                    res.status(200).json({ done: true });
                } catch (error) {
                    console.error(error);
                    res.status(500).json({ error: 'An error occurred while sending email' });
                }
            }
        });
    } else {
        res.status(500).json({ error: 'Wrong request method' });
    }
}