import { useState } from "react";

export default function SideBar({ setTagOfNotes, tags, setTags }) {
  const [tag, setTag] = useState("");
  const [inputToggle, setInputToggle] = useState(false);

  function addTags(e) {
    if (e.key === "Enter") {
      const newTag = tag.charAt(0).toUpperCase() + tag.slice(1);
      const matched = tags.filter((t) => newTag === t);
      if (matched.length === 0) {
        tags.push(newTag);
        tags.sort();
        setTags([...tags]);
      }
      setTag("");
      setInputToggle(false);
    }
  }

  function showByTag(e) {
    setTagOfNotes(e.target.value);
  }

  return (
    <div className="sidebar">
      <ul style={{ listStyle: "none" }}>
        {tags.map((tag) => {
          return (
            <li>
              <i class="fas fa-tag"></i>
              <button value={tag} onClick={(e) => showByTag(e)}>
                {tag}
              </button>
            </li>
          );
        })}
      </ul>

      <input
        type="text"
        onChange={(e) => setTag(e.target.value)}
        value={tag}
        placeholder="Enter tag..."
        onKeyPress={(e) => addTags(e)}
        style={inputToggle ? null : { display: "none" }}
      />
      <button
        style={inputToggle ? { display: "none" } : null}
        onClick={() => setInputToggle(true)}
      >
        <i class="fas fa-plus-circle"></i> Add a tag
      </button>
    </div>
  );
}
