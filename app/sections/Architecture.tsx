import { Section } from "../components/Section"
export const Architecture = () => {
    return <Section title="How ChaCha Works">
        <p className="mb-4">
            ChaCha&apos;s conversational flow is designed as a state machine, where the system stays in one state and proceeds to the next one when meeting the state goal:
        </p>
        <img alt="phases figure" className="w-full my-8 hidden md:block" src={require('../../public/images/phases.svg')}/>
        <img alt="phases figure" className="w-full my-8 block md:hidden" src={require('../../public/images/phases-vertical.svg')}/>
        <p className="my-4 mt-20">
        Based on the conversational flow and the current dialogue, an LLM is prompted dynamically. For example, receiving the child&apos;s message in the <span className="p-3 py-0.5 rounded-full bg-[#85c038] text-white">Label</span> phase, (1) the conversation analyzer <span className="circle-digit">A</span> analyzes the current dialogue <span className="circle-digit">B</span> and extracts a structured summary <span className="circle-digit">C</span> of what emotions are identified and whether ChaCha has acknowledged them. Combining the incomplete piece of the summary <span className="circle-digit">D</span> as well as the summary data from the previous phase <span className="circle-digit">E</span>, (2) the system formulates a new instruction <span className="circle-digit">F</span> for the response generation. (3) That way, the LLM <span className="circle-digit">G</span> generates a response <span className="circle-digit">H</span> explicitly steered to empathize with the child&apos;s regretful event.
        </p>
        <img alt="prompting figure" className="w-full my-8" src={require('../../public/images/prompting.svg')}/>
        
    </Section>
}