import React, { useEffect, useRef } from "react";
import './Skills.css'
import { frontend, skillData } from '../../skilldata.js'
import SkillCard from '../../pages/SkillCard/SkillCard'

function Skills() {
    // const skills = [
    //     {
    //         name: 'HTML',
    //         icon: 'path/to/html-icon.png',
    //         iconPosition: { x: '20px', y: '20px' }, // Original position of the icon
    //         textPosition: { x: '100px', y: '150px' }, // Original position of the text
    //     },
    //     {
    //         name: 'CSS',
    //         icon: 'path/to/css-icon.png',
    //         iconPosition: { x: '30px', y: '30px' },
    //         textPosition: { x: '110px', y: '160px' },
    //     },
    //     // Add more skills as needed
    // ];
    // console.log(skills[1].iconPosition.x);
    
    let frontendSkills = frontend.map(item => {
        return <SkillCard key={item.key} item={item} />
    })
    let skills = skillData.map(item => {
        return <SkillCard key={item.key} item={item} />
    })
    return (
        <div className="skills" id="skills">
            <div className="skills-text">
                <h1 className='st h1'>My Skills</h1>
                <p className='st p'>Here’s a look at the skills I’ve honed through hands-on experience and continuous learning.</p>
            </div>

            {/* <div className="skills-content">
                {skills}
            </div> */}

            <div className="mySkills">
                {/* <div className="mySkill">
                <h3>Sample</h3>
                <div
                    className="mySkill-content"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '20px',
                        justifyContent: 'center',
                        padding: '20px',
                    }}
                >
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
                </div> */}
                <div className="mySkill">
                    <h3>Frontend</h3>
                    <div className="mySkill-content" onMouseOver={(e) => {e.target.classList.add('revealed')}} onMouseOut={(e) => {e.target.classList.add('revealed')}}>
                        {frontendSkills}
                    </div>
                </div>
                <div className="mySkill">
                    <h3>Backend &amp; Databases</h3>
                    <div className="mySkill-content" onMouseOver={(e) => {e.target.classList.add('revealed')}} onMouseOut={(e) => {e.target.classList.add('revealed')}}>
                        {frontendSkills}
                    </div>
                </div>
                <div className="mySkill">
                    <h3>Others</h3>
                    <div className="mySkill-content" onMouseOver={(e) => {e.target.classList.add('revealed')}} onMouseOut={(e) => {e.target.classList.add('revealed')}} >
                        {frontendSkills}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills