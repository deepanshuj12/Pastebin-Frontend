import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ViewPost() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

useEffect(() => {
  fetch(`${process.env.REACT_APP_API_BASE}/api/pastes/${id}`)
    .then(res => {
      if (!res.ok) throw new Error("Paste not found");
      return res.json();
    })
    .then(data => setContent(data.content))
    .catch(err => setError(err.message));
}, [id]);

  if (error) return <p>{error}</p>;

  return <pre>{content}</pre>;
}

export default ViewPost;
