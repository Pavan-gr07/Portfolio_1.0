import Container from "@/components/custom/Container";
import bgImage from "../../assets/img/banner-bg.png";
import photo from "../../assets/pavan-photo1.png";
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Back Developer", "UI/UX Designer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };
    return (
        <div
            className="h-screen bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${bgImage.src})` }}
            id="home"
        >
            <Container>
                <section
                    className="banner w-full min-h-screen flex items-center from-gray-900 to-gray-800 px-6 "
                    id="home"
                >
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        {/* Left Side Content */}
                        <div className="animate__animated animate__fadeIn text-center md:text-left">
                            <span className="text-xl text-purple-500 font-semibold tracking-wider">
                                Welcome to my Portfolio
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mt-3">
                                Hi! I'm Pavan{" "}
                                <span className="text-purple-400">
                                    <span className="wrap">{text}</span>
                                </span>
                            </h1>
                            <p className="text-gray-400 mt-4 max-w-lg">
                                Innovative thinker, eager to build seamless digital experiences. Passionate about crafting intuitive and high-performance web solutions!
                            </p>
                            <button
                                onClick={() => console.log("connect")}
                                className="mt-5 px-6 py-3 text-lg font-bold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition duration-300 flex items-center gap-2  cursor-pointer"
                            >
                                Let’s Connect <ArrowRight />
                            </button>
                        </div>


                        <div className="flex justify-center md:justify-end">
                            <motion.img
                                src={photo.src}
                                alt="Header Img"
                                className="drop-shadow-lg w-auto h-[400px] rounded-full md:h-[400px] lg:h-[600px] object-cover"
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};
