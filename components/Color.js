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
                    {"EyeDropper" in window ? (
                        <button
                            className="open-picker-button"
                            onClick={() => {
                                image && openEyeDropper();
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17.542 13.147l-7.455-6.667 1.334-1.49c.822.736 2.087.666 2.822-.159l3.503-3.831c.593-.663 1.414-1 2.238-1 1.666 0 3.016 1.358 3.016 2.996 0 .723-.271 1.435-.78 2.005l-3.503 3.83c-.735.824-.666 2.087.158 2.825l-1.333 1.491zm-4.314-1.175l-7.791 8.65c-.314.352-1.322.323-1.853.557.172-.554.048-1.538.362-1.89l7.791-8.651-1.491-1.333-7.9 8.794c-1.277 1.423-.171 2.261-1.149 4.052-.135.244-.197.48-.197.698 0 .661.54 1.151 1.141 1.151.241 0 .492-.079.724-.256 1.733-1.332 2.644-.184 3.954-1.647l7.9-8.792-1.491-1.333z" />
                            </svg>
                        </button>
                    ) : (
                        <span className="eyedropper-not-supported">
                            Feature not supported in this browser
                        </span>
                    )}
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
