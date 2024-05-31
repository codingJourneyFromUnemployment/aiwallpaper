import { NextResponse } from "next/server";
import { getOpenAIClinet } from "@/utils/openai";

export async function POST(req: Request) {
  const client = getOpenAIClinet();
  console.log("OpenAI client initialized");
  try {
    const request = await req.json();
    console.log("Request received: ", request);
    const desription = request.description;
    const response = await client.images.generate({
      prompt: `A beautiful wallpaper with the description: ${desription}`,
      model: "dall-e-2",
      size: "1024x1024",
      n: 1,
      quality: "hd",
      response_format: "url",
    });
    return NextResponse.json({
      status: 200,
      message: "success",
      data: {
        img_url: response.data[0].url,
      },
    });
  } catch (error) {
		return NextResponse.json({
			status: 500,
			message: "error",
			data: {
				error: error.message,
			},
		});
	}
}
