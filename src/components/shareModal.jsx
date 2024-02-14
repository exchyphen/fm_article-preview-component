import "./shareModal.css";

import IconFacebook from "/images/icon-facebook.svg";
import IconPinterest from "/images/icon-pinterest.svg";
import IconTwitter from "/images/icon-twitter.svg";

const ShareModal = (props) => {
  return (
    <div className="modal-container">
      <div className="social-container">
        <div className="share-text">SHARE</div>
        <img className="fb-icon" src={IconFacebook} alt="facebook icon"></img>
        <img
          className="twitter-icon"
          src={IconTwitter}
          alt="twitter icon"
        ></img>
        <img
          className="pinterest-icon"
          src={IconPinterest}
          alt="pinterest icon"
        ></img>
      </div>
      <div className="tail"></div>
    </div>
  );
};

export default ShareModal;
