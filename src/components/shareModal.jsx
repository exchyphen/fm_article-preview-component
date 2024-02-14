import "./shareModal.css";

const ShareModal = (props) => {
  return (
    <div className="modal-container">
      <div className="social-container">
        <div className="share-text">SHARE</div>
        <img
          className="fb-icon"
          src="images/icon-facebook.svg"
          alt="facebook icon"
        ></img>
        <img
          className="twitter-icon"
          src="images/icon-twitter.svg"
          alt="twitter icon"
        ></img>
        <img
          className="pinterest-icon"
          src="images/icon-pinterest.svg"
          alt="pinterest icon"
        ></img>
      </div>
      <div className="tail"></div>
    </div>
  );
};

export default ShareModal;
