import React from 'react';

const Team = () => {
  const team = [
    {
      name: "Israel Bain",
      role: "Co-Founder & Chief Technology Officer",
      specialties: ["Software Architecture", "Machine Learning", "AI Development", "Geospatial Analytics"],
      bio: "Leading the development of Northern AI's flagship mineral exploration ML platform. Expert in full-stack development, cloud architecture, and cutting-edge AI solutions.",
      expertise: [
        "AI/ML Model Development",
        "Full-Stack Engineering",
        "Cloud Infrastructure",
        "Geospatial Data Science"
      ],
      image: "👨‍💻"
    },
    {
      name: "Noah Bain",
      role: "Co-Founder & Chief Engineering Officer",
      specialties: ["Mechanical Design", "System Integration", "Thermal Analysis", "Prototyping"],
      bio: "Bringing mechanical engineering excellence to Northern AI. Specializes in complex system design, thermal analysis, and innovative engineering solutions.",
      expertise: [
        "CAD Design & Modeling",
        "Thermal Analysis",
        "System Integration",
        "Engineering Prototyping"
      ],
      image: "⚙️"
    }
  ];

  return (
    <section id="team" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-northern-green blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block glass px-6 py-2 rounded-full mb-6">
            <span className="text-northern-green-light font-semibold">Indigenous Excellence</span>
          </div>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Indigenous-owned and operated. Combining deep technical expertise with a commitment to innovation and excellence.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="glass p-8 rounded-3xl glass-hover"
            >
              {/* Avatar */}
              <div className="flex items-start space-x-6 mb-6">
                <div className="glass p-6 rounded-2xl text-6xl">
                  {member.image}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-northern-green-light font-semibold mb-3">{member.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.slice(0, 2).map((specialty, idx) => (
                      <span key={idx} className="text-xs glass px-3 py-1 rounded-full text-gray-300">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {member.bio}
              </p>

              {/* Expertise */}
              <div>
                <p className="text-sm font-semibold text-gray-400 mb-3">Core Expertise</p>
                <div className="grid grid-cols-2 gap-2">
                  {member.expertise.map((skill, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <svg className="w-4 h-4 mr-2 text-northern-green-light" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company values */}
        <div className="mt-16 glass p-8 rounded-2xl max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-3">Our Values</h3>
            <p className="text-gray-300">Built on a foundation of indigenous excellence and technological innovation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🌲</div>
              <h4 className="font-semibold text-white mb-2">Indigenous Pride</h4>
              <p className="text-sm text-gray-400">Majority indigenous-owned and committed to community growth</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-semibold text-white mb-2">Innovation First</h4>
              <p className="text-sm text-gray-400">Pushing boundaries with cutting-edge technology and solutions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <h4 className="font-semibold text-white mb-2">Client Success</h4>
              <p className="text-sm text-gray-400">Your success is our mission. We deliver results that matter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
