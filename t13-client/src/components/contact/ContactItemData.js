import React from 'react';
import './style.css'

const ContactItemData = props => {

    return (
        <li>
            <img
                className="block-item-left-img"
                src={props.src}
                alt={props.src}
            />
            {props.contactPhone}
            {props.textBeforeLink} 
            <a href={props.link} target="/blank">
                {props.linkText}
            </a>
            {props.textAfterLink}
        </li>
    );
}

export default ContactItemData;