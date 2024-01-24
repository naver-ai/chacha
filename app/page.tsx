import Image from "next/image";
import { Members } from "./sections/Members";
import { Acknowledgments } from "./sections/Acknowledgments";
import { Cite } from "./sections/Cite";
import { Abstract } from "./sections/Abstract";
import { Footer } from "./sections/Footer";
import { Architecture } from "./sections/Architecture";
import { Mockup } from "./sections/Mockup";

export default function Home() {
  return (<>
    <main className="container mx-auto min-h-screen px-3 pt-6">
      <div>
        <div className="font-bold text-lg text-[#ff9164] mb-3">ACM CHI 2024 Paper</div>
        <div className="text-4xl mb-2 font-bold text-[#f45e9b]">ChaCha</div> 
        <div className="font-light leading-[2.5rem] text-3xl">Leveraging <strong>Large Language Models</strong> to Prompt <strong>Children</strong> to Share Their <strong>Emotions</strong> about <strong>Personal Events</strong></div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:items-start gap-12">
        <Mockup/>
        <Abstract/>
      </div>
      <Members/>
      <Architecture/>
      <Cite/>
      <Acknowledgments/>
    </main><Footer/></>
  );
}
