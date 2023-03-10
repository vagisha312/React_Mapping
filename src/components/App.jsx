import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(emojiterm) {
  return (
    <Card
      key={emojiterm.id}
      emoji={emojiterm.emoji}
      name={emojiterm.name}
      description={emojiterm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        {" "}
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
