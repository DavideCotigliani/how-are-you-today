import Header from "./components/Header";
import MoodSelector from "./components/MoodSelector";
import moods from "./data/mood";
import { useState } from "react";
function App() {
  const [currentMood, setCurrentMood] = useState(null);
  return (
    <>
      <Header
  currentMood={currentMood}
  moodData={currentMood ? moods[currentMood] : null}
/>
      <MoodSelector setMood={ setCurrentMood} />
    </>
  )
}

export default App
