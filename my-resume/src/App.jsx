import React from 'react';

const ModernSidebarPortfolio = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FDFBF7] text-stone-600 font-sans text-left">
      
      {/* Sticky Sidebar - The "Introduction" Panel */}
      <aside className="w-full md:w-1/3 lg:w-1/4 bg-[#F5F4F0] p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-200 md:sticky md:top-0 md:h-screen z-10 overflow-y-auto">
        <div>
          {/* Profile Picture Placeholder */}
          <div className="mb-6">
            <img 
              src="/profile.jpg" 
              alt="Yong Man Ting" 
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>

          {/* Name & Title */}
          <h1 className="text-3xl xl:text-4xl font-bold text-stone-900 mb-2 whitespace-nowrap tracking-tight">Yong Man Ting</h1>
          <h2 className="text-lg text-blue-600 font-semibold mb-6">Business AI Systems</h2>
          <p className="text-sm text-stone-500 leading-relaxed mb-8">
            Building intuitive digital platforms, AI-powered solutions, and data-driven business strategies. Based in Singapore.
          </p>
          
          {/* Navigation */}
          <nav className="hidden md:flex flex-col space-y-5">
            <a href="#experience" className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-blue-600 transition-colors">01. Experience</a>
            <a href="#projects" className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-blue-600 transition-colors">02. Projects & Hackathons</a>
            <a href="#education" className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-blue-600 transition-colors">03. Education</a>
          </nav>
        </div>

        {/* Contact & Socials */}
        <div className="mt-10 text-sm flex flex-col space-y-3 font-medium text-stone-500">
          <a href="mailto:yongmanting@gmail.com" className="hover:text-blue-600 transition-colors flex items-center">
             <span className="mr-2">✉</span> yongmanting@gmail.com
          </a>
          <span className="flex items-center"><span className="mr-2">☎</span> +65 8333 9559</span>
          <a href="https://www.linkedin.com/in/manting-yong/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center text-blue-500">
             <span className="mr-2">in</span> LinkedIn Profile
          </a>
        </div>
      </aside>

      {/* Main Scrolling Content - Single Column Layout */}
      <main className="w-full md:w-2/3 lg:w-3/4 p-8 md:p-12 lg:p-24 space-y-24 max-w-5xl">
        
        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <h3 className="text-3xl font-bold text-stone-900 mb-10 flex items-center border-b border-stone-200 pb-4">
            <span className="text-stone-300 mr-4 font-light">01.</span> Experience
          </h3>
          
          <div className="space-y-12">
            <div className="group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="text-xl font-bold text-stone-800">Minecraft Facilitator</h4>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 bg-stone-200 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">Sep 2025 - Present</span>
              </div>
              <p className="text-lg font-semibold text-blue-600 mb-3">Invictus International School</p>
              <p className="text-base text-stone-600 leading-relaxed max-w-3xl">
                Conduct engaging Scratch game design simulations for students aged 7-12 to foster creativity and coding. Incorporate interactive, hands-on activities to trigger students' problem-solving abilities.
              </p>
            </div>

            <div className="group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="text-xl font-bold text-stone-800">R&D Engineer Intern</h4>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 bg-stone-200 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">Apr 2024 - Mar 2025</span>
              </div>
              <p className="text-lg font-semibold text-blue-600 mb-3">Government Technology (GovTech)</p>
              <p className="text-base text-stone-600 leading-relaxed max-w-3xl">
                Engineered an AI-powered Proof of Concept utilizing Retrieval Augmented Generation (RAG) to accelerate Singapore's building regulatory approval process. Bridged technical capabilities with operational needs by integrating real-time knowledge bases.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <h3 className="text-3xl font-bold text-stone-900 mb-10 flex items-center border-b border-stone-200 pb-4">
            <span className="text-stone-300 mr-4 font-light">02.</span> Projects & Hackathons
          </h3>
          
          {/* Changed to grid-cols-1 for a focused, single-column reading experience */}
          <div className="grid grid-cols-1 gap-12">
            
            {/* 1. GOPARK */}
            <div className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-lg transition-all flex flex-col relative overflow-hidden">
              {/* Vibrant Yellow Badge */}
              <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-5 py-2 uppercase tracking-wider rounded-bl-xl shadow-sm">
                Active Project
              </div>
              
              <h4 className="text-2xl font-bold text-stone-900 mb-2 mt-4 md:mt-0">goPark: Smart Parking Discovery</h4>
              <p className="text-sm font-bold text-blue-600 mb-5 uppercase tracking-wide">NUS Orbital (Apollo 11) • Team 6742 • 2026</p>
              <p className="text-base text-stone-600 mb-8 leading-relaxed max-w-3xl">
                Engineered a full-stack smart parking application to solve drastic price variances and "carpark full" frustrations for Singaporean drivers. Integrated OneMap SG for natural language landmark routing and HDB/LTA APIs for live availability tracking. Developed with a dynamic costing algorithm to instantly calculate the absolute cheapest parking options based on arrival time, duration, and hidden flat-rate rules.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Express.js', 'PostgreSQL', 'Docker', 'Leaflet', 'REST API'].map(tech => (
                  <span key={tech} className="bg-stone-100 text-stone-600 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">{tech}</span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-stone-100 w-full">
                <a href="/gopark-poster.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-200 text-sm font-bold py-2.5 px-6 rounded-xl transition-colors">
                  View Architecture Poster
                </a>
                <a href="/gopark-video.mp4" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white shadow-md text-sm font-bold py-2.5 px-6 rounded-xl transition-colors flex items-center">
                  <span className="mr-2">▶</span> Watch Pitch Video
                </a>
              </div>
            </div>

            {/* 2. PROPIFY BEIJING */}
            <div className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-lg transition-all flex flex-col">
              <h4 className="text-2xl font-bold text-stone-900 mb-2">Propify: Housing Market Analysis</h4>
              <p className="text-sm font-bold text-blue-600 mb-5 uppercase tracking-wide">Data Exploration (Group 22) • Apr 2026</p>
              <p className="text-base text-stone-600 mb-8 leading-relaxed max-w-3xl">
                Conducted a comprehensive analysis of 2011-2017 Beijing property data to identify high-value investment opportunities. Uncovered insights into market seasonality (identifying optimal buying windows in June and selling in September) and location-based subway premiums to pinpoint the "Value Sweet Spot" in districts like Changping.
              </p>
              <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-stone-100 w-full">
                <a href="/propify-analysis.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 hover:bg-stone-800 text-white shadow-md text-sm font-bold py-2.5 px-6 rounded-xl transition-colors">
                  View Analysis Deck
                </a>
              </div>
            </div>

            {/* 3. CATALYST X */}
            <div className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-lg transition-all flex flex-col">
              <h4 className="text-2xl font-bold text-stone-900 mb-2">CatalystX: SYMBiosis SG</h4>
              <p className="text-sm font-bold text-blue-600 mb-5 uppercase tracking-wide">Sustainability Innovation • 2025</p>
              <p className="text-base text-stone-600 mb-8 leading-relaxed max-w-3xl">
                Tackled the challenge of catalyzing large-scale regeneration of industrial systems. Designed a hybrid digital brokerage platform equipped with a confidential bidding engine to transform APAC industrial waste into certified, profitable, and traceable materials.
              </p>
              <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-stone-100 w-full">
                <a href="/catalystx-deck.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 hover:bg-stone-800 text-white shadow-md text-sm font-bold py-2.5 px-6 rounded-xl transition-colors">
                  View Pitch Deck
                </a>
                <a href="/catalystx-certificate.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-200 text-sm font-bold py-2.5 px-6 rounded-xl transition-colors">
                  View Certificate
                </a>
              </div>
            </div>

            {/* 4. GGEF SDG HACKATHON */}
            <div className="p-8 md:p-10 rounded-2xl bg-orange-50/50 border border-orange-200 shadow-sm hover:shadow-lg transition-all flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-5 py-2 uppercase tracking-wider rounded-bl-xl shadow-sm">
                1st Runner Up
              </div>
              <h4 className="text-2xl font-bold text-stone-900 mb-2 mt-4 md:mt-0">GGEF SDG Open Hack!</h4>
              <p className="text-sm font-bold text-orange-600 mb-5 uppercase tracking-wide">NUS Campus & Open Geneva Level • Sep 2025</p>
              <p className="text-base text-stone-700 mb-8 leading-relaxed max-w-3xl">
                Pitched a business case for an AI-optimized welding sequence tool designed to reduce severe manufacturing delays in shipyards. Recognized as 1st Runner Up at the NUS-level SDG Hackathon and advanced to participate in the regional Open Geneva level.
              </p>
              <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-orange-200/60 w-full">
                <a href="/sdg-nus-certificate.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-600 hover:bg-orange-700 text-white shadow-md text-sm font-bold py-2.5 px-6 rounded-xl transition-colors">
                  Campus Award
                </a>
                <a href="/sdg-open-certificate.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-white hover:bg-orange-50 text-orange-800 border-2 border-orange-200 text-sm font-bold py-2.5 px-6 rounded-xl transition-colors">
                  Open Certificate
                </a>
              </div>
            </div>

            {/* 5. SINGLIFE */}
            <div className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-lg transition-all flex flex-col">
              <h4 className="text-2xl font-bold text-stone-900 mb-2">Singlife Poly-FinTech: G.A.I</h4>
              <p className="text-sm font-bold text-blue-600 mb-5 uppercase tracking-wide">Team Auraboros • Aug 2023 - Oct 2023</p>
              <p className="text-base text-stone-600 mb-8 leading-relaxed max-w-3xl">
                Developed a Generative AI Chatbot utilizing Large Language Models, Llama Index, Langchain, and React to enhance customer engagement. Designed to help customers overcome information overload and assist with product discovery.
              </p>
              <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-stone-100 w-full">
                <a href="/singlife-presentation.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 hover:bg-stone-800 text-white shadow-md text-sm font-bold py-2.5 px-6 rounded-xl transition-colors">
                  View Pitch Deck
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-24 pb-12">
          <h3 className="text-3xl font-bold text-stone-900 mb-10 flex items-center border-b border-stone-200 pb-4">
            <span className="text-stone-300 mr-4 font-light">03.</span> Education & Arsenal
          </h3>
          
          <div className="space-y-8 mb-12">
            <div>
              <h4 className="text-xl font-bold text-stone-800">National University of Singapore</h4>
              <p className="text-blue-600 font-semibold mb-1">Bachelor of Computing, Business Artificial Intelligence Systems</p>
              <p className="text-sm text-stone-500 font-mono">Expected May 2029</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-stone-800">Temasek Polytechnic</h4>
              <p className="text-blue-600 font-semibold mb-1">Diploma in Applied Artificial Intelligence</p>
              <p className="text-sm text-stone-500 font-mono">Graduated Apr 2025 • GPA 3.71 • Edusave Merit Bursary</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {['Python', 'Java', 'JavaScript', 'TypeScript', 'React', 'HTML/CSS', 'MySQL', 'Data Analysis', 'Generative AI', 'Langchain', 'LlamaIndex'].map(skill => (
              <span key={skill} className="bg-white text-stone-800 border-2 border-stone-100 px-4 py-2 rounded-xl text-xs font-bold tracking-wider shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ModernSidebarPortfolio;