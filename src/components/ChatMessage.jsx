const ChatMessage = ({ chat }) => {
  const isUser = chat.role === "user";
  return (
    <div className={`message ${isUser ? "user-message" : "bot-message"}`}>
      <p className="message-text">{chat.text}</p>
    </div>
  );
};

export default ChatMessage;
