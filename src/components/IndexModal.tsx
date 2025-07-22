import type { HtmlHTMLAttributes } from "react";


export const IndexModal: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={`flex flex-col items-start bg-[#010101] rounded-3xl p-5 min-w-xs gap-4 text-white shadow-lg fixed bottom-23 left-5 transition-all ease-linear ${className}`}{...props}>{children}</div>
    )
}