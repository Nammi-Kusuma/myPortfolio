import '../css/Home.css'

function Home() {
    return (
        <header className='home'>
            <div className="heading">
                <h1 className='welcome'>Welcome to my Portfolio!</h1>
                <h1 className='me'>I'm Nammi Kusuma, <span>a full stack developer</span>.</h1>

                <div className="btns">
                    <button className='btn'><a href="#about">Know more about me</a></button>
                    <button className='btn'>Contact me</button>
                </div>

                <div className="home-vid">
                    <video id="video" autoPlay loop muted disablePictureInPicture>
                        <source src="../home.mp4" /></video>
                </div>
            </div>
        </header>
    )
}

export default Home