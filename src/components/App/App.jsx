import ContactList from "../ContactList/ConctactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ConctactForm/ContactForm";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.wrapper}>
        <div className={css.inner}>
          <ContactForm />
          <SearchBox />
        </div>

        <ContactList />
      </div>
    </div>
  );
}
