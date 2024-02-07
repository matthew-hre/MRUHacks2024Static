import { useEffect } from "react";
import "../App.css";
import { useState } from "react";
import Footer from "./Footer";

import LogoTest from "../assets/logo-test.png";

function Content() {
  const getTimeRemaining = () => {
    const total = Date.parse("2024-10-06T00:00:00") - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="Content">
      <div className="hero">
        <img src={LogoTest} alt="MRUHacks Logo" />
        <div className="hero-text">
          {/* <h1>Get ready for MRUHacks 2024!</h1> */}
          <p style={{ padding: "32px 12px" }}>
            Join us on October 5th - 6th, 2024! Stay tuned for more details!
          </p>
          {/* <h2 className="countdown">
            MRUHacks 2024 starts in: <span id="days">{timeRemaining.days}</span>{" "}
            days, <span id="hours">{timeRemaining.hours}</span> hours,{" "}
            <span id="minutes">{timeRemaining.minutes}</span> minutes,{" and "}
            <span id="seconds">{timeRemaining.seconds}</span> seconds
          </h2> */}
        </div>
      </div>
      {/*<div className="article" id="joining-in">
         <h2>Joining In</h2>
        <p className="popup">
          Stay tuned for more information on how to join MRUHacks 2024!
        </p>
      </div> */}
      <div className="article" id="sponsors">
        <h2>Sponsors</h2>
        <p className="popup" style={{ textAlign: "center" }}>
          Interested in sponsoring? Please email us at{" "}
          <a href="mailto:hello@mruhacks.ca">hello@mruhacks.ca</a>!
        </p>
      </div>
      <div className="article" id="faq">
        <h2>FAQ</h2>
        <h3>What's a Hackathon?</h3>
        <p>
          A hackathon is best described as an “invention marathon”. Anyone who
          has an interest in technology attends a hackathon to learn, build &
          share their creations over the course of a weekend. You don't have to
          be majoring in Computer Science to join!
        </p>
        <p>
          Over the course of 24-hours you will bring your crazy ideas to reality
          through technology before showcasing them to a team of judges.
        </p>
        <h3>When is MRUHacks?</h3>
        <p>
          MRUHacks will be held from October 5th - 6th, 2024, in the Riddell
          Library and Learning Centre.
        </p>
        <h3>Who can participate?</h3>
        <p>
          MRUHacks is open to all Albertan Post Secondary students. It's
          completely free to participate, and you don't need any prior
          experience to participate. You can participate as an individual or as
          a team of up to four people.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Content;
