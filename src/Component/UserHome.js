import React from "react";
import "./UserHome.css";

export default function UserHome() {
  return (
    <div className="UserHome">
      <div className="Auth-form-containerU"></div>
      <h3 className="headertext">IIT JEE(Main + Advance)</h3>
      <div className="card">
        <img
          src="merged.gif"
          alt="IM"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <div>
          <p className="text">Understanding Complex Numbers</p>
          <p className="textBottom">By Prof Chirag Tandon</p>
        </div>
      </div>
      <div className="Auth-form-containerV">
      <div className="card1">
        <span className="afc-learning-prg-title">PHYSICS</span>
        <div className="afc-left-image-card">
        <img className = "img-phy-logo" src="./btla.png" alt="PHY" />
        </div>
        <div className = "afc-right-image-card">
            <div className="card-body text-center">
                <img className="img-afc-right-image-card" src="afccard.png" alt="IMG"/>
                <p className="card-text">
                    Personalised Learning App <br />
                    for anytime anywhere
                </p>
            </div>
        </div>
        <div className="vline"></div>
         
            <div className="bfc-left-img-card">
                <img className="bfc-left-img-card-img" src="./tutor.png" alt="tutorimg" />
            </div>
            <div className="bfc-right-img-card">
                <img className="bfc-right-img-card-img" src="./IAS.png" alt="IAS"/>
            </div>
      </div>
           <div className="card2">
            <span className="afc-learning-prg-title2">MATHS</span>
            <div className="afc-left-image-card2">
                <img className="img-mth-logo" src="./imgcard1.jpg" alt="CD2"/>

            </div>
            <div className = "afc-right-image-card2">
            <div className="card-body text-center2">
                <img className="img-afc-right-image-card2" src="afccard.png" alt="IMG"/>
                <p className="card-text2">
                    Personalised Learning App <br />
                    for anytime anywhere
                </p>
            </div>
        </div>
        <div className="vline2"></div>
        <div className="bfc-left-img-card2">
                <img className="bfc-left-img-card-img2" src="./imgcards2.png" alt="imgcard2" />
            </div>
            <div className="bfc-right-img-card2">
                <img className="bfc-right-img-card-img2" src="./imgcard3.jpg" alt="imgcard3"/>
            </div>
           </div>
           <div className="card3">
           <span className="afc-learning-prg-title3">CHEMISTRY</span>
            <div className="afc-left-image-card3">
                <img className="img-chm-logo" src="./imgcards4.png" alt="imcard4"/>

            </div>
            <div className = "afc-right-image-card3">
            <div className="card-body text-center3">
                <img className="img-afc-right-image-card3" src="afccard.png" alt="IMG"/>
                <p className="card-text3">
                    Personalised Learning App <br />
                    for anytime anywhere
                </p>
            </div>

        </div>
        <div className="vline3"></div>
           </div>
           </div>
    </div>
  );
}
