"use client";

// Style
import "@styles/Color.css";
import { useEffect } from "react";

const Color = ({ image, color, setColor }) => {
    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    }, []);

    const openEyeDropper = async () => {
        let eyeDropper = new EyeDropper();
        const { sRGBHex } = await eyeDropper.open();
        setColor(sRGBHex);
    };

    const handleCopyColor = async () => {
        await navigator.clipboard.writeText(color);
        alert(`Copied ${color} to clipboard!`);
    };

    return (
        <div className="wrapper">
            <div className="sidebar">
                <h1 className="sidebar-heading">Pick color from image</h1>

                <div className="form-section">
                    <p>1. Pick color</p>
                    <button
                        className="open-picker-button"
                        onClick={() => {
                            image && openEyeDropper();
                        }}
                    >
                        Open Eyedropper
                    </button>
                </div>

                <div className="form-section">
                    <p>2. View selected</p>
                    <button
                        className="selected-color"
                        style={{ background: color }}
                        onClick={handleCopyColor}
                    >
                        <span>{color}</span>
                    </button>
                </div>
            </div>

            <div className="content">
                {image ? (
                    <>
                        <img src={image} alt="Working image" />
                        <div
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        />
                    </>
                ) : (
                    <div className="placeholder">
                        <span>Upload an image to get started</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Color;
