import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <footer className="footer">
            <div className="f-content">
                <h1>Nammi Kusuma</h1>

                <div className="icons">
                    <a href="https://www.linkedin.com/in/kusumanammi/"><FontAwesomeIcon icon={faLinkedin} className='icon' /></a>
                    <a href="https://github.com/Nammi-Kusuma"><FontAwesomeIcon icon={faGithub} className='icon' /></a>
                    <a href=""><FontAwesomeIcon icon={faTwitter} className='icon' /></a>
                    <a href="mailto:kusumanammi0809@gmail.com"><FontAwesomeIcon icon={faEnvelope} className='icon'/></a>
                </div>

                <p>&copy; 2024 Nammi Kusuma. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer