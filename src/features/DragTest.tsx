import { useRef, useState } from "react";

export default function DragTest() {
    const cardRef = useRef(null);
    const dragState = useRef({
        dragging: false,
        offsetX: 0,
        offsetY: 0,
        startLeft: 0,
        startTop: 0,
    });

    const [pos, setPos] = useState({ x: 50, y: 50 });

    function onPointerDown(e) {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        dragState.current = {
            dragging: true,
            offsetX: e.clientX - rect.left,
            offsetY: e.clientY - rect.top,
            startLeft: rect.left,
            startTop: rect.top,
        };

        document.addEventListener("pointermove", onPointerMove);
        document.addEventListener("pointerup", onPointerUp);
    }

    function onPointerMove(e) {
        if (!dragState.current.dragging) return;

        setPos({
            x: e.clientX - dragState.current.offsetX,
            y: e.clientY - dragState.current.offsetY,
        });
    }

    function onPointerUp() {
        dragState.current.dragging = false;

        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerup", onPointerUp);
    }

    return (
        <div
            ref={cardRef}
            onPointerDown={onPointerDown}
            style={{
                position: "absolute",
                top: pos.y,
                left: pos.x,
                width: 180,
                padding: 10,
                background: "white",
                border: "1px solid #ccc",
                borderRadius: 6,
                cursor: "grab",
                userSelect: "none",
            }}
        >
            Drag me
        </div>
    );
}
