import { useState, useEffect } from "react";

export default function TypingText({ text, speed = 100, className = "" }) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i));
            i++;
            if (i >text.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <span className={className}>{displayed}</span>;
}
