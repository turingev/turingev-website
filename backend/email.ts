import { SmtpClient } from "https://deno.land/x/smtp/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const { EMAIL_FROM, EMAIL_SERVER, EMAIL_PASSWORD, EMAIL_TO } = Deno.env
  .toObject();

const client = new SmtpClient();

const connectConfig = {
  hostname: EMAIL_SERVER,
  port: 465,
  username: EMAIL_FROM,
  password: EMAIL_PASSWORD,
};

export const sendEmail = async ({ subject, message }) => {
  await client.connectTLS(connectConfig);
  await client.send({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: subject,
    content: message,
  });
  await client.close();
};
