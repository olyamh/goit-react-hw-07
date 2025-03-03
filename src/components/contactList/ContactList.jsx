import {  useSelector } from 'react-redux';
import Contact from '../contact/Contact';
import {  selectFilteredContacts } from '../../redux/filtersSlice';

const ContactList =()=>{
    
    const filteredData = useSelector(selectFilteredContacts);

    return (
        <ul>
        {filteredData.map(contact =>
        <Contact key={contact.id} {...contact}/>
         )} </ul>
    )

}

export default ContactList;