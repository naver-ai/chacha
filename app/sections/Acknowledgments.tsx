import { Section } from "../components/Section"

export const Acknowledgments = () => {
    return <Section title="Acknowledgments">
        <ul className="list-disc list-outside ml-4">
            <li>This work was supported as a research internship at NAVER AI Lab.</li>
            <li>The conversational flow design was shaped in National Science Foundation CAREER Grant #1942547 (PI: Sun Young Park).</li>
            <li>We used OpenAI's GPT APIs to run the chatbot.</li>
        </ul>
    </Section>
}