import React from "react";

// Styles
import {
  HomeImageStyle,
  HomeWrapper,
  IconStyle,
  CardTextStyle,
} from "./styles";
import { TiMessage } from "react-icons/ti";
import { FiCode } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <p>Welcome to GDG Najaf</p>
        <img
          src="https://movietvtechgeeks.com/wp-content/uploads/2016/07/the-dawn-of-e-persons-2016-tech-images.jpg"
          alt="home"
        />
      </HomeWrapper>
      <div
        className=" card text-black"
        style={{
          boxShadow: "10px 10px 8px #888888",
          margin: "2em 0.5em auto 0.5em",
          height: "23em",
        }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://media.istockphoto.com/photos/old-wall-texture-cement-dirty-gray-with-black-background-abstract-picture-id1197671817?k=6&m=1197671817&s=612x612&w=0&h=jXaABJz096IxPIsjNvzZULZkJp8dVKbtzjLmlATBn9A="
          className="card-img"
          alt="..."
        />
        <div className="row card-img-overlay">
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <h5 className="card-title"> What we do?</h5>
            <CardTextStyle>
              Google Developer Groups (GDGs) are for developers who are
              interested in Google's developer technology. About different
              Google technologies
            </CardTextStyle>
            <div>
              <IconStyle
                src="https://www.gdgistanbul.com/img/angular.48ae79d9.svg"
                alt="..."
              />
              <IconStyle
                src="https://www.gdgistanbul.com/img/gcp.a711d8f7.svg"
                alt="..."
              />
              <IconStyle
                src="https://www.gdgistanbul.com/img/tf.d192dc79.svg"
                width="15px"
                alt="..."
              />
              <IconStyle
                src="https://www.gdgistanbul.com/img/android.14ed07e6.svg"
                alt="..."
              />
              <IconStyle
                src="https://www.gdgistanbul.com/img/firebase.1c973c35.svg"
                alt="..."
              />
            </div>
          </div>
          <div className=" col-sm-12 col-md-8 col-lg-8 col-12">
            <div className=" row">
              <CardTextStyle className="text-center  col-sm-6 col-md-4 col-lg-4 col-6 ">
                <div>
                  <TiMessage size="50px" />
                  Talks
                  <p> Get updated with the latest news and announcements</p>
                </div>
              </CardTextStyle>

              <CardTextStyle className="text-center  col-sm-6 col-md-4 col-lg-4 col-6 ">
                <div>
                  <FiCode size="50px" /> Codelabs
                  <p>
                    Get hands-on experience and guidance from the community
                    members
                  </p>
                </div>
              </CardTextStyle>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
