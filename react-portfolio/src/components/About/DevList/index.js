import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [devs] = useState([
    { name: "Amazon Web Services (AWS)", progress: 100, className: "aws-progress", years: 2 },
    { name: "Firebase", progress: 100, className: "firebase-progress", years: 2 },
    { name: "Git", progress: 100, className: "github-progress", years: 2 },
    { name: "Google Cloud Platform (GCP)", progress: 50, className: "gcp-progress", years: 1 },
    { name: "Microsoft Azure DevOps", progress: 50, className: "azure-progress", years: 1 },
    { name: "Docker", progress: 50, className: "docker-progress", years: 1 },

  ]);

  return (
    <div>
      <h2>Development Tools</h2>
      <ul>
        {devs.map((dev, index) => (
          <li key={index}>
            <span>{dev.name}: {`${dev.years} years`}</span>
            <ProgressBar progress={dev.progress} className={dev.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;