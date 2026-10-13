import React from 'react';

const TopBar = ({ t, toggleLanguage, currentLang, isTranslating }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-stone-900 tracking-tight hover:text-blue-600 transition-colors">
          YMT.
        </a>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <a href="#experience" className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-blue-600 transition-colors">{t.sidebar.navExp}</a>
            <a href="#projects" className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-blue-600 transition-colors">{t.sidebar.navProj}</a>
            <a href="#hackathons" className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-blue-600 transition-colors">{t.sidebar.navHack}</a>
            <a href="#education" className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-blue-600 transition-colors">{t.sidebar.navEdu}</a>
          </nav>
          
          <button 
            onClick={toggleLanguage}
            disabled={isTranslating}
            className="bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-bold px-4 py-2 rounded-full transition-colors disabled:opacity-60 disabled:cursor-wait"
          >
            {isTranslating ? 'Translating…' : currentLang === 'en' ? '🇨🇳 Switch to 中文' : '🇬🇧 Switch to English'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;