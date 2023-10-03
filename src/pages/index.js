import Container from "@/components/Container/Container";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div>
      <HeroSlider />
    </div>
  );
}
