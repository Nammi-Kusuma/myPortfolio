import '../css/About.css'

function About() {
    return (
        <div className="about" id="about">
            <div className="about-text">
                <h1 className='at h1'>About Me</h1>
                <h3 className='at h3'>Full Stack Developer | Competitive Programmer</h3>
            </div>

            <div className="about-content">
                <div className="content">
                    <div className="cont">
                    <h3>Full Stack Developer</h3>
                    <p>I am a dedicated Full Stack Developer passionate about building user-friendly applications, solving complex problems, and delivering impactful digital experiences through collaboration and innovation.</p>
                    <p className='sub'><i>Check out my <a href="#projects"><span>projects!</span></a></i></p>
                    </div>

                    <div className="cont">
                    <h3>Competitive Programmer</h3>
                    <p>I am a passionate Competitive Programmer who loves solving challenging algorithmic problems and optimizing solutions. Constantly striving for growth, I enjoy learning and contributing to the problem-solving community.</p>
                    <p className='sub'><i>Check out my <a href=""><span>profiles!</span></a></i></p>
                    </div>
                </div>

                <div className="about-vid">
                <video  autoPlay loop muted disablePictureInPicture>
                <source src="../about_rem.mp4" /></video>
                </div>
            </div>
        </div>
    )
}

export default About