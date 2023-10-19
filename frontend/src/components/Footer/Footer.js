import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import "./Footer.css";

function Footer() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [chatForm, setChatForm] = useState(false);
  const messageText = document.querySelector(".message");

  useEffect(() => {
    document.querySelector(".message").focus();
  }, []);

  function textHandler() {
    if (messageText.value) {
      if (response) setResponse("");

      setText(messageText.value);

      setTimeout(() => {
        setResponse(
          <FormattedMessage
            id="thankyou"
            defaultMessage="Thank you, we've got your message and we'll respond as soon as possible."
          />
        );
      }, 900);
      messageText.value = "";
    } else {
      return;
    }
  }

  function showChatHandler() {
    setChatForm(!chatForm);
  }

  return (
    <footer className="footer-footer">
      <div className="chat">
        <div className="show-chat" onClick={showChatHandler}>
          {chatForm ? (
            <div>×</div>
          ) : (
            <div>
              <i className="fa-regular fa-comments"></i>
            </div>
          )}
        </div>
        <div className={chatForm ? "chat-form" : "hide-chat-form"}>
          <div className="response">
            <FormattedMessage
              id="send_question"
              defaultMessage="Send us your questions"
            />
          </div>
          <div className="text">{text}</div>
          <div className="response">{response}</div>
          <div className="message-div">
            <input className="message" type="text" />
            <span className="send-message" onClick={textHandler}>
              {" "}
              <i className="fa-regular fa-paper-plane"></i>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
