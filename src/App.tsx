import OpenAI from "openai";
import { useState } from "react";
import "./App.css";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_APIKEY, // Access environment variables via import.meta.env in Vite
  dangerouslyAllowBrowser: true,
});

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

function App() {
  const [message, setMessage] = useState<string>("");
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const screenTitle = "RDN AI Recipe Bot";

  const chat = async (e: React.FormEvent<HTMLFormElement>, message: string) => {
    e.preventDefault();

    if (!message) return;

    const gptModel = "gpt-4"; //"gpt-3.5-turbo";
    const chatData: {
      model: string;
      messages: ChatMessage[];
    } = {
      model: gptModel,
      messages: [
        {
          role: "system",
          content:
            "You are RDN-Bot. You can only help with recipes for food. Any other questions or requests unrelated to recipes for food should be kindly rejected. Format your recipe results as an HTML content block without any font larger than an h3.",
        },
        ...chats,
        {
          role: "user",
          content: message,
        },
      ],
    };

    setIsTyping(true);

    // Scroll to the bottom of the message board
    const msgBoard = document.getElementById("msgBoard");
    if (msgBoard) {
      const user_y = msgBoard.getBoundingClientRect().height + window.scrollY;
      window.scroll({
        top: user_y,
        behavior: "smooth",
      });
    }

    try {
      const chatCompletion = await openai.chat.completions.create({
        model: chatData.model,
        messages: chatData.messages,
      });

      if (chatCompletion.choices && chatCompletion.choices.length > 0) {
        const assistantMessage: ChatMessage = {
          role: "assistant",
          content: chatCompletion.choices[0].message.content || "",
        };
        setChats([
          ...chats,
          { role: "user", content: message },
          assistantMessage,
        ]);
      }
    } catch (error) {
      console.error("Error fetching chat completion:", error);
    } finally {
      setIsTyping(false);
      if (msgBoard) {
        const y = msgBoard.getBoundingClientRect().height + window.scrollY;
        window.scroll({
          top: y,
          behavior: "instant",
        });
      }
    }
  };

  return (
    <main>
      <h1>{screenTitle}</h1>
      <div id="msgBoard">
        {chats.length > 0 &&
          chats.map((chat, index) => (
            <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
              <span dangerouslySetInnerHTML={{ __html: chat.content }}></span>
            </p>
          ))}
      </div>

      <div className={isTyping ? "" : "hide"}>
        <p>
          <i>{isTyping ? "Typing..." : ""}</i>
        </p>
      </div>
      <form onSubmit={(e) => chat(e, message)}>
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
