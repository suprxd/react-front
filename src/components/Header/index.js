import React from 'react';
import { HeaderNavigation } from './Navigation';
import { HeroSection } from './HeroSection';

export const Header = () => {
    return (
        <header className="header-area">
            <HeaderNavigation />
            <HeroSection />
        </header>
    )
}