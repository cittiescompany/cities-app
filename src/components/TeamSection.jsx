import { useState } from 'react';
import { Mail, Linkedin, Sparkles, X, ChevronRight } from 'lucide-react';
import CEO from '../assets/images/ceo.png';

const teamMembers = [
  {
    id: 1,
    name: 'Peter Adebanjo',
    role: 'CEO & Founder',
    image: CEO,
    email: 'engrkunlea@citiesapp.com',
    linkedin: 'https://www.linkedin.com/in/kunle-adebanjo-mba-303578198/',
    intro:
      'Peter Adebanjo is a technology and finance leader with over 14 years of cross-industry experience spanning core banking infrastructure, enterprise project management, fintech growth, and artificial intelligence.',
    fullIntro:
      "Peter Adebanjo is a technology and finance leader with over 14 years of cross-industry experience spanning core banking infrastructure, enterprise project management, fintech growth, and artificial intelligence. Holding an MBA from Georgia Institute of Technology, a first degree in Electronics & Computer Engineering, and a Certified Scrum Master credential, Peter combines rare technical depth with proven commercial execution across some of Africa's most respected financial institutions and global enterprises.",
    highlights: [
      {
        org: 'Standard Bank',
        title: 'Core Banking Application Consultant',
        detail: "Africa's largest asset bank",
      },
      {
        org: 'Stanbic IBTC Bank',
        title: 'Project Office',
        detail: '7 years leading enterprise-level transformation initiatives',
      },
      {
        org: 'CreditClan',
        title: 'Head of Growth',
        detail: "6 years scaling one of Africa's leading fintech credit platforms",
      },
      {
        org: 'FedEx Express',
        title: 'AI Consultant',
        detail: 'Applied artificial intelligence at global logistics scale',
      },
    ],
    stats: [
      { label: 'Total experience', value: '14+ yrs' },
      { label: 'Sectors', value: 'Banking · Fintech · AI' },
      { label: 'Education', value: 'Georgia Tech MBA' },
    ],
  },
  {
    id: 2,
    name: 'Lola Bee',
    role: 'Technical Co-founder',
    image:
      'https://res.cloudinary.com/daruz/image/upload/v1777756165/1b7f846a-46cc-4a0a-9b8b-5b5131ecd5cd_dit4vl.jpg',
    intro:
      'Lola Bee is a seasoned technology consultant and systems architect with over 10 years of experience delivering enterprise-grade solutions for global clients.',
    fullIntro:
      "Lola Bee is a seasoned technology consultant and systems architect with over 10 years of experience delivering enterprise-grade solutions for global clients. Based in Atlanta, Lola has spent her career at the intersection of business strategy and technology implementation, working with two of the world's most respected consulting firms — Accenture and EY. Her rare combination of Pega-certified architecture expertise, business analysis, and hands-on systems development makes her an exceptional technical co-founder for Cities App.",
    highlightsTitle: 'Career highlights',
    highlights: [
      {
        org: 'Accenture',
        title: 'Consultant',
        detail:
          'Dec 2019 – Present · 6+ years — partners with clients to identify and prioritize business requirements; leads functional testing and delivery',
      },
      {
        org: 'Accenture',
        title: 'Senior Analyst',
        detail:
          'Feb 2018 – Dec 2019 · 2 years — senior business analyst driving enterprise client engagements in Atlanta',
      },
      {
        org: 'EY',
        title: 'Systems Analyst',
        detail:
          'Oct 2016 – Jan 2018 · 1+ year — designed robust systems to close client process gaps; led rigorous testing and defect resolution alongside senior developers',
      },
      {
        org: 'Accenture',
        title: 'Associate Analyst',
        detail:
          'Jul 2014 – Oct 2016 · 2+ years — foundational enterprise consulting and systems work in Atlanta',
      },
    ],
    stats: [
      { label: 'Total experience', value: '10+ yrs' },
      { label: 'Firms', value: 'Accenture · EY' },
      { label: 'Base', value: 'Atlanta, GA' },
      {
        label: 'Credentials',
        value: [
          'Pega Certified System Architect',
          'Pega Certified Business Architect',
          '10+ yrs Enterprise Consulting',
        ],
      },
    ],
    quote:
      'With a decade of enterprise consulting at Accenture and EY and dual Pega architecture certifications, Lola brings the systems thinking and execution discipline to architect Cities App for scale.',
  },
];

