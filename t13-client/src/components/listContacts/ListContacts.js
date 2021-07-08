import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ContactsTableRow from './ContactsTableRow';
import getContacts from '../../services/contacts/getContacts'
import './styles.css'

const ListContacts = () => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const getContactsData = async () => {
            const contactsData = await getContacts();
            setContacts(contactsData);
        };
        getContactsData();
    }, []);

    return (
        <Table className="table-list" striped bordered hover size="sm">
            <thead className="table-list__header">
                <tr>
                    <th>
                        Lista de contactos
                    </th>
                </tr>
            </thead>
            <tbody>
                {contacts?.map( contactData => {
                    return <ContactsTableRow contactData={contactData} />
                })}
            </tbody>
        </Table>
    );
}

export default ListContacts;