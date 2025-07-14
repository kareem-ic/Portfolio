import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
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
