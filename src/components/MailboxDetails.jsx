// src/components/MailboxDetails.jsx

import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();

  // Convert mailboxId to a number for correct comparison
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  // If no matching mailbox is found, display a not found message
  if (!selectedBox) {
    return <h2>Mailbox not found!</h2>;
  }

  // Display the details of the selected mailbox
  return (
    <div className="mailbox-details">
      <h2>Mailbox Details</h2>
      <p><strong>Box Number:</strong> {selectedBox._id}</p>
      <p><strong>Boxholder:</strong> {selectedBox.boxholder}</p>
      <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;
