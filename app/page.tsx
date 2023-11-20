import AboutMe from "@/components/AboutMe";
import FancyIntro from "@/components/FancyIntro";
import LandingPage from "@/components/LandingPage";
import Projects from "@/components/Projects";
import Image from "next/image";
import React from "react";

export default function Home() {
  // types.ts
  const projectsList: Project[] = [
    {
      title: "TimeTable Maker",
      description: [
        "Developed an Android app for generating timetables in educational institutions.",
        "Utilized Jetpack Compose and Kotlin for a user-friendly experience.",
        "Achieved 10k+ downloads on the Google Play Store.",
      ],
      img: "/imgs/projects/tt.png",
      link: [
        {
          href: "https://play.google.com/store/apps/details?id=com.ntech.ttmaker&hl=en&gl=US",
          text: "Google Play Store",
        },
      ],
    },
    {
      title: "Disk MG (Utility Software)",
      description: [
        "Developed a C++ Utility Software for disk management in Windows.",
        "Integrated features into Context Menu for efficient disk organization.",
      ],
      img: "/imgs/projects/diskmg.png",
      link: [
        {
          href: "https://disk-mg.vercel.app/",
          text: "Website",
        },
      ],
    },
    {
      title: "Meet Up Coral",
      description: [
        "Real-time web video calling platform for connecting friends and strangers.",
        "Built using Next.js, Firebase, and Material-UI.",
      ],
      img: "/imgs/projects/meetup.png",
      link: [
        {
          href: "https://meet-up-coral.vercel.app/",
          text: "Website",
        },
        {
          href: "https://github.com/Nitin-Rana1/meet-up-coral-vdo-call",
          text: "GitHub",
        },
      ],
    },
    {
      title: "3D Tic Tac Toe",
      description: [
        "Developed an engaging 3D Tic Tac Toe game with AI and friend play options.",
        "Implemented in Unity 3D.",
      ],
      img: "/imgs/projects/ttt.png",
      link: [
        {
          href: "https://play.google.com/store/apps/details?id=com.NTECH.TicTacToe3d&hl=en&gl=US",
          text: "Google Play Store",
        },
      ],
    },
  ];

  return (
    // how to center a div inside a div in tailwindcss
    //make main a grid and align the children to the middle
    <main className="bg-slate-900">
      <LandingPage />
      <hr />
      <Projects projects={projectsList} />
      <hr />
      <AboutMe />
    </main>
  );
}
