import React from 'react';
import israelImg from '../assets/israel.png';
import noahImg from '../assets/noah.png';

const team = [
  {
    name: 'Israel Bain',
    role: 'Founder & ML Lead',
    image: israelImg,
    bio: 'Israel builds the models, the validation framework and the deliverables. Computer science at Dalhousie University, and author of the methodology paper being submitted to Natural Resources Research.',
  },
  {
    name: 'Noah Bain',
    role: 'Technical Advisor, EIT',
    image: noahImg,
    bio: 'Noah advises on mining industry fit and operations, with an engineering background spanning feasibility, material handling and process development.',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-zinc-500 text-sm font-medium tracking-wide uppercase mb-4 text-center">
          Team
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-16 text-center">
          Built by people who know the ground
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden border-2 border-white/[0.08]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-zinc-500 text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
