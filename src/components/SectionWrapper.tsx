import type { HtmlHTMLAttributes } from "react";
import type React from "react";



export const SectionWrapper: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={`flex flex-col max-w-[55vw] h-full p-10 gap-10  ${className}`}{...props}>{children}</div>
    )
}

