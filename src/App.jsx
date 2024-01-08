import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Contact from "./components/Contact/Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddAndUpdate from "./components/AddAndUpdate/AddAndUpdate";
import useDisclose from "./hooks/useDisclose";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";

const App = () => {

  const [contacts, setContacts] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclose();

  const api = "https://jsonplaceholder.typicode.com/users";

  const fetchApiData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      // console.log(json);
      // const contact = json;
      // return contact; // You can return the data if needed
      setContacts(json)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApiData(api);
  }, []);



  // useEffect(() => {
  //   const getContacts = async () => {
  //     try {
  //       const contactRef = collection(db, "contacts");
  //       // const contactSnapshot = await getDocs(contactRef);

  //       onSnapshot(contactRef, (snapshot) => {
  //         const contactList = snapshot.docs.map((doc) => {
  //           return {
  //             id: doc.id,
  //             ...doc.data(),
  //           };
  //         });
  //         // console.log(contactList);
  //         setContacts(contactList);
  //         return contactList;
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getContacts();
  // }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactRef = collection(db, "contacts");
    onSnapshot(contactRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filterContacts = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filterContacts);
      return filterContacts;
    });
  };
  return (
    <div className="container">
      <Navbar filterContacts={filterContacts} />
      <Contact contacts={contacts} />
      <Sidebar />
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        theme="dark"
        limit={2}
      />
      <AddAndUpdate onClose={onClose} isOpen={isOpen} />
    </div>
  );
};
export default App;
