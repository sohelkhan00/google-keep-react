import { useEffect, useState } from "react";
import Note from "./Note";

export default function Notes({
  edit,
  setEdit,
  input,
  setInput,
  tags,
  setTags,
  notes,
  setNotes,
  tagOfNotes
}) {
  const [newList, setNewList] = useState([]);
  useEffect(
    () => setNewList(notes.filter((note) => note.tags.includes(tagOfNotes))),
    [notes, tagOfNotes]
  );
  return (
    <div className="container">
      <h2>Pinned</h2>
      <div className="note-list">
        {newList.map((note) =>
          note.pinned ? (
            <Note
              edit={edit}
              setEdit={setEdit}
              input={input}
              setInput={setInput}
              tags={tags}
              setTags={setTags}
              notes={notes}
              setNotes={setNotes}
              note={note}
            />
          ) : null
        )}
      </div>
      <h2>Others</h2>
      <div className="note-list">
        {newList.map((note) =>
          note.pinned ? null : (
            <Note
              edit={edit}
              setEdit={setEdit}
              input={input}
              setInput={setInput}
              tags={tags}
              setTags={setTags}
              notes={notes}
              setNotes={setNotes}
              note={note}
            />
          )
        )}
      </div>
    </div>
  );
}
