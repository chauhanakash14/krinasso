import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

export const sendBrief = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Krinasso <hello@krinasso.com>",
        to: ["hello@krinasso.com"],
        subject: `New Brief from ${data.name}`,
        html: `
          <h2>New Brief Submission</h2>

          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Website:</strong> ${data.site}</p>
          <p><strong>Budget:</strong> ${data.budget}</p>
          <p><strong>Services:</strong> ${data.services}</p>

          <h3>Brief</h3>
          <p>${data.brief}</p>
        `,
      });

      return {
        success: true,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: "Failed to send email.",
      };
    }
  });