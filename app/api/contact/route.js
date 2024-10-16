// app/api/contact/route.js

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, phone, companyName, website, industry, howDidYouHear } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kingsuleman31@gmail.com',
        pass: 'oebr lkma sstt aetm',
      },
    });

    const mailOptions = {
      from: 'kingsuleman31@gmail.com',
      to: 'muhammadsuleman03144@gmail.com',
      subject: 'Form Submission',
      text: `Name: ${name}, Email: ${email}, Phone: ${phone}, Company: ${companyName}, Website: ${website}, Industry: ${industry}, Heard from: ${howDidYouHear}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Thank you. We Will Contact You Soon !' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to Send. Try Start Your Project On the Top Right' }, { status: 500 });
  }
}
