import React from 'react';

const Hero = ({ t }) => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center">
      <img 
        src="/profile.jpg" 
        alt="Profile" 
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-8 border-4 border-white shadow-md object-cover" 
      />
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-stone-900 mb-4">
        {t.sidebar.name}
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-6">
        {t.sidebar.role}
      </h2>
      <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-stone-500 mb-10">
        {t.sidebar.bio}
      </p>

      <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-stone-600">
        <a href="mailto:yongmanting@gmail.com" className="flex items-center bg-white border border-stone-200 px-4 py-2 rounded-full hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm">
          <span className="mr-2">✉</span> yongmanting@gmail.com
        </a>
        <span className="flex items-center bg-white border border-stone-200 px-4 py-2 rounded-full shadow-sm">
          <span className="mr-2">☎</span> +65 8333 9559
        </span>
        <a href="https://www.linkedin.com/in/manting-yong/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-sm">
          <span className="font-bold mr-1">in</span> {t.sidebar.linkedin}
        </a>
      </div>
    </section>
  );
};

export default Hero;