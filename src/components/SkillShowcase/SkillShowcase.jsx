import React from "react";
import "./SkillShowcase.css"; // CSS file for styling

const SkillShowcase = () => {
  const skills = [
    { name: "SciPy", image: "path-to/scipy.png" },
    { name: "OpenCV", image: "path-to/opencv.png" },
    { name: "TensorFlow", image: "path-to/tensorflow.png" },
    { name: "Git", image: "path-to/git.png" },
    { name: "NumPy", image: "path-to/numpy.png" },
    { name: "AWS", image: "path-to/aws.png" },
    { name: "Linux", image: "path-to/linux.png" },
    { name: "Pandas", image: "path-to/pandas.png" },
    { name: "Python", image: "path-to/python.png" },
    { name: "Oracle", image: "path-to/oracle.png" },
    { name: "Tableau", image: "path-to/tableau.png" },
    { name: "Seaborn", image: "path-to/seaborn.png" },
    { name: "Scikit-learn", image: "path-to/scikit-learn.png" },
  ];

  return (
    <div className="skill-showcase">
      <div className="main-content">
        <img
          src="path-to/person-image.jpg"
          alt="Person with Laptop"
          className="person-image"
        />
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-logo"
            style={{
              transform: `rotate(${(index * 360) / skills.length}deg) translate(12rem) rotate(-${(index * 360) / skills.length}deg)`,
            }}
          >
            <img src={skill.image} alt={skill.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillShowcase;
