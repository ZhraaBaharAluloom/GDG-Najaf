import React from "react";

// images
import athraa from "./athraa.jpg";

// Styles
import { TeamListWrapper, TeamTitleStyle } from "./style";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";

const Team = () => {
  return (
    <>
      <TeamTitleStyle>
        <span>Our</span> Team
      </TeamTitleStyle>
      <TeamListWrapper>
        <div
          className="card text-grey  mb-3"
          style={{ maxWidth: "18rem", margin: 10 }}
        >
          <div className="card-body">
            <img
              alt="..."
              src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/avatars/zahraa_alkhawaja.jpg"
            />
            <p className="card-text">Zahraa AlKhawaja</p>
            <AiOutlineTwitter />
            <FaFacebookF style={{ marginLeft: 3, marginRight: 4 }} />
            <ImLinkedin2 />
          </div>
        </div>
        <div
          className="card text-grey  mb-3"
          style={{ maxWidth: "18rem", margin: 10 }}
        >
          <div className="card-body">
            <img
              alt="..."
              src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
            />
            <p className="card-text">Nuhaa Almusawi</p>
            <AiOutlineTwitter />
            <FaFacebookF style={{ marginLeft: 3, marginRight: 4 }} />
            <ImLinkedin2 />
          </div>
        </div>
        <div
          className="card text-grey  mb-3"
          style={{ maxWidth: "18rem", margin: 10 }}
        >
          <div className="card-body">
            <img
              alt="..."
              src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
            />
            <p className="card-text">Zahraa BaharAluloom</p>
            <AiOutlineTwitter />
            <FaFacebookF style={{ marginLeft: 3, marginRight: 4 }} />
            <ImLinkedin2 />
          </div>
        </div>
        <div
          className="card text-grey  mb-3"
          style={{ maxWidth: "18rem", margin: 10 }}
        >
          <div className="card-body">
            <img alt="..." src={athraa} />
            <p className="card-text">Athraa Mousawi</p>
            <AiOutlineTwitter />
            <FaFacebookF style={{ marginLeft: 3, marginRight: 4 }} />
            <ImLinkedin2 />
          </div>
        </div>
      </TeamListWrapper>
    </>
  );
};

export default Team;
