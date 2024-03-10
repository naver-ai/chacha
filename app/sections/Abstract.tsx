import { Section } from "../components/Section"
import { ArxivIcon, GithubIcon } from "../components/icons"
import { NewspaperIcon } from "@heroicons/react/20/solid"

export const Abstract = () => {
    return <Section title="Abstract" className="flex-1 pt-0 md:pt-12">
        <p>
        Children typically learn to identify and express emotions through sharing their stories and feelings with others, particularly their family. However, it is challenging for parents or siblings to have emotional communication with children since children are still developing their communication skills. We present <b>ChaCha</b>, a chatbot that encourages and guides children to share personal events and associated emotions. <strong>ChaCha combines a state machine and large language models (LLMs) to keep the dialogue on track while carrying on free-form conversations.</strong> Through an exploratory study with 20 children (aged 8-12), we examine how ChaCha prompts children to share personal events and guides them to describe associated emotions. Participants perceived ChaCha as a close friend and shared their stories on various topics, such as family trips and personal achievements. Based on the findings, we discuss opportunities for leveraging LLMs to design child-friendly chatbots to support children in sharing emotions.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
            <a className="icon-label-button bg-teal-500 pl-4" aria-disabled={true} href={"./public/chacha-chi24-preprint-240219.pdf"} target="_blank">
                <NewspaperIcon className="w-6 h-6 text-white"/>
                <span>Paper</span>
            </a>
            <a className="icon-label-button bg-red-400 pl-4" href="https://arxiv.org/abs/2309.12244" target="_blank">
                <ArxivIcon size={20}/>
                <span>arXiv</span>
            </a>
            <a className="icon-label-button" href="https://github.com/naver-ai/chacha-chatbot" target="_blank">
                <GithubIcon size={28}/>
                <span>Source code</span>
            </a>
        </div>
    </Section>
}