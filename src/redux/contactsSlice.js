import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "4591256" },
      { id: "id-2", name: "Hermione Kline", number: "4438912" },
      { id: "id-3", name: "Eden Clements", number: "6451779" },
      { id: "id-4", name: "Annie Copeland", number: "2279126" },
    ],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    removeContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export default contactsSlice.reducer;
