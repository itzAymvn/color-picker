"use client";

// React imports
import { useState, useEffect } from "react";

// Components
import ImagePicker from "@/components/ImagePicker";
import ColorPicker from "@/components/ColorPicker";

export default function Home() {
    // States
    const [color, setColor] = useState("#000000");
    const [image, setImage] = useState(null);

    const [showImagePicker, setShowImagePicker] = useState(true);
    const [showColorPicker, setShowColorPicker] = useState(false);

    // Effects
    useEffect(() => {
        if (image) {
            setShowColorPicker(true);
        }
    }, [image]);

    useEffect(() => {
        let timer;
        if (showColorPicker) {
            timer = setTimeout(() => {
                setShowImagePicker(false);
            }, 500);
        }

        return () => clearTimeout(timer);
    }, [showColorPicker]);

    return (
        <main>
            {showImagePicker && <ImagePicker setImage={setImage} />}
            {showColorPicker && (
                <ColorPicker image={image} color={color} setColor={setColor} />
            )}
        </main>
    );
}
