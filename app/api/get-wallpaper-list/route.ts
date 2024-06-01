import { NextResponse } from "next/server";
import axios from "axios";

var colors = require("colors");

export async function GET(req: Request) {
  return NextResponse.json({
    status: 200,
    message: "success",
    data: {
      wallpapers: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1631683403177-6c2a5c6e4b6b",
          description: "A beautiful wallpaper",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1631683403177-6c2a5c6e4b6b",
          description: "Another beautiful wallpaper",
        },
      ],
    },
  });
}