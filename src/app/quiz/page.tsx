'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { HelpCircle, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle révolution scientifique a transformé la puériculture au XIXe siècle ?",
    options: [
      "La révolution industrielle",
      "La révolution pastorienne", 
      "La révolution freudienne",
      "La révolution darwinienne"
    ],
    correct: 1,
    explanation: "La révolution pastorienne, avec la théorie microbienne de Louis Pasteur, a révolutionné les pratiques d'hygiène et de soins aux enfants."
  },
  {
    id: 2,
    question: "Pourquoi le biberon était-il surnommé 'biberon tueur' au XIXe siècle ?",
    options: [
      "Il était trop lourd pour les bébés",
      "Il causait des infections mortelles",
      "Il était fabriqué avec des matériaux toxiques",
      "Il empêchait l'allaitement maternel"
    ],
    correct: 1,
    explanation: "Les biberons artisanaux, difficiles à nettoyer et souvent contaminés, causaient des infections graves et une mortalité infantile élevée."
  },
  {
    id: 3,
    question: "Qui a révolutionné la puériculture après 1945 avec l'idée que 'l'enfant est une personne' ?",
    options: [
      "Benjamin Spock",
      "Laurence Pernoud",
      "Françoise Dolto",
      "Maria Montessori"
    ],
    correct: 2,
    explanation: "Françoise Dolto, psychanalyste française, a révolutionné la compréhension de l'enfant en affirmant qu'il est une personne dès sa naissance."
  },
  {
    id: 4,
    question: "Quelle était la caractéristique principale de la puériculture pastorienne ?",
    options: [
      "La liberté d'expression des enfants",
      "L'hygiène stricte et la répression affective",
      "L'allaitement à la demande",
      "L'écoute des besoins individuels"
    ],
    correct: 1,
    explanation: "La puériculture pastorienne privilégiait l'hygiène stricte, souvent au détriment des manifestations affectives qui étaient réprimées."
  },
  {
    id: 5,
    question: "Quel changement majeur caractérise la nouvelle puériculture après 1945 ?",
    options: [
      "Le retour aux méthodes traditionnelles",
      "L'industrialisation de l'alimentation",
      "La place centrale de l'amour et de l'épanouissement",
      "La médicalisation accrue"
    ],
    correct: 2,
    explanation: "La nouvelle puériculture place l'amour et l'épanouissement émotionnel au centre, valorisant les manifestations affectives autrefois réprimées."
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  const isQuizComplete = currentQuestion === questions.length - 1 && showResult;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-red-100 p-3 rounded-full">
              <HelpCircle className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">Quiz Interactif</h1>
          </div>

          {!isQuizComplete ? (
            <div>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">
                    Question {currentQuestion + 1} sur {questions.length}
                  </span>
                  <span className="text-sm text-gray-600">
                    Score : {score}/{questions.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                  {questions[currentQuestion].question}
                </h2>
                
                <div className="space-y-2 sm:space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => !showResult && handleAnswer(index)}
                      disabled={showResult}
                      className={`w-full p-3 sm:p-4 text-left rounded-lg border-2 transition-all text-sm sm:text-base ${
                        showResult
                          ? index === questions[currentQuestion].correct
                            ? 'border-green-500 bg-green-50 text-green-800'
                            : index === selectedAnswer
                            ? 'border-red-500 bg-red-50 text-red-800'
                            : 'border-gray-200 bg-gray-50 text-gray-600'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        {showResult && (
                          <div className="flex-shrink-0">
                            {index === questions[currentQuestion].correct ? (
                              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                            ) : index === selectedAnswer ? (
                              <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                            ) : null}
                          </div>
                        )}
                        <span className="leading-relaxed">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {showResult && (
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <p className="text-blue-800 text-sm sm:text-base">
                      <strong>Explication :</strong> {questions[currentQuestion].explanation}
                    </p>
                  </div>
                )}
              </div>

              {showResult && (
                <div className="flex justify-center">
                  <button
                    onClick={nextQuestion}
                    className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
                  >
                    {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-6 sm:mb-8">
                <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">
                  {score >= 4 ? '🎉' : score >= 3 ? '👍' : '📚'}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Quiz terminé !
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-6">
                  Votre score : <span className="font-bold text-blue-600">{score}/{questions.length}</span>
                </p>
                
                <div className="bg-gray-100 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Évaluation</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {score === 5 && "Excellent ! Vous maîtrisez parfaitement l'histoire des puéricultures."}
                    {score === 4 && "Très bien ! Vous avez une bonne compréhension du sujet."}
                    {score === 3 && "Bien ! Quelques révisions vous permettront de parfaire vos connaissances."}
                    {score < 3 && "Il serait utile de revoir les sections du cours pour mieux assimiler les concepts."}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={resetQuiz}
                  className="bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <RotateCcw className="h-4 w-4" />
                  Recommencer
                </button>
                <a
                  href="/cas-pratiques"
                  className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base text-center"
                >
                  Cas pratiques →
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <a 
            href="/section-3" 
            className="bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors text-sm sm:text-base text-center w-full sm:w-auto"
          >
            ← Section III
          </a>
          <div></div>
        </div>
      </div>
    </div>
  );
}