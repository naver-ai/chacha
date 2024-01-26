import { Section } from "../components/Section"

const bibTex = "@inproceedings{seo2024chacha,<br/>\n\
&emsp;&emsp;author = {Seo, Woosuk and Yang, Chanmo and Kim, Young-Ho},<br/>\n\
&emsp;&emsp;title = {ChaCha: Leveraging Large Language Models to Prompt Children to Share Their Emotions about Personal Events},<br/>\n\
&emsp;&emsp;year = {2024},<br/>\n\
&emsp;&emsp;doi = {10.1145/3613904.3642152},<br/>\n\
&emsp;&emsp;publisher = {Association for Computing Machinery},<br/>\n\
&emsp;&emsp;address = {New York, NY, USA},<br/>\n\
&emsp;&emsp;booktitle = {Proceedings of the CHI Conference on Human Factors in Computing Systems},<br/>\n\
&emsp;&emsp;location = {Honolulu, HI, USA},<br/>\n\
&emsp;&emsp;series = {CHI'24}<br/>\n\
    }"

export const Cite = () => {
    return <Section title="Citing This Work">
        <div className="border-y-[1px] border-slate-400 py-3">
            <div>Woosuk Seo, Chanmo Yang, and Young-Ho Kim. 2024.</div>
            <div className="font-bold">ChaCha: Leveraging Large Language Models to Prompt Children to Share Their Emotions about Personal Events.</div>
            <div>In <i>Proceedings of ACM CHI Conference on Human Factors in Computing Systems</i> (CHI&apos;24). To appear.</div>
        </div>
        <div className="mt-4">
            <div className="font-bold mb-1">BibTeX</div>
            <p className={"p-3 font-mono text-xs sm:text-sm border-[1px] rounded-lg border-slate-300 decoration-none"} dangerouslySetInnerHTML={{__html: bibTex}}/>
        </div>
        
    </Section>
}