import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    let timeout;

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setVisible(true);

            clearTimeout(timeout);
            timeout = setTimeout(() => setVisible(false), 5000);
        };

        const hideCursor = () => setVisible(false);

        document.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseout", hideCursor);

        return () => {
            document.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseout", hideCursor);
        };
    }, []);

    return (
        <div
            className={`fixed w-5 h-5 rounded-full bg-[#064974] shadow-[0_0_10px_#2696E8,0_0_60px_#2696E8,0_0_100px_#2696E8] transition-opacity duration-300 pointer-events-none ${visible ? "opacity-100" : "opacity-0"
                }`}
            style={{
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -50%)",
            }}
        />
    );
}