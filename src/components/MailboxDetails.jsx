// src/components/MailboxDetails.jsx

import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();

  // Find the mailbox with the matching _id
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

  // Filter letters that belong to the selected mailbox
  const selectedLetters = letters.filter((letter) => letter.mailboxId === Number(mailboxId));

  // If no mailbox is found, display an error message
  if (!selectedBox) {
    return <h2>Mailbox not found!</h2>;
  }

  return (
    <div className="mailbox-details">
      <h2>Mailbox Details</h2>
      <p><strong>Box Number:</strong> {selectedBox._id}</p>
      <p><strong>Boxholder:</strong> {selectedBox.boxholder}</p>
      <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>

      <h3>Letters in this Mailbox:</h3>
      <ul>
        {selectedLetters.map((letter, index) => (
          <li key={index}>
            <p><strong>Sender:</strong> {letter.sender}</p> {/* Display sender */}
            <p><strong>Recipient:</strong> {letter.recipient}</p>
            <p><strong>Message:</strong> {letter.message}</p>
          </li>
        ))}
        {selectedLetters.length === 0 && <p>No letters in this mailbox.</p>}
      </ul>
    </div>
  );
};

export default MailboxDetails;
