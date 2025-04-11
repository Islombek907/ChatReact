import { useEffect, useState } from 'react';
import FirstChat from "./components/FirstChat";
import SecondChat from "./components/SecondChat";

const App = () => {
  const getLS = () => localStorage.chats ? JSON.parse(localStorage.chats) : [];
  const [chats, setChats] = useState(getLS);
  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');
  const [currentSender, setCurrentSender] = useState("eugene"); // Начинаем с Евгения, как на скриншоте

  useEffect(() => {
    localStorage.chats = JSON.stringify(chats);
  }, [chats]);

  const toggleSender = () => {
    setCurrentSender(prev => (prev === "eugene" ? "alexander" : "eugene"));
  };

  return (
    <div className="both-chat">
      <FirstChat
        text={firstText}
        setText={setFirstText}
        chats={chats}
        setChats={setChats}
        whoAmI="alexander" // В FirstChat "my" — это Александр, "other" — Евгений
        currentSender={currentSender}
        toggleSender={toggleSender}
      />

      <SecondChat
        text={secondText}
        setText={setSecondText}
        chats={chats}
        setChats={setChats}
        whoAmI="eugene" // В SecondChat "my" — это Евгений, "other" — Александр
        currentSender={currentSender}
        toggleSender={toggleSender}
      />
    </div>
  );
};

export default App;