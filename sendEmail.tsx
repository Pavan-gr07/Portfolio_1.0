import emailjs from "@emailjs/browser";
import {
  EMAIL_JS_SERVICE_ID,
  EMAIL_JS_PUBLIC_KEY,
  EMAIL_JS_TEMPLATE,
} from "./config";

// Define the expected shape of the email body
interface EmailBody {
  [key: string]: string; // Adjust based on the actual structure you use
}

async function sendMail(body: EmailBody): Promise<string> {
  try {
    await emailjs.send(
      EMAIL_JS_SERVICE_ID,
      EMAIL_JS_TEMPLATE,
      body,
      EMAIL_JS_PUBLIC_KEY
    );
    return "Email sent successfully";
  } catch (error: any) {
    throw new Error(error.message || "Failed to send email");
  }
}

export default sendMail;
