import React, { useState } from "react";
import "./App.css";

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function App() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShortUrl("");
    setError("");

    if (!input) {
      setError("URL is required.");
      return;
    }
    if (!isValidUrl(input)) {
      setError("Please enter a valid URL (including http/https).");
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      // Fake short URL generation
      setShortUrl(`https://sho.rt/${Math.random().toString(36).substr(2, 6)}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="App">
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Enter your URL (include http/https)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: 300, padding: 8 }}
        />
        <button type="submit" style={{ marginLeft: 10, padding: 8 }}>
          Shorten
        </button>
      </form>
      {error && <div style={{ color: "red", marginBottom: 10 }}>{error}</div>}
      {loading && <div>Shortening...</div>}
      {shortUrl && (
        <div>
          Short URL:{" "}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;