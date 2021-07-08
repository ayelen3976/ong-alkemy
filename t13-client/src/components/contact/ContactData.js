import React from 'react';
import facebook from '../../images/facebook-square-brands.svg';
import linkedin from '../../images/linkedin-brands.svg';
import email from '../../images/envelope-square-solid.svg';
import phone from '../../images/phone-square-alt-solid.svg';
import ContactItemData from './ContactItemData';
import IconContactData from './IconContactData';
import './style.css';


const ContactData = () => {

    return (
        <div className="div-main-contact-data">
            <div className="block-item-left-contact">
                <h3 style={{ fontFamily: 'Montserrat', margin: "3vh 0" }} >Datos de contacto</h3>
                <ul className="block-item-left-ul">
                    <ContactItemData
                        src={facebook}
                        textAfterLink={': Somos_Más'}
                        link={"https://www.facebook.com"}
                        linkText={'Facebook'}
                    />
                    <ContactItemData
                        src={linkedin}
                        textAfterLink={': Somos Más'}
                        link={"https://www.linkedin.com/"}
                        linkText={'Linkedin'}
                    />

                    <ContactItemData
                        src={email}
                        linkText={'ssomosmasong@gmail.com'}
                        link={"mailto: ssomosmasong@gmail.com"}
                        textBeforeLink={'Email: '}
                    />
                    <ContactItemData
                        src={phone}
                        contactPhone={'Teléfono de contacto: 1160112983'}
                    />
                </ul>
            </div>
            <IconContactData />
        </div>
    );
}

export default ContactData;