import { useState } from 'react'; // hook import.
import { nanoid } from 'nanoid'; // nanoid is a tiny (108 bytes), secure URL-friendly unique string ID generator
import NotesList from './components/NotesList';


const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note",
    date: "01/01/2015",
    },
    {
      id: nanoid(),
      text: "This is my notey note",
      date: "02/28/2021"
    },
    {
      id: nanoid(),
      text: "My note is too sexy for that paper",
      date: "09/01/2021"
    },
    {
      id: nanoid(),
      text: "Wedding anniversary",
      date: "01/29/2010"
      },
      {
        id: nanoid(),
        text: "Rikki & Martin",
        date: "01/29/2020"     },
      {
        id: nanoid(),
        text: "New Home",
        date: "01/01/2024"
      }
  ]);

  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text, 
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="container">
  {/* the prop passes the data into the NoteList hence the reason for notes={notes} to pull from the useState */}
      <NotesList notes={notes} handleAddNote={addNote}/> 
    </div>
  );
}
 
export default App;