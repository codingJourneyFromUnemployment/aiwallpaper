"use client";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

interface Wallpaper {
  id: number;
  url: string;
  description: string;
}

const WallpaperList = () => {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);

  useEffect(() => {
    let ignore = false;
    async function getWallpapersData() {
      const json = await axios.get("/api/get-wallpaper-list");
      if (!ignore) {
        setWallpapers(json.data.data.wallpapers);
        console.log("Wallpapers: ", wallpapers);
      }
    }
    getWallpapersData();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <h1>Wallpapers</h1>
      {wallpapers.length > 0 ? (
        <ul>
          {wallpapers.map((wallpaper) => (
            <li key={wallpaper.id}>
              <p>{wallpaper.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No wallpapers found.</p>
      )}
    </div>
  );
}

export default WallpaperList;