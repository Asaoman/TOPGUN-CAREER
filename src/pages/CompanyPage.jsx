import React from 'react';
import Background from './components/Background';
import SmoothScroll from './components/SmoothScroll';
import CompanyHero from './components/CompanyHero';
import SocialProof from './components/SocialProof';
import CompanyBenefits from './components/CompanyBenefits';
import CompanyPricing from './components/CompanyPricing';
import CompanyContact from './components/CompanyContact';

const CompanyPage = () => {
    return (
        <SmoothScroll>
            <Background />
            <div className="relative z-10">
                <CompanyHero />
                <SocialProof />
                <CompanyBenefits />
                <CompanyPricing />
                <CompanyContact />
            </div>
        </SmoothScroll>
    );
};

export default CompanyPage;
