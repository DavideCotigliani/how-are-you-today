import moods from "../data/mood";

const MoodSelector = ({ setMood }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h2>Come ti senti oggi?</h2>
          {Object.keys(moods).map((key) => (
        <button
          key={key}
          onClick={() => setMood(key)}
          style={{
            margin: "0.5rem",
            padding: "1rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
            backgroundColor: moods[key].color,
            color: "#fff",
            transition: "0.3s"
          }}
        >
          {moods[key].label}
              </button>
               ))}
          </div>
  )
}

export default MoodSelector
