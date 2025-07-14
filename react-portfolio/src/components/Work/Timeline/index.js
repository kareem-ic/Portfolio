import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'Mar 2025 – Present',
      title: 'Founding Engineer — JVS Tax Services',
      description: [
        'Drove 100% of the end-to-end technical strategy, architecture, and execution for JVS Tax Services’ digital platform, designing and launching a modern, scalable web application that supports over 1,000 active users',
        'Led the full lifecycle development of a secure, responsive, and user-centric tax services website using <b>JavaScript</b>, <b>HTML5</b>, and <b>CSS3</b>, resulting in improved client engagement and operational efficiency',
      ],
      expanded: false,
    },
    {
      date: 'Dec 2024 – Feb 2025',
      title: 'Software Engineer Intern — Toyz Electronics, Inc.',
      description: [
        'Redesigned the site’s architecture in <b>React</b> to address usability gaps, leading to a smoother user flow for 4.4K+ monthly users and reducing navigation drop-offs across key pages',
        'Modernized key UI components to improve visual hierarchy and accessibility, aligning the design with WCAG guidelines and enhancing clarity for both mobile and desktop users',
        'Orchestrated cross-functional collaboration with design and product teams to revamp UX elements, contributing to a <b>22%</b> increase in time-on-site and improved interaction consistency',
      ],
      expanded: false,
    },
    {
      date: 'May 2024 – Sep 2024',
      title: 'Software Engineer Intern — Soapdocs LLC',
      description: [
        'Refined front-end functionality by resolving UI/UX inconsistencies and improving on-page interaction by roughly <b>15%</b>, resulting in a more intuitive and consistent user experience',
        'Maintained a clean, conflict-free codebase by applying <b>Git/GitHub</b> workflows that supported version control and enabled efficient team collaboration',
        'Engineered a <b>Chrome extension</b> using <b>JavaScript</b>, <b>HTML</b>, and <b>CSS</b> that reduced third-party tool reliance by approximately <b>30%</b>, while enhancing accessibility and embedding lightweight utilities into the company’s website',
      ],
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) =>
      prevEvents.map((event, idx) =>
        idx === index ? { ...event, expanded: !event.expanded } : event
      )
    );
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
