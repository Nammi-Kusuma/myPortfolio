import "./Card.css";
import { assests } from "../../assets/assets";

function Card() {
  return (
    <div className="card">
        <img src={assests.hosthive} alt="" />
        <div className="card-content">
          <h3>HostHive</h3>
          <div className="skillset">
            <div className="skillset-item">
            <img src={assests.html} alt="" />
            <p className="skill-name">HTML</p>
            </div>
            <div className="skillset-item">
            <img src={assests.css} alt="" />
            <p className="skill-name">CSS</p>
            </div>
            <div className="skillset-item">
            <img src={assests.javascript} alt="" />
            <p className="skill-name">JavaScript</p>
            </div>
            <div className="skillset-item">
            <img src={assests.node} alt="" />
            <p className="skill-name">NodeJs</p>
            </div>
            <div className="skillset-item">
            <img src={assests.mongodb} alt="" />
            <p className="skill-name">MongoDB</p>
            </div>
            {/* <img src={assests.} alt="" />
             */}
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias rerum corporis accusamus consectetur tempore! Qui quas asperiores ab sed error quasi at sint deserunt. Atque soluta nam nisi eveniet totam.</p>
          <div className="card-btns">
            <button>Go Live</button>
            <button>Github</button>
          </div>
        </div>
    </div>
  );
};

export default Card;
