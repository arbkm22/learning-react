import React, { useState } from 'react';
import img from '../assets/img.jpg';
import starEmpty from '../assets/star-empty.png';
import starFilled from '../assets/star-filled.png'
import Star from '../components/Star';

function Contact() {

    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "john.doe@gmail.com",
        isFavorite: false
    });

    // let starIcon = contact.isFavorite ? starFilled : starEmpty;

    // function imgChanger() {
    //     console.log('imgChanger called: ', contact);
    //     starIcon = contact.isFavorite ? starFilled : starEmpty;
    // }

    function toggleFavorite() {
        setContact(prev => {
            return {
                ...prev,
                isFavorite: !prev.isFavorite
            }
        });
    }

    return (
        <main>
            <article className="Contact">
                <img src={img} className="contact-image" alt="contact profile pic" />
                <div className="contact-info">
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
                    <h2 className="contact-name">{contact.firstName} {contact.lastName}</h2>
                    <p className="contact-phone">{contact.phone}</p>
                    <p className="contact-mail">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}

export default Contact;