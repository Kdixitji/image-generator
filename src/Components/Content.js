import React, { useEffect, useState } from "react";
import "../Components/ContentStyles.css";
import { RxCross1, RxCopy } from "react-icons/rx";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { BsFacebook, BsWhatsapp, BsTwitter, BsThreeDots } from "react-icons/bs";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

const Content = () => {
  {
    /* for modal open and close */
  }
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  {
    /* fetching random image */
  }
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    getRandomImage();
  }, []);

  const getRandomImage = () => {
    fetch("https://picsum.photos/400/300").then((response) => {
      setRandomImage(response.url);
    });
  };

  {
    /*handle copy */
  }
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
    window.alert("copied to clipboard");
  };

  return (
    <div className="content-header">
      <img src={randomImage} alt="randomImage" className="image" />
      <div>
        <button onClick={handleOpen} className="share-btn">
          Share
        </button>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <RxCross1 className="close-btn" onClick={handleClose} size={20} />
              <div className="container">
                <img
                  src={randomImage}
                  alt="randomImage"
                  className="container-img"
                />
                <div className="bottom">
                  <FacebookShareButton url={randomImage}>
                    <BsFacebook className="logo" size={25} color="blue" />
                  </FacebookShareButton>
                  <TwitterShareButton url={randomImage}>
                    <BsTwitter className="logo" size={25} color="blue" />
                  </TwitterShareButton>
                  <WhatsappShareButton url={randomImage}>
                    <BsWhatsapp className="logo" size={25} color="green" />
                  </WhatsappShareButton>
                  <CopyToClipboard text={randomImage} onCopy={handleCopy}>
                    <RxCopy className="logo" size={25} color="blue" />
                  </CopyToClipboard>
                  <BsThreeDots className="logo" size={25} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
