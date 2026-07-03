import React from 'react';

const Experience = ({ t }) => {
  return (
    <section id="experience" className="scroll-mt-32">
      <h3 className="text-3xl font-bold text-stone-900 mb-10 flex items-center border-b border-stone-200 pb-4">
        <span className="text-stone-300 mr-4 font-light">01.</span> {t.experience.title}
      </h3>
      
      <div className="space-y-8">
        {t.experience.jobs.map((job) => (
          <div key={job.id} className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <div>
                <h4 className="text-xl font-bold text-stone-900">{job.title}</h4>
                <h5 className="text-blue-600 font-medium mt-1">{job.company}</h5>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-3 py-1 rounded-full w-fit mt-3 sm:mt-0">
                {job.date}
              </span>
            </div>
            <p className="text-base text-stone-600 leading-relaxed">{job.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;