function MemberModal({ member, onClose }) {
  const imageSrc = typeof member.image === 'string' ? member.image : member.image?.src ?? member.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-700 rounded-3xl shadow-2xl shadow-blue-900/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-t-3xl shrink-0">
          <img
            src={imageSrc}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <h3 className="text-2xl font-bold text-white">{member.name}</h3>
            <p className="text-blue-300 font-medium text-sm">{member.role}</p>
          </div>
          {(member.email || member.linkedin) && (
            <div className="absolute bottom-4 right-6 flex gap-2">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 bg-blue-600/80 backdrop-blur-sm text-white rounded-lg hover:bg-blue-500 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-700/80 backdrop-blur-sm text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>

        <div className="p-6 space-y-6">
          {/* Full bio */}
          <p className="text-gray-300 text-sm leading-relaxed">{member.fullIntro}</p>

          {/* Highlights */}
          <div>
            <p className="text-xs font-semibold text-blue-400/90 uppercase tracking-wider mb-3">
              {member.highlightsTitle ?? 'Experience'}
            </p>
            <ul className="space-y-4">
              {member.highlights.map((h, i) => (
                <li key={i} className="text-sm text-gray-400 leading-relaxed border-l-2 border-blue-500/40 pl-3">
                  <span className="text-white font-medium">{h.org}</span>
                  <span className="text-gray-500"> — </span>
                  <span className="text-gray-300">{h.title}</span>
                  <span className="text-gray-500"> — </span>
                  {h.detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="pt-4 border-t border-gray-700/80 space-y-2">
            {member.stats.map((s, i) => (
              <div key={i} className="text-sm flex flex-wrap gap-x-2">
                <span className="text-gray-500">{s.label}</span>
                <span className="text-gray-600">·</span>
                {Array.isArray(s.value) ? (
                  <ul className="mt-1 w-full list-none space-y-0.5 text-gray-300">
                    {s.value.map((line, j) => (
                      <li key={j}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-gray-300">{s.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Quote */}
          {member.quote && (
            <blockquote className="pt-4 border-t border-gray-700/80 text-sm text-gray-400 italic leading-relaxed border-l-2 border-cyan-500/50 pl-4">
              {member.quote}
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}

function TeamSection() {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <section id="team" className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-950">
      <div className="absolute inset-0 bg-[url('https://cdn.aib.edu.au/public-website/uploads/p/2019/03/form-submission-7464-teamworkisimportantintheworkplace-desktop-768x432-1606698141-85.jpg')] bg-cover bg-center opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Meet The</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Visionaries
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The passionate minds building the future of city economies and connected communities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => {
            const imageSrc = typeof member.image === 'string' ? member.image : member.image?.src ?? member.image;
            return (
              <div key={member.id} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 rounded-2xl overflow-hidden group-hover:border-gray-700 transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Square image */}
                  <div className="relative aspect-square w-full overflow-hidden">
                    <img
                      src={imageSrc}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

                    {/* Social icons on hover */}
                    {(member.email || member.linkedin) && (
                      <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="p-2 bg-blue-600/80 backdrop-blur-sm text-white rounded-lg hover:bg-blue-500 transition-colors duration-200"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-blue-700/80 backdrop-blur-sm text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card body — compact */}
                  <div className="p-5 flex flex-col gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-blue-300 font-medium text-sm">{member.role}</p>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{member.intro}</p>

                    {/* Quick stats pills */}
                    <div className="flex flex-wrap gap-2">
                      {member.stats.slice(0, 2).map((s, i) =>
                        !Array.isArray(s.value) ? (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                          >
                            {s.value}
                          </span>
                        ) : null
                      )}
                    </div>

                    {/* See more */}
                    <button
                      onClick={() => setActiveMember(member)}
                      className="self-start inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 group/btn"
                    >
                      See more
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">Want to join our mission to transform city economies?</p>
          <a
            href="mailto:invest@cittis.cc"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <Mail className="w-4 h-4" />
            Contact Careers
          </a>
        </div>
      </div>

      {/* Modal */}
      {activeMember && (
        <MemberModal member={activeMember} onClose={() => setActiveMember(null)} />
      )}
    </section>
  );
}

export default TeamSection;