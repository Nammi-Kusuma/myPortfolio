import '../css/Skills.css'
import data from '../skilldata'
import SkillCard from './SkillCard'

function Skills() {
    let skills = data.map(item => {
        return <SkillCard key={item.key} item={item} />
    })
    return(
        <div className="skills" id="skills">
            <div className="skills-text">
                <h1 className='st h1'>My Skills</h1>
                <p className='st p'>Here’s a look at the skills I’ve honed through hands-on experience and continuous learning.</p>
            </div>

            <div className="skills-content">
                {skills}
            </div>
        </div>
    )
}

export default Skills