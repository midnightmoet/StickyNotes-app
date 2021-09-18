import { useState, useEffect } from "react"; // hook import.
import { nanoid } from "nanoid"; // nanoid is a tiny (108 bytes), secure URL-friendly unique string ID generator
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

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
			date: "02/28/2021",
		},
		{
			id: nanoid(),
			text: "My note is too sexy for that paper",
			date: "09/01/2021",
		},
		{
			id: nanoid(),
			text: "Wedding anniversary",
			date: "01/29/2010",
		},
		{
			id: nanoid(),
			text: "Rikki & Martin",
			date: "01/29/2020",
		},
		{
			id: nanoid(),
			text: "New Home",
			date: "01/01/2024",
		},
	]);

	const [searchText, setSearchText] = useState("");

	const [darkMode, setDarkMode] = useState(false);

  // This useEffect is to save the notes
  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if(savedNotes){
      setNotes(savedNotes);
    }
  }, []);

  // This useEffect is to grab the new notes
  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data', 
       JSON.stringify(notes)
    );
  }, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
    // this div with className of darkMode is what will make the toggle button turn dark 
		<div className= {`${darkMode && 'dark-mode'}`}>
			<div className="container">
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNotes={setSearchText} />
				{/* the prop passes the data into the NoteList hence the reason for notes={notes} to pull from the useState */}
				<NotesList
					// this filters through the notes and pulls out the ones including the text in the search bar
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
