import { NextResponse } from "next/server";
import axios from "axios";
// import { setProxyAgent } from "@/utils/prox-agent";

var colors = require("colors");

export async function POST(req: Request) {
  const request = await req.json();
  console.log("Request received: ", request);
  const desription = request.description;

  const requestBody = {
    prompt: `A beautiful wallpaper with the description: ${desription}`,
    model: "dall-e-2",
    size: "1024x1024",
    n: 1,
    quality: "hd",
    response_format: "url",
  };
  console.log("Request body: ", requestBody);

  // const proxy = process.env["PROXY"];
  // const port = process.env["PROXY_PORT"];
  // console.log(`Proxy: ${proxy}, Port: ${port}`.blue);

  // if (proxy && port) {
  //   setProxyAgent(proxy, port);
  //   console.log(`Proxy set to ${proxy}:${port}`.green);
  //   const myIP = await fetch("https://api.ipify.org?format=text");
  //   console.log(`myIP: ${await myIP.text()}`.red);
  // }

  const apiUrl = process.env["OPENAI_API_URI"];
  const apiKey = process.env["OPENAI_API_KEY"];

  try {
    if (!apiUrl || !apiKey) {
      throw new Error("API URL or API Key not found");
    }

    console.log(`API URL: ${apiUrl}, start generating image`.blue);
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    console.log("successfully generated image".green);
    return NextResponse.json({
      status: 200,
      message: "success",
      data: {
        img_url: response.data.data[0].url,
      },
    });
    
  } catch (error) {
    console.error("Error generating image: ", error);
    console.error(
      "Detailed error: ",
      error.response ? error.response.data : "No detailed error available"
    );
    return NextResponse.json({
      status: 500,
      message: "error",
      data: {
        error: error.message ? error.response.data : "unknown error",
      },
    });
  }
}

