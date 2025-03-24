import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_SENDER,
        pass: process.env.MAIL_PASSWORD
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
    },
});

export async function POST(req: NextRequest) {

    try {

        const feedback = await req.json();
        const info = await transporter.sendMail({
            from: `DEI Decoder <${process.env.MAIL_SENDER}>`,
            to: `Admin <${process.env.MAIL_RECIPIENT}>`,
            subject: "DEI Result Feedback",
            text: `A user ${feedback} the result!`,
        });
        return NextResponse.json(info.messageId);

    } catch (error) {

        console.error("Error:", error);
        return NextResponse.json(
            { error: "An error occurred while sending your feedback." },
            { status: 500 }
        );

    }
}
