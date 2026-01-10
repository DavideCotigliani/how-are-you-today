import React from 'react'

//props destrutturate (quale umore e i dati dell'umore)
const Header = ({ currentMood, moodData }) => {
    const background = currentMood ? `linear-gradient(135deg, ${moodData.color}, #00000040)`
  : "#f5f5f5";  //se l'utente ha selezionato un umore, si crea un gradiente che parte dal colore dell'umore fino al nero
  return (
    <header
      style={{
        background,
        padding: "3rem",
        textAlign: "center",
        color: "#151718ff",
        transition: "0.5s",
        borderRadius: "0 0 1rem 1rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem", }}>What's the mood today?</h1>
      <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
        {currentMood       //se c'è un umore selezionato, lo mostra
          ? (
            <>
              Oggi ti senti {moodData.label} <br />
              {moodData.message}`
            </>
          )
          : "Seleziona il tuo umore e lascia che il sito si adatti a te"}
      </p>
    </header>
  )
}

export default Header
