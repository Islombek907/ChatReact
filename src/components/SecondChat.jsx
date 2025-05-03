import { useState } from 'react';
import seconduser from './../assets/images/seconduser.svg';
import photoIcon from './../assets/images/photo.svg';
import sendIcon from './../assets/images/send.svg';
import ImageModal from './ImageModal';

const SecondChat = ({ text, setText, chats, setChats, whoAmI }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageComment, setImageComment] = useState('');

  const handleSendText = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newMessage = {
      type: "text",
      text,
      from: whoAmI,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChats(prev => [...prev, newMessage]);
    setText('');
  };

  const handleOpenModal = (e) => {
    e.preventDefault();
    if (text.trim()) return;
    setIsModalOpen(true);
  };

  const handleSendImage = (e) => {
    e.preventDefault();
    if (!imageUrl.trim()) return;

    const newMessage = {
      type: "image",
      imageUrl,
      text: imageComment,
      from: whoAmI,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChats(prev => [...prev, newMessage]);
    setImageUrl('');
    setImageComment('');
    setIsModalOpen(false);
  };

  return (
    <div className="chat-container">
      <div className="header">
        <img src={seconduser} alt="" />
        <div className="user-info">
          <h1>Евгений</h1>
          <span>Онлайн</span>
        </div>
      </div>

      <div className="main">
        {chats.map((msg, idx) => (
          <div key={idx} className={`message-block ${msg.from === whoAmI ? 'my' : 'other'}`}>
            {msg.type === "text" ? (
              <div className="message">{msg.text}</div>
            ) : (
              <div className="message">
                <img src={msg.imageUrl} alt="Shared" />
                {msg.text && <div className="image-comment">{msg.text}</div>}
              </div>
            )}
            <span>{msg.time}</span>
          </div>
        ))}
      </div>

      <form className="chat-footer" onSubmit={text.trim() ? handleSendText : handleOpenModal}>
        <input
          type="text"
          placeholder="Написать сообщение..."
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">
          <img src={text.trim() ? sendIcon : photoIcon} alt="" />
        </button>
      </form>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        imageComment={imageComment}
        setImageComment={setImageComment}
        onSend={handleSendImage}
      />
    </div>
  );
};

export default SecondChat;
