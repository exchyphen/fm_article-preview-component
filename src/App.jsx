import { useState } from "react";
import ShareModal from "./components/shareModal";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(false);

  return (
    <div className="main-container">
      <div className="inner-card">
        <img
          className="hero-img"
          src="./images/drawers.jpg"
          alt="hero img"
        ></img>
        <div className="article-container">
          <div className="article-title">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </div>
          <div className="article-text">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </div>
          <div className="bot-container">
            <div className="author-container">
              <img
                className="author-img"
                src="./images/avatar-michelle.jpg"
                alt="author img"
              ></img>
              <div className="author-text-container">
                <div className="author-name">Michelle Appleton</div>
                <div className="post-date">28 Jun 2020</div>
              </div>
            </div>
            {display ? (
              <div
                className="share-button share-button-active"
                onClick={() => setDisplay(!display)}
              >
                <img
                  className="share-img share-img-active"
                  src="./images/icon-share.svg"
                  alt="share icon"
                ></img>
              </div>
            ) : (
              <div
                className="share-button"
                onClick={() => setDisplay(!display)}
              >
                <img
                  className="share-img"
                  src="./images/icon-share.svg"
                  alt="share icon"
                ></img>
              </div>
            )}
          </div>
        </div>
        {display ? <ShareModal></ShareModal> : null}
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/exchyphen" target="_blank">
          exc
        </a>
        .
      </div>
    </div>
  );
}

export default App;
