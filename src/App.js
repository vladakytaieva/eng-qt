import {useState, useEffect} from "react"
import words from "./db"

function App() {
    const [mode, setMode] = useState('eng')
    const [word, setWord] = useState('')
    const [correct, setCorrect] = useState('')
    const [answer, setAnswer] = useState('')
    const [score, setScore] = useState(0)
    const [total, setTotal] = useState(0)
    

    useEffect(() => {
        selectWord()
        setTotal(0)
        setScore(0)
    }, [mode])

    const selectWord = () => {
        const w = words[Math.floor(Math.random() * words.length)]
        if (mode === 'eng') {
            setWord(w.eng)
            setCorrect(w.qt)
        } else {
            setWord(w.qt)
            setCorrect(w.eng)
        }
        setTotal(total + 1)
    }

    const checkAnswer = (e) => {
        e.preventDefault()
        if (answer === correct) {
            console.log('well done')
            setScore(score + 1)
        }
        setAnswer('')
        selectWord()
    }
    
    const changeMode = (e) => {
        setMode(e.target.id)
    }

    return (
        <div className="container">
            <header>
                <button 
                    id="eng" 
                    className={`btn ${mode === "eng" ? "selected" : ''}`}
                    onClick={changeMode}
                >Eng-Qt</button>
                <button 
                    id="qt" 
                    className={`btn ${mode === "qt" ? "selected" : ''}`}
                    onClick={changeMode}
                >Qt-Eng</button>
            </header>
            <p className="message">Write {mode === 'eng' ? 'Q-transcription' : 'English word'} for the following {mode === 'eng' ? 'English word' : 'Q-transcription'}:</p>
            <p className="word">{word}</p>
            <form onSubmit={checkAnswer}>
                <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}></input><br/>
                <button disabled={!answer} className="submit">Submit</button>
            </form>
            <p>Score: {score}/{total}</p>
        </div>
    )
}

export default App