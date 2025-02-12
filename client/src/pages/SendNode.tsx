import React, { useState, useEffect } from "react";
import "../styles/send-note.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterNavbar from "../components/FooterNavbar";

interface NotePosition {
  top: number;
  left: number;
}

interface Note {
  text: string;
  color: string;
  rotation: string;
}

const KindnessJarPage = () => {
  const [notePositions, setNotePositions] = useState<NotePosition[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [senderInfo, setSenderInfo] = useState({ userId: "", userName: "" });
  const [isLoading, setIsLoading] = useState(true);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const floatingNotes: Note[] = [
    {
      text: "I thank Pooja for helping me with Duralife website visuals",
      color: "note-orange",
      rotation: "rotate-neg-12",
    },
    {
      text: "The delivery could have been better with some intervention",
      color: "note-purple",
      rotation: "rotate-6",
    },
    {
      text: "I thank Pooja for helping me with Chronicle website visuals",
      color: "note-orange",
      rotation: "rotate-3",
    },
    {
      text: "The delivery could have been better with some intervention",
      color: "note-blue",
      rotation: "rotate-neg-6",
    },
    {
      text: "The delivery could have been better with some intervention",
      color: "note-purple",
      rotation: "rotate-12",
    },
  ];

  const jarNotes: Note[] = [
    {
      text: "Thank you for your helpful feedback",
      color: "note-orange",
      rotation: "rotate-12",
    },
    {
      text: "I appreciate your kindness",
      color: "note-purple",
      rotation: "rotate-12",
    },
    {
      text: "Your support means a lot",
      color: "note-blue",
      rotation: "rotate-12",
    },
  ];

  useEffect(() => {
    // Fetch users and sender info when the component mounts
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/all-user`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              company_id: "62fafe5c-851b-4a06-a906-d60b1833cc9b",
            }),
          }
        );
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        toast.error("Failed to fetch users.");
        setIsLoading(false);
      }
    };

    const fetchSenderInfo = () => {
      const data = JSON.parse(localStorage.getItem("userInfo") || "{}");
      setSenderInfo({ userId: data.userId, userName: data.userName });
    };

    fetchUsers();
    fetchSenderInfo();

    setNotePositions(
      floatingNotes.map(() => ({
        top: Math.random() * 30,
        left: Math.random() * 90,
      }))
    );
  }, []);

  const handleSendKindness = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const receiverId = form.elements.namedItem("receiver") as HTMLInputElement;
    const message = form.elements.namedItem("message") as HTMLTextAreaElement;
    const kindnessType = form.elements.namedItem(
      "kindnessType"
    ) as HTMLSelectElement;

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/send-kindness-note`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            senderId: senderInfo.userId,
            receiverId: receiverId.value,
            kindnessType: kindnessType.value,
            message: message.value,
          }),
        }
      );
      const data = await response.json();
      console.log(data.message);
      toast.success("Kindness note sent successfully!");
    } catch (error) {
      console.error("Failed to send kindness note:", error);
      toast.error("Failed to send kindness note.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="page-container">
        <ToastContainer />
        {/* Floating Notes */}
        <div className="floating-notes">
          <div
            key={`floating-0`}
            className={`floating-note note-orange rotate-neg-12`}
            style={{
              transform: "rotate(14deg)",
              top: "-88px",
              left: "122px",
            }}
          >
            <p className="note-text">
              I thank Pooja for helping me with Duralife website visuals
            </p>
            <p className="note-label">Gratitude</p>
          </div>
          <div
            key={`floating-1`}
            className={`floating-note note-purple rotate-6`}
            style={{
              transform: "rotate(-18deg)",
              top: "13px",
              left: "50%",
            }}
          >
            <p className="note-text">
              The delivery could have been better with some intervention
            </p>
            <p className="note-label">Gratitude</p>
          </div>
          <div
            key={`floating-0`}
            className={`floating-note note-blue rotate-neg-12`}
            style={{
              top: "34%",
              left: "45%",
              transform: "rotate(2deg)",
            }}
          >
            <p className="note-text">
              I thank Pooja for helping me with Chronicle website visuals
            </p>
            <p className="note-label">Gratitude</p>
          </div>
          <div
            key={`floating-0`}
            className={`floating-note note-purple rotate-neg-12`}
            style={{
              top: "70%",
              left: "7%",
              transform: "rotate(-24deg)",
            }}
          >
            <p className="note-text">
              The delivery could have been better with some intervention
            </p>
            <p className="note-label">Gratitude</p>
          </div>
          <div
            key={`floating-0`}
            className={`floating-note note-orange rotate-neg-12`}
            style={{
              transform: "rotate(-23deg)",
              top: "45%",
              left: "47%",
            }}
          >
            <p className="note-text">
              I thank Pooja for helping me with Chronicle website visuals
            </p>
            <p className="note-label">Gratitude</p>
          </div>
          <div
            key={`floating-0`}
            className={`floating-note note-purple rotate-neg-12`}
            style={{
              transform: "rotate(14deg)",
              left: "90%",
              top: "20%",
            }}
          >
            <p className="note-text">
              The delivery could have been better with some intervention
            </p>
            <p className="note-label">Gratitude</p>
          </div>
          <div
            key={`floating-0`}
            className={`floating-note note-purple rotate-neg-12`}
            style={{
              top: "57%",
              left: "44%",
              transform: "rotate(13deg)",
            }}
          >
            <p className="note-text">
              The delivery could have been better with some intervention
            </p>
            <p className="note-label">Gratitude</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="full-container">
          <div className="main-content">
            <h1 className="title">The Kindness Jar</h1>

            <p className="paragraph">
              Kindness is the most precious gift we can give one another every
              year. It is expressed through caring, by being helpful and being
              gentle!
            </p>

            <p className="paragraph">
              Thank you and gratitude notes, apologies are means of sharing
              one's kindness with another.
            </p>

            <p className="paragraph">
              While Kindness is always perceived as a positive comment, but in
              reality, even feedback is being kind in disguise. It takes care to
              step-up to someone to let them know they can change.
            </p>

            <p className="paragraph">
              Why wait till the end of the year to tell someone! Hit that button
              to share your kindness with another.
            </p>
            <div className="button-container">
              <button className="button" onClick={toggleModal}>
                Gift Kindness
              </button>

              <button
                onClick={() => (window.location.href = "/check-notes")}
                className="modal-submit"
              >
                Check Notes
              </button>
            </div>
          </div>

          {/* Modal Component */}
          {isModalOpen && (
            <div className="modal-background">
              <div className="modal">
                <button className="modal-close" onClick={toggleModal}>
                  X
                </button>
                <h2>Gift your Kindness</h2>
                <form onSubmit={handleSendKindness}>
                  <label>
                    Gifting to
                    <select name="receiver">
                      {users.map((user: any) => (
                        <option key={user.user_id} value={user.user_id}>
                          {user.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Choose your Kindness
                    <select name="kindnessType">
                      <option value="gratitude">Appreciation</option>
                      <option value="feedback">Insight</option>
                      <option value="apology">Regret</option>
                      <option value="others">Unspecified</option>
                    </select>
                  </label>
                  <label>
                    Drop your note here
                    <textarea
                      name="message"
                      placeholder="Drop your note here"
                    ></textarea>
                  </label>
                  <button type="submit" className="modal-submit">
                    Gift Kindness
                  </button>
                </form>
              </div>
            </div>
          )}
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

              {/* Jar body with fixed cards */}
              <div className="jar-body">
                {jarNotes.map((note, index) => (
                  <div
                    key={`jar-${index}`}
                    className={`jar-note ${note.color} jar-note-${index + 1}`}
                  >
                    <p className="note-text">{note.text}</p>
                    <p className="note-label">Gratitude</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar">
        <FooterNavbar userid={senderInfo.userId} />
      </div>
    </>
  );
};

export default KindnessJarPage;
