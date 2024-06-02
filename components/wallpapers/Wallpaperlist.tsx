"use client";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Wallpaper } from "@/types/wallpaper";

export default function WallpaperList() {

  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);

  useEffect(() => {
    let ignore = false;
    async function getWallpapersData() {
      const json = await axios.get("/api/get-wallpaper-list");
      if (!ignore) {
        setWallpapers(json.data.data);
      }
    }
    getWallpapersData();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Wallpapers</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {wallpapers.map((wallpaper) => (
            <a key={wallpaper.id} href={wallpaper.url} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={wallpaper.url}
                  alt={wallpaper.description}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {wallpaper.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
