import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const CompanyContact = () => {
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // TODO: Implement actual form submission
        alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-32 bg-black relative z-10">
            <div className="container max-w-3xl">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                        お問い合わせ
                    </h2>
                    <p className="text-gray-500 font-mono">導入のご相談はこちら</p>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2">
                            会社名 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-accent-core)] transition-colors"
                            placeholder="株式会社〇〇"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2">
                            担当者名 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-accent-core)] transition-colors"
                            placeholder="山田 太郎"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2">
                            メールアドレス <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-accent-core)] transition-colors"
                            placeholder="example@company.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2">
                            電話番号
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-accent-core)] transition-colors"
                            placeholder="03-1234-5678"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2">
                            相談内容
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-accent-core)] transition-colors resize-none"
                            placeholder="ご相談内容をご記入ください"
                        />
                    </div>

                    <div className="flex justify-center pt-4">
                        <MagneticButton variant="primary" type="submit">
                            送信する
                        </MagneticButton>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default CompanyContact;
