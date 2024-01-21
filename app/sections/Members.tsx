import Image from "next/image"
import { Section } from "../components/Section"

const members = [
    {
        name: "Woosuk Seo",
        affiliation: "Univ. of Michigan, Ann Arbor",
        role: "PhD candidate",
        thumb: "/images/thumb-wsseo.jpg",
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
    },
    {
        name: "Mark S. Ackerman",
        affiliation: "Univ. of Michigan, Ann Arbor",
        role: "Professor",
        thumb: "/images/thumb-mackerman.jpg",
    },
    {
        name: "Young-Ho Kim",
        affiliation: "NAVER AI Lab",
        role: "Research Scientist",
        thumb: "/images/thumb-yhkim.jpg",
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
                        <div className="text-xl font-semibold">{member.name}</div>
                        <div className="font-light">{member.role}</div>
                        <div className="font-light">{member.affiliation}</div>
                        {member.note != null ? <div className="font-light italic text-sm text-orange-500">{member.note}</div> : null }
                    </div>
                </div>
            })
        }
        </div>
    </Section>
}