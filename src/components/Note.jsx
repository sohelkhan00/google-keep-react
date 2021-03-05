import { useState } from "react";

export default function Note({
  edit,
  setEdit,
  input,
  setInput,
  tags,
  setTags,
  note,
  notes,
  setNotes
}) {
  const [color, setColor] = useState("#fff");
  const [selectedTag, setSelectedTag] = useState("");

  function pinhandler(id) {
    let newNote;
    notes.forEach((note) => {
      if (note.id === id) {
        newNote = {
          ...note,
          pinned: !note.pinned
        };
      }
    });
    const newList = notes.filter((note) => note.id !== id);
    newList.unshift(newNote);
    setNotes(newList);
  }

  function deleteHandler(id) {
    console.log(id);
    const newList = notes.filter((note) => note.id !== id);
    console.log(newList);
    setNotes([...newList]);
  }

  function updateHandler(id) {
    setEdit({ status: true, reason: "update" });
    const updateNote = notes.filter((note) => note.id === id);
    setInput(...updateNote);
  }

  function handleDropDown(e) {
    let isContained = false;
    note.tags.forEach((tag) => {
      if (e.target.value === tag) {
        isContained = true;
      }
    });
    if (!isContained && e.target.value !== "") {
      note.tags.push(e.target.value);
    }
    setSelectedTag(e.target.value);
  }

  function removeTag(e) {
    const newTagList = note.tags.filter((tag) => tag !== e.target.name);
    note.tags = newTagList;
    setNotes([...notes]);
  }

  return (
    <div style={{ backgroundColor: color }} className="note-card">
      <div className="note-top">
        <div className="tags">
          {note.tags.map((tag) =>
            tag !== "All" ? (
              <button name={tag} onClick={(e) => removeTag(e)}>
                {tag}
              </button>
            ) : null
          )}
        </div>

        <button
          style={note.pinned ? { color: "black" } : { color: "gray" }}
          onClick={() => pinhandler(note.id)}
        >
          <i className="fas fa-thumbtack"></i>
        </button>
      </div>

      <div onClick={() => updateHandler(note.id)} className="note-middle">
        <h2 className="note-title">{note.title}</h2>
        <hr />
        <p className="note-text">{note.note}</p>
      </div>
      <div className="note-bottom">
        <button onClick={() => deleteHandler(note.id)}>Delete</button>
        <div className="tags">
          <select value={selectedTag} onChange={(e) => handleDropDown(e)}>
            <option value="" selected>
              Tags
            </option>
            {tags.map((tag) => (
              <option value={tag}>{tag}</option>
            ))}
          </select>
        </div>
        {/* <button>tags</button>
        <button>colors</button> */}
        <button
          style={{
            backgroundColor: "#cbf0f8"
          }}
          className="color"
          onClick={() => setColor("#cbf0f8")}
        ></button>
        <button
          style={{
            backgroundColor: "#e6c9a8"
          }}
          className="color"
          onClick={() => setColor("#e6c9a8")}
        ></button>
        <button
          style={{
            backgroundColor: "#f28b82"
          }}
          className="color"
          onClick={() => setColor("#f28b82")}
        ></button>
        <button
          style={{
            backgroundColor: "#ccff90"
          }}
          className="color"
          onClick={() => setColor("#ccff90")}
        ></button>
      </div>
    </div>
  );
}
