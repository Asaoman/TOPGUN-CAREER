import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { FaUsers, FaYenSign, FaBullhorn } from 'react-icons/fa';

const CompanyBenefits = () => {
    const benefits = [
        {
            icon: <FaUsers />,
            title: "質の高い母集団",
            description: "Top 1%の学生のみ。実績ベースの評価で、本当に優秀な人材と出会える。",
            details: [
                "GitHub、インターン、プロジェクト実績を可視化",
                "書類選考の手間を大幅削減",
                "ミスマッチを防ぐ精度の高いマッチング"
            ]
        },
        {
            icon: <FaYenSign />,
            title: "採用コストの削減",
            description: "成果報酬型。採用決定時のみ課金。無駄なコストを一切排除。",
            details: [
                "初期費用: 0円",
                "月額費用: 0円",
                "早期退職時の一部返金保証"
            ]
        },
        {
            icon: <FaBullhorn />,
            title: "ブランディング効果",
            description: "Draft Eventでの露出、学生コミュニティへの認知向上。",
            details: [
                "経営者が直接学生にアピール",
                "YouTubeでの公開による拡散",
                "採用広報としての二次利用可能"
            ]
        }
    ];

    return (
        <section className="py-32 bg-black relative z-10">
            <div className="container">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                        Why TOP GUN CAREER
                    </h2>
                    <p className="text-gray-500 font-mono">3つの価値提案</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <SpotlightCard key={index} className="p-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="h-full flex flex-col"
                            >
                                <div className="text-4xl text-white/20 mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                                <p className="text-gray-400 mb-6">{benefit.description}</p>

                                <ul className="space-y-3 mt-auto">
                                    {benefit.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                                            <span className="text-[var(--color-accent-core)] mt-1">✓</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyBenefits;
