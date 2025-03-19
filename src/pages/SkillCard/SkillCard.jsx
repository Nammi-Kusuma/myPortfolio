import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function SkillCard(props) {
    // console.log(skill.iconPosition.x)
  //   const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
    return (
    //     <motion.div
    //   ref={ref}
    //   className="skill-card"
    //   initial={{ opacity: 0, y: 50 }}
    //   animate={isInView ? { opacity: 1, y: 0 } : {}}
    //   transition={{ duration: 0.5 }}
    // >
    //   <div className="skill-card image-container center">
    //         <img src={props.item.img} alt= {props.item.title}/>
    //         <h4>{props.item.name}</h4>
    //     </div>
    // </motion.div>

<div className="skill-card">
<img src={props.item.img} alt= {props.item.title}/>
<h4 className=''>{props.item.name}</h4>
</div>
        
  //   <motion.div
  //   ref={ref}
  //   className="skill-card"
  //   style={{
  //     position: 'relative',
  //     width: '200px', // Adjust card width as needed
  //     height: '200px', // Adjust card height as needed
  //     border: '1px solid #ccc',
  //     borderRadius: '10px',
  //     overflow: 'hidden',
  //   }}
  // >
  //   {/* Skill Icon */}
  //   <motion.div
  //     className="skill-icon"
  //     style={{
  //       position: 'absolute',
  //       top: '50%',
  //       left: '50%',
  //       transform: 'translate(-50%, -50%)',
  //     }}
  //     initial={{ x: '-50%', y: '-50%', scale: 1 }}
  //     animate={
  //       isInView
  //         ? {
  //             x: skill.iconPosition.x, // Move to original x position
  //             y: skill.iconPosition.y, // Move to original y position
  //             scale: 1,
  //           }
  //         : {}
  //     }
  //     transition={{ duration: 0.5, ease: 'easeInOut' }}
  //   >
  //     <img src={skill.icon} alt={skill.name} style={{ width: '50px', height: '50px' }} />
  //   </motion.div>

  //   {/* Skill Name */}
  //   <motion.p
  //     style={{
  //       position: 'absolute',
  //       top: '50%',
  //       left: '50%',
  //       transform: 'translate(-50%, -50%)',
  //       margin: 0,
  //       fontSize: '16px',
  //     }}
  //     initial={{ x: '-50%', y: '-50%', opacity: 0 }}
  //     animate={
  //       isInView
  //         ? {
  //             x: skill.textPosition.x, // Move to original x position
  //             y: skill.textPosition.y, // Move to original y position
  //             opacity: 1,
  //           }
  //         : {}
  //     }
  //     transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
  //   >
  //     {skill.name}
  //   </motion.p>
  // </motion.div>
    )
}

export default SkillCard