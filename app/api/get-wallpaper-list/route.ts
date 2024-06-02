import { NextResponse } from "next/server";
import axios from "axios";
import { Wallpaper } from "@/types/wallpaper";

var colors = require("colors");

export async function GET(req: Request) {
  const wallpapers: Wallpaper[] = [
    {
      id: 1,
      url: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      description:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      url: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
      description:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      url: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      description:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 4,
      url: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      description:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
  ];

  return NextResponse.json({
    status: 200,
    message: "success",
    data: wallpapers
  });
}