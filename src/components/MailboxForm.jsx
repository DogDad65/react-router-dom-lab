import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
  const [boxholder, setBoxHolder] = useState("");
  const [boxSize, setBoxSize] = useState("Small");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMailBox = {
      boxholder,
      boxSize,
    };

    addBox(newMailBox);

    setBoxHolder("");
    setBoxSize("Small");

    navigate("/mailboxes");
  };

  return (
    <form onSubmit={handleSubmit} className="mailbox-form">
      <label htmlFor="boxholder">Boxholder Name:</label>
      <input
        type="text"
        id="boxholder"
        value={boxholder}
        onChange={(e) => setBoxHolder(e.target.value)}
        required
      />

      <label htmlFor="boxSize">Box Size:</label>
      <select
        id="boxSize"
        value={boxSize}
        onChange={(e) => setBoxSize(e.target.value)}
      >
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;
