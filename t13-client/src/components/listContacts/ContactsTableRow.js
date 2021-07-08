import React, { useState } from 'react';
import ModalContact from './ModalContact';

const ContactsTableRow = ({ contactData }) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    return (
        <>
        <tr className="table-contact__table-row">
            <td 
                className="table-contact__table-data"
                onClick={handleShow}
            >
                {contactData.name}
            </td>
        </tr>
        { show &&
            <ModalContact 
                setShow={setShow} 
                show={show} 
                contactData={contactData}
            />
        }
        </>
    );
}

export default ContactsTableRow;