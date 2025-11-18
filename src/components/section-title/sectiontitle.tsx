import { FC } from "react";

interface ChildProps {
    title: string;
    subtitle: string;
}

const SectionTitle: FC<ChildProps> = (props) => {
    return (
        <div className="flex flex-col py-4 mb-4">
            <h1 className="text-lg text-default font-bold font-poppins">{props.title}</h1>
            <h2 className="text-sm text-secondary">{props.subtitle}</h2>
        </div>
    )
}

export default SectionTitle