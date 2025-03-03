
import './App.css';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import ContactList from './components/contactList/ContactList';

import Notification from './components/notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { selectContacts, selectError, selectLoading } from './redux/contactsSlice';
import { useEffect } from 'react';

function App() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading)
  const error =useSelector(selectError)
  const dispatch = useDispatch();
    
  useEffect(()=> {
      dispatch(fetchContacts());
  }, [dispatch]);
 console.log(contacts)

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 1 && <SearchBox />}     
       {contacts.length ===0 && !loading && !error ? <Notification /> :<></> }
       
      
      {loading ? <p>Loading...</p> : <ContactList />}
      {error && <p>Sorry, somethig went wrong. Pease try later</p>}
    </div>
  );
};

export default App;