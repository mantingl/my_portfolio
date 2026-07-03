import React from 'react';

const Education = ({ t }) => {
  return (
    <section id="education" className="scroll-mt-32">
      <h3 className="text-3xl font-bold text-stone-900 mb-10 flex items-center border-b border-stone-200 pb-4">
        <span className="text-stone-300 mr-4 font-light">03.</span> {t.education.title}
      </h3>
      
      <div className="grid sm:grid-cols-2 gap-8 mb-12">
        {t.education.degrees.map((edu, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 block">
              {edu.date}
            </span>
            <h4 className="text-xl font-bold text-stone-900 mb-2">{edu.school}</h4>
            <p className="text-blue-600 font-semibold mb-1">{edu.degree}</p>
            <p className="text-sm text-stone-500">{edu.detail}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {t.education.skills.map((skill) => (
          <span key={skill} className="bg-white text-stone-800 border border-stone-200 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Education;