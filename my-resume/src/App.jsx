import React from 'react';

const Portfolio = () => {
  return (
    <div className="bg-[#FDFBF7] text-stone-600 min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900 scroll-smooth">
      
      {/* STICKY TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-stone-900 tracking-tight hover:text-blue-600 transition-colors">
            YMT.
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="#experience" className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-blue-600 transition-colors">01. Experience</a>
            <a href="#projects" className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-blue-600 transition-colors">02. Projects</a>
            <a href="#education" className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-blue-600 transition-colors">03. Education</a>
          </nav>
          {/* Mobile Menu Button (Optional integration) */}
          <button className="md:hidden text-stone-900 font-bold text-sm uppercase tracking-wider">
            Menu
          </button>
        </div>
      </header>

      {/* HERO / INTRO SECTION */}
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center">
        <img 
          src="/profile.jpg" 
          alt="Yong Man Ting" 
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-8 border-4 border-white shadow-md object-cover" 
        />
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-stone-900 mb-4">
          Yong Man Ting
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-6">
          Business Artificial Intelligence Systems
        </h2>
        <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-stone-500 mb-10">
          Building intuitive digital platforms, AI-powered solutions, and data-driven business strategies. Based in Singapore.
        </p>

        {/* Contact Badges */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-stone-600">
          <a href="mailto:yongmanting@gmail.com" className="flex items-center bg-white border border-stone-200 px-4 py-2 rounded-full hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm">
            <span className="mr-2">✉</span> yongmanting@gmail.com
          </a>
          <span className="flex items-center bg-white border border-stone-200 px-4 py-2 rounded-full shadow-sm">
            <span className="mr-2">☎</span> +65 8333 9559
          </span>
          <a href="https://www.linkedin.com/in/manting-yong/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-sm">
            <span className="font-bold mr-1">in</span> LinkedIn
          </a>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-4xl mx-auto px-6 pb-32 space-y-24">
        
        {/* EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-32">
          <h3 className="text-3xl font-bold text-stone-900 mb-10 flex items-center border-b border-stone-200 pb-4">
            <span className="text-stone-300 mr-4 font-light">01.</span> Experience
          </h3>
          
          <div className="space-y-8">
            {/* Job 1 */}
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-stone-900">Minecraft Facilitator</h4>
                  <h5 className="text-blue-600 font-medium mt-1">Invictus International School</h5>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-3 py-1 rounded-full w-fit mt-3 sm:mt-0">Sep 2025 - Present</span>
              </div>
              <p className="text-base text-stone-600 leading-relaxed">
                Conduct engaging Scratch game design simulations for students aged 7-12 to foster creativity and coding. Incorporate interactive, hands-on activities to trigger students' problem-solving abilities.
              </p>
            </div>

            {/* Job 2 */}
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-stone-900">R&D Engineer Intern</h4>
                  <h5 className="text-blue-600 font-medium mt-1">Government Technology (GovTech)</h5>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-3 py-1 rounded-full w-fit mt-3 sm:mt-0">Apr 2024 - Mar 2025</span>
              </div>
              <p className="text-base text-stone-600 leading-relaxed">
                Engineered an AI-powered Proof of Concept utilizing Retrieval Augmented Generation (RAG) to accelerate Singapore's building regulatory approval process. Bridged technical capabilities with operational needs by integrating real-time knowledge bases.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-32">
          <h3 className="text-3xl font-bold text-stone-900 mb-10 flex items-center border-b border-stone-200 pb-4">
            <span className="text-stone-300 mr-4 font-light">02.</span> Projects & Hackathons
          </h3>
          
          <div className="grid grid-cols-1 gap-10">
            
            {/* 1. GOPARK */}
            <div className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-5 py-2 uppercase tracking-wider rounded-bl-xl shadow-sm">
                Active Project
              </div>
              
              <h4 className="text-2xl font-bold text-stone-900 mb-2 mt-4 md:mt-0">goPark: Smart Parking Discovery</h4>
              <p className="text-sm font-bold text-blue-600 mb-5 uppercase tracking-wide">NUS Orbital (Apollo 11) • Team 6742 • 2026</p>
              <p className="text-base text-stone-600 mb-6 leading-relaxed">
                Engineered a full-stack smart parking application to solve drastic price variances and "carpark full" frustrations for Singaporean drivers. Integrated OneMap SG for natural language landmark routing and HDB/LTA APIs for live availability tracking. Developed with a dynamic costing algorithm to instantly calculate the absolute cheapest parking options based on arrival time, duration, and hidden flat-rate rules.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Express.js', 'PostgreSQL', 'Docker', 'Leaflet', 'REST API'].map(tech => (
                  <span key={tech} className="bg-stone-100 text-stone-600 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">{tech}</span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 pt-6 border-t border-stone-100 w-full">
                <a href="/gopark-poster.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-200 text-sm font-bold py-2.5 px-6 rounded-xl transition-colors">
                  View Architecture Poster
                </a>
                <a href="/gopark-video.mp4" target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 hover:bg-stone-800 text-white shadow-md text-sm font-bold py-2.5 px-6 rounded-xl transition-colors flex items-center w-fit">
                  <span className="mr-2">▶</span> Watch Pitch Video
                </a>
              </div>
            </div>

            {/* 2. PROPIFY BEIJING */}
            <div className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all">
              <h4 className="text-2xl font-bold text-stone-900 mb-2">Propify: Housing Market Analysis</h4>
              <p className="text-sm font-bold text-blue-600 mb-5 uppercase tracking-wide">Data Exploration (Group 22) • Apr 2026</p>
              <p className="text-base text-stone-600 mb-8 leading-relaxed">
                Conducted a comprehensive analysis of 2011-2017 Beijing property data to identify high-value investment opportunities. Uncovered insights into market seasonality (identifying optimal buying windows in June and selling in September) and location-based subway premiums to pinpoint the "Value Sweet Spot" in districts like Changping.
              </p>
              <div className="flex flex-wrap gap-4 pt-6 border-t border-stone-100 w-full">
                <a href="/propify-analysis.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 hover:bg-stone-800 text-white shadow-md text-sm font-bold py-2.5 px-6 rounded-xl transition-colors">
                  View Analysis Deck
                </a>
              </div>
            </div>

            {/* 3. CATALYST X */}
            <div className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all">
              <h4 className="text-2xl font-bold text-stone-900 mb-2">CatalystX: SYMBiosis SG</h4>
              <p className="text-sm font-bold text-blue-600 mb-5 uppercase tracking-wide">Sustainability Innovation • 2025</p>
              <p className="text-base text-stone-600 mb-8 leading-relaxed">
                Tackled the challenge of catalyzing large-scale regeneration of industrial systems. Designed a hybrid digital brokerage platform equipped with a confidential bidding engine to transform APAC industrial waste into certified, profitable, and traceable materials.
              </p>
              <div className="flex flex-wrap gap-4 pt-6 border-t border-stone-100 w-full">
                <a href="/catalystx-deck.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 hover:bg-stone-800 text-white shadow-md text-sm font-bold py-2.5 px-6 rounded-xl transition-colors">
                  View Pitch Deck
                </a>
                <a href="/catalystx-certificate.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-200 text-sm font-bold py-2.5 px-6 rounded-xl transition-colors">
                  View Certificate
                </a>
              </div>
            </div>

            {/* 4. GGEF SDG HACKATHON */}
            <div className="p-8 md:p-10 rounded-2xl bg-orange-50/50 border border-orange-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-5 py-2 uppercase tracking-wider rounded-bl-xl shadow-sm">
                1st Runner Up
              </div>
              <h4 className="text-2xl font-bold text-stone-900 mb-2 mt-4 md:mt-0">GGEF SDG Open Hack!</h4>
              <p className="text-sm font-bold text-orange-600 mb-5 uppercase tracking-wide">NUS Campus & Open Geneva Level • Sep 2025</p>
              <p className="text-base text-stone-700 mb-8 leading-relaxed">
                Pitched a business case for an AI-optimized welding sequence tool designed to reduce severe manufacturing delays in shipyards. Recognized as 1st Runner Up at the NUS-level SDG Hackathon and advanced to participate in the regional Open Geneva level.
              </p>
              <div className="flex flex-wrap gap-4 pt-6 border-t border-orange-200/60 w-full">
                <a href="/sdg-nus-certificate.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-600 hover:bg-orange-700 text-white shadow-md text-sm font-bold py-2.5 px-6 rounded-xl transition-colors">
                  Campus Award
                </a>
                <a href="/sdg-open-certificate.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-white hover:bg-orange-50 text-orange-800 border-2 border-orange-200 text-sm font-bold py-2.5 px-6 rounded-xl transition-colors">
                  Open Certificate
                </a>
              </div>
            </div>

            {/* 5. SINGLIFE */}
            <div className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all">
              <h4 className="text-2xl font-bold text-stone-900 mb-2">Singlife Poly-FinTech: G.A.I</h4>
              <p className="text-sm font-bold text-blue-600 mb-5 uppercase tracking-wide">Team Auraboros • Aug 2023 - Oct 2023</p>
              <p className="text-base text-stone-600 mb-6 leading-relaxed">
                Developed a Generative AI Chatbot utilizing Large Language Models, Llama Index, Langchain, and React to enhance customer engagement. Designed to help customers overcome information overload and assist with product discovery.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Generative AI', 'LlamaIndex', 'Langchain', 'React'].map(tech => (
                  <span key={tech} className="bg-stone-100 text-stone-600 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">{tech}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-6 border-t border-stone-100 w-full">
                <a href="/singlife-presentation.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 hover:bg-stone-800 text-white shadow-md text-sm font-bold py-2.5 px-6 rounded-xl transition-colors">
                  View Pitch Deck
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="scroll-mt-32">
          <h3 className="text-3xl font-bold text-stone-900 mb-10 flex items-center border-b border-stone-200 pb-4">
            <span className="text-stone-300 mr-4 font-light">03.</span> Education & Arsenal
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 block">Expected May 2029</span>
              <h4 className="text-xl font-bold text-stone-900 mb-2">National University of Singapore</h4>
              <p className="text-blue-600 font-semibold mb-1">Bachelor of Computing</p>
              <p className="text-sm text-stone-500">Business Artificial Intelligence Systems</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 block">Graduated Apr 2025</span>
              <h4 className="text-xl font-bold text-stone-900 mb-2">Temasek Polytechnic</h4>
              <p className="text-blue-600 font-semibold mb-1">Diploma in Applied AI</p>
              <p className="text-sm text-stone-500">GPA 3.71 • Edusave Merit Bursary</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'Java', 'JavaScript', 'TypeScript', 'React', 'HTML/CSS', 'MySQL', 'Data Analysis', 'Generative AI', 'Langchain', 'LlamaIndex'].map(skill => (
              <span key={skill} className="bg-white text-stone-800 border border-stone-200 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-stone-200 bg-[#F5F4F0] py-8 text-center">
        <p className="text-sm text-stone-500 font-medium">© 2026 Yong Man Ting. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Portfolio;