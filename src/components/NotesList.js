/* eslint-disable */
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return ( 
        <div className="notes-list">
    {/* the map makes this more dynamic instead of putting the <Note /> hardcoded in */}
            {notes.map((note) => 
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                /> 
            )}
            <AddNote handleAddNote={handleAddNote}/>
           
        </div>
    );
}
 
export default NotesList;