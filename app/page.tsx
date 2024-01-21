import Image from "next/image";
import { Members } from "./sections/Members";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen px-3 pt-6">
      <div className="text-2xl text-center">
        <div className="text-4xl mb-2 font-bold">ChaCha</div> 
        <div className="font-light leading-8">Leveraging <strong>Large Language Models</strong> to Prompt <strong>Children</strong> to Share Their <strong>Emotions</strong> about <strong>Personal Events</strong></div>
      </div>
      <Members/>
    </main>
  );
}
