import type { HtmlHTMLAttributes } from "react";
import type React from "react";



export const TextBody: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={` ${className}`}{...props}>{children}</div>
    )
}

