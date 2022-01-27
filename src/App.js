import React, {useState, useEffect} from 'react';
import LeadBarLink from "./components/LeadBarLink";
import axios from "axios";

function App() {
const [notes, setNotes] = useState([])
useEffect(async () => {
  const response = await axios.get('http://localhost:5001/notes')
  setNotes(response.data)
}, [])

  return (
    <div>
      <h3>Imma LeadBar Link</h3>
      <LeadBarLink />
      {notes.map(note => <h5 key={note.id}>{note.content} {note.date}</h5>)}
    </div>
  );
}

export default App;
