import OpenAI from "openai";
import { useState } from 'react';
import './App.css';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_APIKEY,
  dangerouslyAllowBrowser: true
});

function App() {

  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const screenTitle = "RDN AI Recipe Bot";

  const msgBoard = document.getElementById('msgBoard');

  const chat = async (e, message) => {
    e.preventDefault();

    const gptModel = "gpt-4"; //"gpt-3.5-turbo";

    const chatData = {model: gptModel, messages: [{
      role: "system",
      content:
        "You are RDN-Bot. You can only help with recipes for food. Any other questions or requests unrelated to recipes for food should be kindly rejected. Format your recipe results as an html content block without any font larger than an h3",
      name:
        "RDN-Bot"
    }]};

    if (!message) return;
    setIsTyping(true);

    const user_y = msgBoard.getBoundingClientRect().height + window.scrollY;
    window.scroll({
        top: user_y,
        behavior: 'smooth',
    });

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    chatData.messages.push(...msgs);

    setMessage("");
  
    const chatCompletion = await openai.chat.completions.create(chatData)
        .then((res) => {
          msgs.push(res.choices[0].message);
          setChats(msgs);
          setIsTyping(false);
          const y = msgBoard.getBoundingClientRect().height + window.scrollY;
          window.scroll({
              top: y,
              behavior: 'instant',
              blockvalue: 'end'
          });
        })
        .catch((error) => {
          console.log(error);
        });

  }

  return (
    <main>
      <h1>{screenTitle}</h1>
      <div id="msgBoard">
        {chats && chats.length ? chats.map((chat, index) => (
              <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
                <span dangerouslySetInnerHTML={{ __html: chat.content }}></span>
              </p>
            ))
          : ""}
      </div>

      <div className={isTyping ? "" : "hide"}>
        <p>
          <i>{isTyping ? "Typing..." : ""}</i>
        </p>
      </div>
      <form action="" onSubmit={(e) => chat(e, message)}>
        <input 
          type="text"
          name="message"
          value={message}
          placeholder="Type a message here and hit Enter..."
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </main>
  );
}

export default App;
