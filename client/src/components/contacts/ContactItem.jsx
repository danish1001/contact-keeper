import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ContactContext from "../../context/contact/ContactContext";


export const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext);

    const { _id, name, phone, email, type} = contact;

    const onDelete = () => {
        contactContext.deleteContact(_id);
        contactContext.clearCurrent();
    }

    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {name} {' '} 
                <span style={{float: 'right'}} className={'badge ' + (type === "professional" ? "badge-success" : "badge-primary")}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className="list">
                {email && ( <li>
                    <i className="fas fa-envelope-open"/> {email}
                </li> )}
                {phone && ( <li>
                    <i className="fas fa-phone"/> {phone}
                </li> )}
            </ul>
            <p>
                <button onClick={() => contactContext.setCurrent(contact)} className="btn btn-dark btn-sm">Edit</button>
                <button onClick={onDelete} className="btn btn-danger btn-sm">Delete</button>
            </p>
        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItem;
