import React, { useState } from 'react';
import { portfolioData } from './data/content';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';

const App = () => {
  const [lang, setLang] = useState('en');
  const t = portfolioData[lang];

  const toggleLanguage = () => {
    setLang(prevLang => prevLang === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="bg-[#FDFBF7] text-stone-600 min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900 scroll-smooth">
      <TopBar t={t} toggleLanguage={toggleLanguage} currentLang={lang} />
      <Hero t={t} />
      
      <main className="max-w-4xl mx-auto px-6 pb-32 space-y-24">
        <Experience t={t} />
        <Projects t={t} />
        <Education t={t} />
      </main>

      <footer className="border-t border-stone-200 bg-[#F5F4F0] py-8 text-center">
        <p className="text-sm text-stone-500 font-medium">© 2026 Yong Man Ting. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;