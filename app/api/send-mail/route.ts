const nodemailer = require('nodemailer');

export async function POST(req: Request, res: Response) {
  // await res.setHeader('Content-Type', 'application/json');
  console.log(req);
  // const { name, email, subject, message } =await req.body();

  // return new Promise((resolve, reject) => {
  //   const transporter = nodemailer.createTransport({
  //     host: process.env.ZOHO_HOST ,
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: process.env.ZOHO_USER,
  //       pass: process.env.ZOHO_PASS
  //     }
  //   });

  //   transporter
  //     .sendMail({
  //       from: email, 
  //       to: process.env.ZOHO_EMAIL, 
  //       subject: subject, 
  //       text: message, 
  //       html: `<div>${message} <br /><br />Thank you,<br />${name}</div>`
  //     })
  //     .then((response) => {
  //       res
  //         .status(200)
  //         .json({ error: false, emailSent: true, errors: [], response });
  //       resolve();
  //     })
  //     .catch((error) => {
  //       res
  //         .status(500)
  //         .json({ error: true, emailSent: false, errors: [error] });
  //       reject(new Error(error));
  //     });
  // });
}