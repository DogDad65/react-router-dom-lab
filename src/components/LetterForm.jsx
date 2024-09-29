import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LetterForm = ({ mailboxes, addLetter }) => {
  const [mailboxId, setMailboxId] = useState(mailboxes[0]?._id || "");
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLetter = {
      mailboxId: Number(mailboxId),
      recipient,
      message,
      sender,
    };

    addLetter(newLetter);

    navigate(`/mailboxes/${mailboxId}`);
  };

  return (
    <form onSubmit={handleSubmit} className="letter-form">
      <label htmlFor="mailboxId">Send to Mailbox:</label>
      <select
        id="mailboxId"
        value={mailboxId}
        onChange={(e) => setMailboxId(e.target.value)}
        required
      >
        {mailboxes.map((mailbox) => (
          <option key={mailbox._id} value={mailbox._id}>
            Mailbox {mailbox._id}
          </option>
        ))}
      </select>

      <label htmlFor="sender">Sender Name:</label> {/* New sender input field */}
      <input
        type="text"
        id="sender"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        required
      />

      <label htmlFor="recipient">Recipient Name:</label>
      <input
        type="text"
        id="recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>

      <button type="submit">Send Letter</button>
    </form>
  );
};

export default LetterForm;