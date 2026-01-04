import Header from "./components/Header";
import MoodSelector from "./components/MoodSelector";
import moods from "./data/mood";
function App() {
  const [currentMood, setCurrentMood] = useState(null);
  return (
    <>
      <Header
  currentMood={currentMood}
  moodData={currentMood ? moods[currentMood] : null}
/>
      <MoodSelector/>
    </>
  )
}

export default App
