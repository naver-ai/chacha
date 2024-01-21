export const Section = (props: {
    title: string
    children?: any
}) => {
    return <div className="pt-8 pb-8">
        <div className="text-3xl font-light text-slate-600 mb-4">{props.title}</div>
        {
            props.children
        }
    </div>
}