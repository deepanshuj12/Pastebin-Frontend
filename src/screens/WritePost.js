import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function WritePost() {
  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState("");
  const [maxViews, setMaxViews] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      content
    };

    if (ttl) body.ttl_seconds = Number(ttl);
    if (maxViews) body.max_views = Number(maxViews);

const res = await fetch(`${process.env.REACT_APP_API_BASE}/api/pastes`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body)
});

    const data = await res.json();
    navigate(`/p/${data.id}`);
  }

  return (
    <>
      <Navbar />

      <form onSubmit={handleSubmit} style={{ padding: 20 }}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your paste..."
          required
        />

        <br /><br />

        <input
          type="number"
          placeholder="Time to live (seconds)"
          value={ttl}
          onChange={(e) => setTtl(e.target.value)}
          min="1"
        />

        <br /><br />

        <input
          type="number"
          placeholder="Max views"
          value={maxViews}
          onChange={(e) => setMaxViews(e.target.value)}
          min="1"
        />

        <br /><br />

        <button type="submit">Create Paste</button>
      </form>
    </>
  );
}

export default WritePost;
