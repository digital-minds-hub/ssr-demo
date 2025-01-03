"use client";

import { useState, useEffect } from "react";

const StreamPage = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStream = async () => {
      const response = await fetch("/api/stream");
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let result = "";

      let done = false;
      while (!done) {
        const { value, done: streamDone } = await reader.read();
        done = streamDone;
        if (value) {
          result += decoder.decode(value);
          setContent((prev) => prev + decoder.decode(value));
        }
      }
      setLoading(false);
    };

    fetchStream();
  }, []);

  return (
    <div>
      <h1>Streamed Content</h1>
      {loading && <p>Loading...</p>}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default StreamPage;
