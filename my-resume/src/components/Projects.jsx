import React from 'react';

const Projects = ({ t }) => {
  return (
    <section id="projects" className="scroll-mt-32">
      <h3 className="text-3xl font-bold text-stone-900 mb-10 flex items-center border-b border-stone-200 pb-4">
        <span className="text-stone-300 mr-4 font-light">02.</span> {t.projects.title}
      </h3>
      
      <div className="grid grid-cols-1 gap-10">
        {t.projects.items.map((project) => (
          <div key={project.id} className={`p-8 md:p-10 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden ${project.id === 'sdg' ? 'bg-orange-50/50 border-orange-200' : ''}`}>
            
            {project.id === 'gopark' && (
              <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-5 py-2 uppercase tracking-wider rounded-bl-xl shadow-sm">
                {t.projects.activeBadge}
              </div>
            )}
            {project.id === 'sdg' && (
               <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-5 py-2 uppercase tracking-wider rounded-bl-xl shadow-sm">
                {t.projects.runnerUpBadge}
              </div>
            )}
            
            <h4 className="text-2xl font-bold text-stone-900 mb-2 mt-4 md:mt-0">{project.title}</h4>
            <p className={`text-sm font-bold mb-5 uppercase tracking-wide ${project.id === 'sdg' ? 'text-orange-600' : 'text-blue-600'}`}>
              {project.subtitle}
            </p>
            <p className="text-base text-stone-600 mb-6 leading-relaxed">{project.desc}</p>

            {project.tech && (
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(techItem => (
                  <span key={techItem} className="bg-stone-100 text-stone-600 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">{techItem}</span>
                ))}
              </div>
            )}
            
            {/* Buttons */}
            <div className={`flex flex-wrap gap-4 pt-6 border-t w-full ${project.id === 'sdg' ? 'border-orange-200/60' : 'border-stone-100'}`}>
              {project.links.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={`inline-block text-sm font-bold py-2.5 px-6 rounded-xl transition-colors ${i === 1 ? 'bg-stone-900 hover:bg-stone-800 text-white shadow-md' : 'bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-200'}`}>
                  {link.label}
                </a>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;