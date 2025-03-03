import {  useSelector } from 'react-redux';
import Contact from '../contact/Contact';
import {  selectNameFilter } from '../../redux/filtersSlice';

const ContactList =({contacts})=>{
    
    const filter = useSelector(selectNameFilter);
    console.log(filter)
    const filteredData = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));   
    

    return (
        <ul>
        {filteredData.map(contact =>
        <Contact key={contact.id} {...contact}/>
         )} </ul>
    )

}

export default ContactList;