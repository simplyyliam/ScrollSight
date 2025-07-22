import gsap from "gsap";
import { useEffect, useRef, type HtmlHTMLAttributes } from "react";


export const IndexModal: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    ...props
}) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const obj = ref.current
        if(!obj) return

        gsap.to(obj, {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "expo.out"
        })

        if(!obj) {
            gsap.to(obj, {
                scale: 0.5,
                opacity: 0,
                duration: 0.4,
                ease: "expo.in"
            })
        }
    }, [])

    return (
        <div ref={ref} className={`flex flex-col items-start bg-[#010101] rounded-3xl p-5 min-w-xs gap-4 text-white shadow-lg fixed bottom-23 left-5 opacity-0 scale-0 transition-all ease-linear ${className}`}{...props}>{children}</div>
    )
}