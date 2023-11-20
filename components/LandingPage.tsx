import FancyIntro from "@/components/FancyIntro";
import Image from "next/image";
import React from "react";

export default function LandingPage() {
  return (
    // <section className="w-11/12 h-auto xl:w-10/12 xl:h-4/6 bg-slate-700  p-5 xl:flex xl:flex-row-reverse overflow-hidden">
    <section className="w-screen h-screen  grid place-items-center overflow-hidden ">
      <section className="w-11/12 h-5/6  xl:w-10/12 xl:h-4/6 bg-slate-700  p-5 xl:flex xl:flex-row-reverse overflow-hidden rounded-lg">
        <div className="flex justify-center  xl:w-full xl:h-full">
          <div className="pl-6 relative w-2/4 mb-5 aspect-square md:w-2/6 xl:w-2/3 xl:h-full xl:pb-0">
            <Image
              alt="nitin photo sq"
              src={"/imgs/nin_sq2.jpg"}
              fill
              // sizes="100vw"
              style={{
                objectFit: "cover",
              }}
              className="block xl:hidden rounded-full"
            />
            <Image
              alt="nitin photo full"
              src={"/imgs/nin_full.jpg"}
              fill
              // sizes="100vw"
              style={{
                objectFit: "cover",
              }}
              className="hidden xl:block"
            />
          </div>
        </div>
        <FancyIntro />
      </section>
    </section>
  );
}
