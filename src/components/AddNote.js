/* eslint-disable */
import  { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200; //Does not get added to useState since the user cannot change this

    const handleChange = (e) => {
        //this if statement covers so the count for character does not go into the negative numbers but instead stops at 0
        if(characterLimit - e.target.value.length >= 0){
            setNoteText(e.target.value);
        }     
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0 ){
            handleAddNote(noteText); //This adds the note typed out
            setNoteText(''); //This will reset the note to be blank once it "resets"
        }
    };
    return ( 
       <div className="note new">
        <textarea 
            rows="8" 
            cols="10" 
            placeholder="Type to add a note here ..."
            value={noteText}
            onChange = {handleChange}
        >
        </textarea>

        <div className="note-footer">
        {/* will add JS here but for now hardcoded a character allowed number */}
        {/* this subtraction will give the characters remaining */}
            <small> {characterLimit - noteText.length } Remaining </small>
            <button  className="save"  onClick={handleSaveClick}>
                 Save Note
            </button>
        </div>
       </div> 
     );
}
 
export default AddNote;