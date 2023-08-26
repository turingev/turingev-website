import { z, ZodError } from "zod";
import { createHttpError } from "oak";
import { sendEmail } from "../email.ts";

const MemberApplicationSchema = z.object({
  name: z.string().min(2).max(100),
  surname: z.string().min(2).max(100),
  birthday: z.string().min(8).max(11),
  email: z.string().min(4).max(100),
  phone: z.string().max(30),
  street: z.string().min(5).max(100),
  housenumber: z.string().min(1).max(6),
  zipcode: z.string().length(5).max(100),
  town: z.string().min(2).max(30),
  iban: z.string().min(8).max(30),
  bank: z.string().min(2).max(30),
  contribution: z.string().max(100),
  sepa: z.literal("on"),
  message: z.string().max(10000),
});

type MemberApplication = z.infer<typeof MemberApplicationSchema>;

export const addMemberApplication = async (ctx) => {
  const params = (await ctx.request.body().value) as URLSearchParams;
  const form = {} as any;
  for (const [key, value] of params.entries()) form[key as string] = value;

  try {
    const data = MemberApplicationSchema.parse(form) as MemberApplication;
    await sendEmail({
      subject:
        `New Application for Membership from ${data.name} ${data.surname}`,
      message: Object.entries(data)
        .map(([key, value]) => `${key}: ${value}`)
        .join("</br>"),
    });
    ctx.response.body = "E-Mail sent sucessfully :D";
  } catch (e) {
    if (e instanceof ZodError) {
      throw createHttpError(400, JSON.stringify(e));
    } else {
      throw e;
    }
  }
};
