import { NextResponse } from "next/server";
import { getOpenAIClinet } from "@/utils/openai";

var colors = require("colors");

export async function POST(req: Request) {
  const client = getOpenAIClinet();
  console.log("OpenAI client initialized".green);
  try {
    const request = await req.json();
    console.log("Request received: ", request);
    const desription = request.description;
    
    const requestBody = {
      prompt: `A beautiful wallpaper with the description: ${desription}`,
      model: "dall-e-3",
      size: "1792x1024",
      n: 1,
      quality: "hd",
      response_format: "url",
    };
    console.log("Request body: ", requestBody);
    
    const myIP = await fetch("https://api.ipify.org?format=text");
    console.log(`myIP: ${await myIP.text()}`.red);

    const response = await client.images.generate(requestBody);
    console.log(
      "successfully generated image"
    );

    return NextResponse.json({
      status: 200,
      message: "success",
      data: {
        img_url: response.data[0].url,
      },
    });

    console.log(
      `response: ${response.data[0].url}`.green
    )
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
