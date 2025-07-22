import type { HtmlHTMLAttributes } from "react";


export const ProgressModal: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={`flex bg-[#010101] rounded-3xl p-3 gap-4 text-white shadow-lg fixed bottom-5 left-5 transition-all ease-linear ${className}`}{...props}>{children}</div>
    )
}