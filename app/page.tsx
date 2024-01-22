import Image from "next/image";
import { Members } from "./sections/Members";
import { Acknowledgments } from "./sections/Acknowledgments";
import { Cite } from "./sections/Cite";
import { Abstract } from "./sections/Abstract";
import { Footer } from "./sections/Footer";
import { Architecture } from "./sections/Architecture";

export default function Home() {
  return (<>
    <main className="container mx-auto min-h-screen px-3 pt-6">
      <div className="text-2xl text-center">
        <div className="text-4xl mb-2 font-bold text-[#f45e9b]">ChaCha</div> 
        <div className="font-light leading-8">Leveraging <strong>Large Language Models</strong> to Prompt <strong>Children</strong> to Share Their <strong>Emotions</strong> about <strong>Personal Events</strong></div>
      </div>
      <Abstract/>
      <Members/>
      <Architecture/>
      <Cite/>
      <Acknowledgments/>
    </main><Footer/></>
  );
}
