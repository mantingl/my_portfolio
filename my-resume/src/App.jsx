import React, { useEffect, useState } from 'react';
import { content } from './data/content';
import { translateContent } from './i18n/translate';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';

const App = () => {
  const [lang, setLang] = useState('en');
  const [t, setT] = useState(content);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = async () => {
    if (lang !== 'en') {
      setLang('en');
      setT(content);
      return;
    }

    setIsTranslating(true);
    try {
      setT(await translateContent(content, 'zh-CN'));
      setLang('zh-CN');
    } catch (err) {
      console.error(err);
      alert('Sorry, translation is unavailable right now.');
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div className="bg-[#FDFBF7] text-stone-600 min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900 scroll-smooth">
      <TopBar t={t} toggleLanguage={toggleLanguage} currentLang={lang} isTranslating={isTranslating} />
      <Hero t={t} />

      <main className={`max-w-4xl mx-auto px-6 pb-32 space-y-24 transition-opacity ${isTranslating ? 'opacity-50' : ''}`}>
        <Experience t={t} />
        <Projects section={t.projects} id="projects" number="02" />
        <Projects section={t.hackathons} id="hackathons" number="03" />
        <Education t={t} />
      </main>

      <footer className="border-t border-stone-200 bg-[#F5F4F0] py-8 text-center">
        <p className="text-sm text-stone-500 font-medium">© 2026 Yong Man Ting. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;
