import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Footer from "./Footer/Footer";
import { FormattedMessage } from "react-intl";

function Home({ headerAlarm }) {
  const navigate = useNavigate();

  return (
    <>
      <main className="home-main">
        <section className="info">
          <p className="paragraph-one">
            <FormattedMessage
              id="home_title"
              defaultMessage="Unlock Your Potential with Our Online Courses"
            />
          </p>
          <p className="paragraph-two">
            <FormattedMessage
              id="home_text"
              defaultMessage="Join a community of over 70,000 learners, including professionals, students, and government officials, who trust us for their online education journey."
            />
          </p>
          <button className="home-btn" onClick={() => navigate("/courselist")}>
            <FormattedMessage
              id="home_button"
              defaultMessage="Explore Our Courses"
            />
          </button>
        </section>
        <section className="home-img">
          <div className="home-img-div">
            <img src={require("../Images/home.jpg")} alt="" />
          </div>
        </section>
        <div id="alarm" className={headerAlarm ? "alarm" : "hide-alarm"}>
          <FormattedMessage
            id="please_login_first"
            defaultMessage="Please log in to access your profile options."
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
