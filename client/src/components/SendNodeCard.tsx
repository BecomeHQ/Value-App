import React, { useState, useEffect } from "react";
import "../styles/send-note.css";

interface Note {
  text: string;
  color: string;
  rotation: string;
}

interface NotePosition {
  top: number;
  left: number;
}

const SendNote = () => {
  const [notePositions, setNotePositions] = useState<NotePosition[]>([]);

  const notes: Note[] = [
    {
      text: "I thank Pooja for helping me with Duralife website visuals",
      color: "note-orange",
      rotation: "rotate-neg-12",
    },
    {
      text: "The delivery could have made better with some intervention",
      color: "note-purple",
      rotation: "rotate-6",
    },
    {
      text: "I thank Pooja for helping me with Chronicle website visuals",
      color: "note-orange",
      rotation: "rotate-3",
    },
    {
      text: "The delivery could have made better with some intervention",
      color: "note-blue",
      rotation: "rotate-neg-6",
    },
    {
      text: "The delivery could have made better with some intervention",
      color: "note-purple",
      rotation: "rotate-12",
    },
  ];

  useEffect(() => {
    setNotePositions(
      notes.map(() => ({
        top: Math.random() * 60,
        left: Math.random() * 60,
      }))
    );
  }, [notes]);

  return (
    <div className="page-container">
      {/* Floating Notes */}
      {notes.map((note, index) => (
        <div
          key={index}
          className={`note ${note.color} ${note.rotation}`}
          style={{
            top: `${notePositions[index]?.top || 0}%`,
            left: `${notePositions[index]?.left || 0}%`,
          }}
        >
          <p className="note-text">{note.text}</p>
          <p className="note-label">Gratitude</p>
        </div>
      ))}

      {/* Main Content */}
      <div className="main-content">
        <h1 className="title">The Kindness Jar</h1>

        <p className="paragraph">
          Kindness, is the most precious gift we can give one another ever year.
          It is expressed through caring, by being helpful and being gentle!
        </p>

        <p className="paragraph">
          Thank you and gratitude notes, apologies are means of sharing ones
          kindness with another.
        </p>

        <p className="paragraph">
          While Kindness is always perceived as a positive comment, but in
          reality, even a feedback is being kind in-disguise. It takes care to
          step-up to someone to let them know they can change.
        </p>

        <p className="paragraph">
          Why wait till the end of the year to tell someone! Hit that button to
          share your kindness to another.
        </p>

        <button className="button">Gift Kindness</button>
      </div>

      {/* Jar */}
      <div className="jar-container">
        <div className="jar-inner">
          {/* Lid */}
          <div className="jar-lid">
            <div className="lid-lines">
              <div className="lid-line"></div>
              <div className="lid-line"></div>
            </div>
          </div>

          {/* Jar body */}
          <div className="jar-body">
            <div className="jar-neck"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendNote;
