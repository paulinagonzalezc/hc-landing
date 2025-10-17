import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import ProjectTemplates from "@/components/ProjectTemplates";
import GetStarted from "@/components/GetStarted";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <ProjectTemplates />
      <GetStarted />
    </>
  );
}
