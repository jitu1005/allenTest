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
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
        />
        <div>
          <p className="text">Understanding Complex Numbers</p>
          <p className="textBottom">By Prof Chirag Tandon</p>
        </div>
      </div>
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
        <div className="vline">

        </div>

        
      </div>
    </div>
  );
}
