import React from 'react';
import { motion } from 'framer-motion';

const CompanyPricing = () => {
    return (
        <section className="py-32 bg-black relative z-10">
            <div className="container max-w-4xl">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                        料金体系
                    </h2>
                    <p className="text-gray-500 font-mono">完全成果報酬型</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-b from-[#1a1a1a] to-black border border-white/20 rounded-3xl p-12 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                    <div className="relative z-10">
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="text-center">
                                <div className="text-5xl font-bold mb-2">0円</div>
                                <div className="text-gray-400 text-sm">初期費用</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold mb-2">0円</div>
                                <div className="text-gray-400 text-sm">月額費用</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                    成果報酬
                                </div>
                                <div className="text-gray-400 text-sm">採用決定時のみ</div>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-8">
                            <h3 className="text-xl font-bold mb-4">料金に含まれるもの</h3>
                            <ul className="grid md:grid-cols-2 gap-4">
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--color-accent-core)]">✓</span>
                                    <span className="text-gray-400">プロフィール閲覧無制限</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--color-accent-core)]">✓</span>
                                    <span className="text-gray-400">直接オファー送信</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--color-accent-core)]">✓</span>
                                    <span className="text-gray-400">Draft Event参加権</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--color-accent-core)]">✓</span>
                                    <span className="text-gray-400">採用ブランディング支援</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--color-accent-core)]">✓</span>
                                    <span className="text-gray-400">早期退職時の一部返金</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--color-accent-core)]">✓</span>
                                    <span className="text-gray-400">専任サポート</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                            <p className="text-sm text-gray-400">
                                ※ 成果報酬の詳細金額は、採用ポジションや条件により異なります。<br />
                                お気軽にお問い合わせください。
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CompanyPricing;
