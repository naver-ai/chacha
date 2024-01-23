import Image from "next/image"
import { Section } from "../components/Section"
import { HomeIcon } from '@heroicons/react/20/solid'

const members = [
    {
        name: "Woosuk Seo",
        affiliation: "Univ. of Michigan, Ann Arbor",
        role: "PhD candidate",
        thumb: "/images/thumb-wsseo.jpg",
        web: "https://seowoosuk.wixsite.com/home",
        note: "*Research intern at NAVER AI Lab"
    },
    {
        name: "Chanmo Yang",
        affiliation: "Wonkwang Univ. Hospital",
        role: "Child and Adolescent Psychiatrist",
        thumb: "/images/thumb-cmyang.jpg",
    },
    {
        name: "Sun Young Park",
        affiliation: "Univ. of Michigan, Ann Arbor",
        role: "Associate Professor",
        thumb: "/images/thumb-sypark.jpg",
        web: "http://sunyoungpark.weebly.com/",
    },
    {
        name: "Mark S. Ackerman",
        affiliation: "Univ. of Michigan, Ann Arbor",
        role: "Professor",
        thumb: "/images/thumb-mackerman.jpg",
        web: "https://www.socialworldsresearch.org/si/ackerm"
    },
    {
        name: "Young-Ho Kim",
        affiliation: "NAVER AI Lab",
        role: "Research Scientist",
        thumb: "/images/thumb-yhkim.jpg",
        web: "http://younghokim.net"
    }
]

export const Members = () => {
    return <Section title="Contributors">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {
            members.map(member => {
                return <div className="flex items-center">
                    <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
                        <Image alt={`Thumbnail of ${member.name}`} src={member.thumb} fill={true}/>
                    </div>
                    <div className="flex-1 ml-4">
                        <div className="text-xl font-semibold flex items-center">
                            <span>{member.name}</span>
                            {
                                member.web != null ? <a href={member.web} target="_blank"><HomeIcon className="w-5 h-5 text-gray-500 mb-0.5 ml-1"/></a> : null
                            }
                        </div>
                        
                        <div className="font-light">{member.role}</div>
                        <div className="font-light">{member.affiliation}</div>
                        {member.note != null ? <div className="font-light italic text-sm text-orange-500">{member.note}</div> : null }
                    </div>
                </div>
            })
        }
        </div>
        <div className="mt-8 flex items-center gap-6">
            <Image className="w-[200px]" alt="NAVER logo" src={require("../../public/images/logos/ai_lab_logo_vertical.png")} width={1728} height={552}/>
            <a href="https://www.si.umich.edu/" target="_blank"><Image className="w-20" alt="UMSI logo" src={require("../../public/images/logos/umsi-logo.svg")} unoptimized={true}/></a>
            <a href="https://global.wkuh.org/" target="_blank"><Image className="w-[250px]" alt="Wonkwang logo" src={require("../../public/images/logos/wonkwang-logo.svg")} unoptimized={true}/></a>
            
        </div>
    </Section>
}