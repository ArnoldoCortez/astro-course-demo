import type { APIRoute } from "astro";
import { XataClient } from "../../xata";

export const POST: APIRoute = async ({ request, redirect }) => {
  const client = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });
  const formData = await request.formData();
  const email = formData.get("email") as string;

  if (!email) {
    return redirect("/newsletter/failure", 307);
  }

  await client.db.subscribers.create({
    email,
  });

  return redirect("/newsletter/success", 307);
};
