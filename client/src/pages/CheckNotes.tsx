import React, { useEffect, useState } from "react";
import "../styles/check-notes.css"; // Assuming styles are defined in CheckNotes.css
import FooterNavbar from "../components/FooterNavbar";

interface Note {
  _id: string;
  kindnessType: string;
  message: string;
  date: string;
  senderName: string; // Added senderName to the Note interface
}

interface UserInfo {
  userId: string;
}

const CheckNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLastDayOfMonth, setIsLastDayOfMonth] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const today: Date = new Date();
    const lastDay: Date = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    );
    setIsLastDayOfMonth(today.getDate() === lastDay.getDate());

    const userInfo: UserInfo = JSON.parse(
      localStorage.getItem("userInfo") || "{}"
    );
    setUserId(userInfo.userId);

    const fetchNotes = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/get-monthly-kindness-notes`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({userId: userInfo.userId}),
          }
        );
        const data: Note[] = (await response.json()) as Note[];
        setNotes(data);
      } catch (error) {
        console.error("Error fetching kindness notes:", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <>
      <div
        className={`notes-container`}
      >
        {notes.map((note: Note) => (
          <div key={note._id} className="note-card">
            <h3 className="note-title">{note.kindnessType}</h3>
            <p className="note-message">{note.message}</p>
            <small className="note-date">
              {new Date(note.date).toLocaleDateString()}
            </small>            
          </div>
        ))}
      </div>
      <div className="navbar">
        <FooterNavbar userid={userId} />
      </div>
    </>
  );
};

export default CheckNotes;
