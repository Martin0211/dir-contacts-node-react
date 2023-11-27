import { Route, Routes } from 'react-router-dom';
import UserPage from './view/HomePage/UserHomePage';
import ContactsPage from './view/ContactPage/Contactspage';


function App(props) {

  return (
    <>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/contacts/:id" element={<ContactsPage />} />

      </Routes>
    </>
  );
}

export default App;
