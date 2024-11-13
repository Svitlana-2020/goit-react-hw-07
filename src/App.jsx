import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import SearchBox from './components/SearchBox'
import { selectContacts, selectError, selectIsLoading } from './redux/selectors'
import { useEffect } from 'react'
import { FetchContacts } from './redux/contactsOps'

function App() {
  const dispatch = useDispatch();
  useEffect (() => {dispatch(FetchContacts())}, [dispatch])
const isLoading = useSelector(selectIsLoading);
const error = useSelector(selectError);
const contacts = useSelector(selectContacts);
console.log(contacts)

  return (
    <>
    {isLoading && <p>Loading</p>}
    {error && <p>an error occurred</p>}
    {contacts.length > 0 && (<ContactList />)}
    <ContactForm />
    <SearchBox />
    </>
  )
}

export default App