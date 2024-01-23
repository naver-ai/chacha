import { Section } from "../components/Section"

const bibTex = "@inproceedings{seo2024chacha,\n\
    author = {Seo, Woosuk and Yang, Chanmo and Kim, Young-Ho},\n\
    title = {ChaCha: Leveraging Large Language Models to Prompt Children to Share Their Emotions about Personal Events},\n\
    year = {2024},\n\
    doi = {10.1145/3613904.3642152},\n\
    publisher = {Association for Computing Machinery},\n\
    address = {New York, NY, USA},\n\
    booktitle = {Proceedings of the CHI Conference on Human Factors in Computing Systems},\n\
    location = {Honolulu, HI, USA},\n\
    series = {CHI '24}\n\
    }"

export const Cite = () => {
    return <Section title="Citing This Work">
        <div className="border-y-[1px] border-slate-400 py-3">
            <div>Woosuk Seo, Chanmo Yang, and Young-Ho Kim. 2024.</div>
            <div className="font-bold">ChaCha: Leveraging Large Language Models to Prompt Children to Share Their Emotions about Personal Events.</div>
            <div>In <i>Proceedings of ACM CHI Conference on Human Factors in Computing Systems</i> (CHI'24). To appear.</div>
        </div>
        <div className="mt-4">
            <div className="font-bold mb-1">BibTeX</div>
            <pre className={"p-3 font-mono text-xs sm:text-sm border-[1px] rounded-lg border-slate-300 decoration-none break-words text-wrap"}>{bibTex}</pre>
        </div>
        
    </Section>
}