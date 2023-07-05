import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Aymvn - Color Picker",
    description:
        "A simple color picker, Upload an image and pick a color from it",
    tags: ["Color Picker", "Image Picker", "Color", "Image", "Picker"],
    author: "Aymvn",
    url: "https://aymvn.tech",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
