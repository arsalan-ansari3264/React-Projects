import Modal from "../Modal/Modal";
import style from "./AddAndUpdate.module.css";
import { Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const AddAndUpdate = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfully",{position: "top-right",} );
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact updated Successfully",{position: "top-right",});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                  number: contact.number,
                  location: contact.location,
                }
              : {
                  name: "",
                  email: "",
                  number: "",
                  location: "",
                }
          }
          onSubmit={(values) => {
            // console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className={style.form_container}>
            <div>
              <label htmlFor="name">Name</label>
              <Field name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
            </div>
            <div>
              <label htmlFor="number">Number</label>
              <Field name="number" type="number" />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <Field name="location" type="text" />
            </div>
            <div>
              <button type="submit" className={style.btn}>
                {isUpdate ? "Update" : "Add"} Contact
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};

export default AddAndUpdate;
