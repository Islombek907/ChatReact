import { useEffect, useState } from 'react';
import FirstChat from "./components/FirstChat";
import SecondChat from "./components/SecondChat";

const App = () => {
  const getLS = () => localStorage.chats ? JSON.parse(localStorage.chats) : [];
  const [chats, setChats] = useState(getLS);
  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');

  useEffect(() => {
    localStorage.chats = JSON.stringify(chats);
  }, [chats]);

  return (
    <div className="both-chat">
      <FirstChat
        text={firstText}
        setText={setFirstText}
        chats={chats}
        setChats={setChats}
        whoAmI="alexander"
      />

      <SecondChat
        text={secondText}
        setText={setSecondText}
        chats={chats}
        setChats={setChats}
        whoAmI="eugene"
      />
    </div>
  );
};

export default App;
