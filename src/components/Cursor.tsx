import useMousePosition from "../hooks/useMousePosition";
import { motion } from "framer-motion";

interface CursorProps {
    className?: string;
    style?: any;
    cursorWidth?: number;
    cursorHeight?: number;
    xOffset?: any;
    yOffset?: any;
    children?: React.ReactNode;
}

const Cursor = ({
    className,
    style,
    xOffset,
    yOffset,
    children,
}: CursorProps) => {
    const { x, y } = useMousePosition();

    // const lerp = (start: number, end: number, amt: number) => {
    //     return (1 - amt) * start + amt * end;
    // };

    if (x === 0 || y === 0) {
        return null; // Render nothing when xPos and yPos is 0
    }

    return (
        <motion.div
            initial={{
                scale: 0,
                x: xOffset,
                y: yOffset,
            }}
            animate={{
                scale: 1,
                transition: {
                    duration: 0.3,
                },
            }}
            transition={{}}
            exit={{ scale: 0 }}
            style={{
                left: x,
                top: y,
                ...style,
            }}
            className={`cursor ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Cursor;
