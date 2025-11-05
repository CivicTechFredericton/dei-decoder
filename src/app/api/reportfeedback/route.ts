import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer")

/*
    NodeMailer documentation: https://nodemailer.com/
    Create a transporter object with Gmail service
    Email credentials pulled from env
*/
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // Email address and password of sender
        user: process.env.MAIL_SENDER,
        pass: process.env.MAIL_PASSWORD
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
    },
});

// Handle POST requests to send feedback emails
export async function POST(req: NextRequest) {

    try {
        // Parse incoming request body (feedback, input, and outputs)
        const { feedback, inputText, outputText, flaggedKeywords, suggestedText } = await req.json();

        // Reformat flagged keywords (array -> readable text)
        const formattedKeywords = Array.isArray(flaggedKeywords)
            ? flaggedKeywords.join(", ")
            : "";

        // Reformat suggested text (dictionary -> readable text)
        const formattedSuggestions = suggestedText
            ? Object.entries(suggestedText)
                .map(([keyword, suggestion]) => `- ${keyword}: ${suggestion}`)
                .join("\n")
            : "";

        // Construct email message
        const message = `A user ${feedback} the result!\n\nInput Job Posting:\n${inputText}\n\nFlagged Keywords:\n${formattedKeywords}\n\nSuggested Text:\n${formattedSuggestions}\n\nRevised Job Posting:\n${outputText}`;

        // Send an email to a recipient using the transporter
        const info = await transporter.sendMail({
            from: `DEI Decoder <${process.env.MAIL_SENDER}>`,
            to: `Admin <${process.env.MAIL_RECIPIENT}>`,
            subject: "DEI Result Feedback",
            text: message,
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
