import React from 'react'
import Quiz from "../img/quiz.svg"
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import "./welcome.css"

export default function Welcome() {

  const quizState = useContext(QuizContext)//me da acesso ao obj do QuizProvider
  return (
    <div id='welcome'>
      <h2>seja bem vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Inicio do quiz" />
    </div>
  )
}
