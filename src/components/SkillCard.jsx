function SkillCard(props) {
    console.log(props)
    return (
        <div className="skill-card">
            <img src={props.item.img} alt= {props.item.title}/>
            <h3>{props.item.name}</h3>
        </div>
    )
}

export default SkillCard