"use client";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import { AppShortcut, AccountTree } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
export default function FancyIntro() {
  return (
    <main className="w-full ">
      <Typography
        variant="h5"
        className="bold pb-5 h-10"
        sx={{ color: "white" }}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("> Nitin Rana")
              .callFunction(() => {
                console.log("Hi!, I'm Nitin Rana");
              })
              .start();
          }}
        />
      </Typography>
      <Typography
        variant="h4"
        sx={{
          background: "-webkit-linear-gradient(45deg, #FF6B6B, #FFC4AB)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: "bold",
        }}
      >
        Web Developer
      </Typography>
      <Typography className="pb-5 pt-5 pr-10 text-gray-500 text-base">
        I&apos;m a web developer and occasionally android & game dev. I love
        creating stuff and solving problems. I am open to new opportunities.
      </Typography>
      <Link href="/resume">
        <Button variant="contained" className="mb-5 bg-[#f76159] font-bold">
          Resume
        </Button>
      </Link>
      <Card
        className="bg-slate-700 p-5 text-gray-50 block md:bg-gradient-omega-900 md:shadow-2xl border-t-2 "
        style={{
          borderWidth: "2px",
          borderImage: "linear-gradient(to right, coral, white, green)",
          borderImageSlice: "1",
          borderStyle: "solid",
          borderBottom: "0",
          borderLeft: "0",
          borderRight: "0",
          overflow: "hidden",
        }}
      >
        <CardContent className="grid  xl:flex  mb-0 pb-0">
          <div className="flex pb-4 xl:mr-6">
            <span className="text-4xl font-bold text-orange-400 pr-4">4+</span>
            <span className="">
              <span>Google Play Store</span>
              <div>App</div>
            </span>
          </div>
          <div className="flex pb-4 xl:mr-6">
            <span className="text-4xl font-bold text-white-400 pr-4">6+</span>
            <span className="">
              <div>Project</div>
              <span>Websites</span>
            </span>
          </div>
          <div className="flex ">
            <span className="text-4xl font-bold text-green-500 pr-4">1+</span>
            <span className="">
              <span>Desktop</span>
              <br />
              <span>Application</span>
            </span>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
