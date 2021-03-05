export default function InputForm({
  input,
  setInput,
  notes,
  setNotes,
  edit,
  setEdit
}) {
  function addHandler() {
    input.id++;
    notes.push(input);
    //console.log(notes);
    setNotes([...notes]);
    setInput({ ...input, title: "", note: "" });
  }

  function handleChange(evt) {
    const value = evt.target.value;
    setInput({ ...input, [evt.target.name]: value });
  }

  function updateHandler() {
    const newList = notes.map((note) => {
      if (note.id === input.id) {
        return { ...input };
      }
      return note;
    });
    setNotes([...newList]);
    setInput({ ...input, title: "", note: "" });
    setEdit({ ...edit, status: false });
  }

  return (
    <div className="container">
      {edit.status ? (
        <div className="input-card">
          <div className="inputs">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              onChange={handleChange}
              value={input.title}
            />
            <input
              type="text"
              name="note"
              id="note"
              placeholder="Take a note..."
              onChange={handleChange}
              value={input.note}
            />
          </div>
          <div className="input-btns">
            {edit.reason === "add" ? (
              <button onClick={() => addHandler()}>Add</button>
            ) : (
              <button onClick={() => updateHandler()}>Update</button>
            )}
            <button onClick={() => setEdit({ ...edit, status: false })}>
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="input-card-small">
          <div className="inputs">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Take a note..."
              onClick={() => {
                setEdit({ ...edit, status: !edit.status });
              }}
              value=""
            />
          </div>
        </div>
      )}
    </div>
  );
}
