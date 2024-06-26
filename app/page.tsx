import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import WallpaperList from "@/components/wallpapers/Wallpaperlist";
import InputForm from "@/components/form/InputForm";

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Header />
      <Hero />
      <InputForm />
      <WallpaperList />
      <Footer />
    </section>
  );
}
