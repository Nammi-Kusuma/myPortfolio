import '../css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return(
        <footer className="footer">
            <div className="f-content">
            <h1>Nammi Kusuma</h1>

            <div className="icons">
            <FontAwesomeIcon icon={faLinkedin} className='icon'/>
            <FontAwesomeIcon icon={faGithub} className='icon'/>
            <FontAwesomeIcon icon={faTwitter} className='icon'/>
            </div>
            </div>
        </footer>
    )
}

export default Footer