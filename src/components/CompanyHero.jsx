import React from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import MagneticButton from './MagneticButton';
import { FaArrowRight } from 'react-icons/fa';

const CompanyHero = () => {
    const textRef = React.useRef(null);

    React.useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tl.to(textRef.current, {
            backgroundPosition: "200% center",
            duration: 5,
            ease: "linear",
        });
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="mb-12"
                >
                    <h1
                        className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white bg-[length:200%_auto] pb-4"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                        規格外の学生と、<br className="md:hidden" />出会う。
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mt-8">
                        TOP 1%の才能に、直接アクセス
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <MagneticButton variant="primary">
                        資料請求 <FaArrowRight />
                    </MagneticButton>

                    <MagneticButton variant="secondary">
                        導入相談
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    );
};

export default CompanyHero;
