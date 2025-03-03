import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import s from './Contact.module.css';
import clsx from 'clsx'
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({id, name, number}) => {
const dispatch = useDispatch();

    return (
           <li className={clsx(s.wrapper)}>
            <div className={clsx(s.namePhone)}>
            <p className={clsx(s.text)}><span className={clsx(s.span)}><IoPersonSharp /></span>{name}</p>
            <p ><span className={clsx(s.span)}><FaPhoneAlt /></span>{number}</p></div>
            <div className={clsx(s.buttonContainer)}>
            <button className={clsx(s.button)} onClick={()=>dispatch(deleteContact(id))}>Delete</button>
            </div>
        </li>
       
    )

}

export default Contact;