import React from "react";

// Styles
import { AboutWrapper } from "./styles";

const About = () => {
  return (
    <AboutWrapper className="container">
      <h2>What we're about</h2>
      <p>
        We aim to spread technology and knowledge to the community and help the
        build awesome products using the best tools out there.
      </p>
      <p>
        Our purpose is to unite the developers around the country in this
        community and share knowledge.
      </p>
      <p>
        Disclaimer: GDG Najaf is an independent group; our activities and the
        opinions expressed here should in no way be linked to Google, the
        corporation. To learn more about the GDG program, visit:
      </p>
      <p>
        <a
          href="https://developers.google.com/groups/"
          target="_blank"
          rel="noreferrer"
        >
          https://developers.google.com/groups/
        </a>
      </p>
      <p>
        We also aim at enable women through the Google's Women Techmakers
        program provides visibility, community, and resources for women in
        technology:
      </p>
      <p>
        <a
          href=" https://www.womentechmakers.com/membership"
          target="_blank"
          rel="noreferrer"
        >
          https://www.womentechmakers.com/membership
        </a>
        /{" "}
        <a
          href="https://www.womentechmakers.com/membership3.2"
          target="_blank"
          rel="noreferrer"
        >
          https://www.womentechmakers.com/membership3.2
        </a>
      </p>
    </AboutWrapper>
  );
};

export default About;
