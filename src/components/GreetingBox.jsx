import { useState } from "react";

function GreetingBox() {
  const [message, setMessage] = useState("Greeting Message");

  return (
    <div>
      <div
        style={{
          backgroundColor: "#317a62ff",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "16px",
          textAlign: "center",
          fontSize: "1.5rem",
        }}
      >
        {message}
      </div>
      <button onClick={() => setMessage("สวัสดี!")}>สวัสดี!</button>
      <button onClick={() => setMessage("Hi!")}>Hi!</button>
      <button onClick={() => setMessage("你好!")}>你好!</button>
    </div>
  );
}

export default GreetingBox;