// src/components/MailboxList.jsx

import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <ul>
      {mailboxes.map((mailbox) => (
        <li key={mailbox._id} className="mail-box">
          <Link to={`/mailboxes/${mailbox._id}`}>
            <p>Box Number: {mailbox._id}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MailboxList;
