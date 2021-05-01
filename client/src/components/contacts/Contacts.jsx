import React, { Fragment, useContext, useEffect } from 'react'
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../layout/Spinner";

function Contacts() {
    const contactContacts = useContext(ContactContext);

    const { contacts, filtered, getContacts, loading } = contactContacts;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, []);

    if(contacts !== null && contacts.length === 0) {
        return <h4>Please add a contact</h4>
    }
    
    return (
        <Fragment>
            {contacts !== null && !loading ? (<TransitionGroup>
                {filtered !== null 
                    ? filtered.map(contact => (
                        <CSSTransition key={contact._id} timeout={500} classNames="item">
                            <ContactItem key={contact.id} contact={contact}/>
                        </CSSTransition>
                        ) 
                    )
                    : contacts.map(contact => (
                        <CSSTransition key={contact._id} timeout={500} classNames="item">
                            <ContactItem key={contact.id} contact={contact} />
                        </CSSTransition>
                        )
                )}
            </TransitionGroup>) : <Spinner/>}
            
        </Fragment>
    )
}

export default Contacts
