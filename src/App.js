import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Notes from "./components/Notes";
import SideBar from "./components/SideBar";
import "./styles.css";

export default function App() {
  const [tagOfNotes, setTagOfNotes] = useState("All");
  const [tags, setTags] = useState(["All", "Important", "Work"]);
  const [edit, setEdit] = useState({ status: false, reason: "add" });
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Title",
      note:
        "Click on me to Edit, Click on right top to pin me, use options at bottom to select color, label or delete me. Click on left bar label to show notes by label.",
      pinned: false,
      tags: ["All"]
    },
    {
      id: 2,
      title: "Intro",
      note:
        "Features: Create notes, Label your notes from dropdown, Add label in sidebar, Pin your important note, Select color for your note, Click on label to get notes by label, Click on a Note to Edit it, Delete your note.",
      pinned: true,
      tags: ["All"]
    }
  ]);
  const [input, setInput] = useState({
    id: 2,
    title: "",
    note: "",
    pinned: false,
    tags: ["All"]
  });

  return (
    <div className="App">
      <Header />
      <SideBar tags={tags} setTags={setTags} setTagOfNotes={setTagOfNotes} />
      <InputForm
        edit={edit}
        setEdit={setEdit}
        input={input}
        setInput={setInput}
        notes={notes}
        setNotes={setNotes}
      />
      <Notes
        tagOfNotes={tagOfNotes}
        edit={edit}
        setEdit={setEdit}
        input={input}
        setInput={setInput}
        tags={tags}
        setTags={setTags}
        setNotes={setNotes}
        notes={notes}
      />
      <Footer />
    </div>
  );
}
