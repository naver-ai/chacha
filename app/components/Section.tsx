export const Section = (props: {
    title: string
    children?: any
}) => {
    return <div className="pt-8 pb-8">
        <div className="section-title text-3xl font-light text-[#4592ec] mb-4">{props.title}</div>
        {
            props.children
        }
    </div>
}