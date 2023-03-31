import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide Message" : "Show Message"}
      </button>
      {showMessage && <p>Hello, world!</p>}
    </div>
  );
}
