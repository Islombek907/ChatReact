const ImageModal = ({ isOpen, onClose, imageUrl, setImageUrl, imageComment, setImageComment, onSend }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal">
        <div className="modal__block">
          <h2>Отправить картинку</h2>
          <form className="modal__block-inputs">
            <label>
              <input
                type="text"
                placeholder="Введите URL картинки..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <span>URL</span>
            </label>
            <label>
              <input
                type="text"
                placeholder="Введите комментарий..."
                value={imageComment}
                onChange={(e) => setImageComment(e.target.value)}
              />
              <span>Комментарий</span>
            </label>
          </form>
          <div className="buttons">
            <button className="red" type="button" onClick={onClose}>Отмена</button>
            <button className="purple" type="button" onClick={onSend}>Отправить</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ImageModal;