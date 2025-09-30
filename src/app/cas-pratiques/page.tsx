'use client';

import { useState } from 'react';
import Link from 'next/link';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { FileText, CheckCircle, ChevronDown, ChevronRight } from 'lucide-react';

interface CasePractice {
  id: number;
  title: string;
  scenario: string;
  questions: string[];
  answers: string[];
  methodology: string[];
}

const cases: CasePractice[] = [
  {
    id: 1,
    title: "Analyse d'une pratique du XIXe siècle",
    scenario: "Madame Dubois, mère de famille bourgeoise en 1890, suit scrupuleusement les conseils de son médecin : bains quotidiens à l'eau bouillie, stérilisation de tous les objets, horaires de tétée fixes toutes les 3 heures, interdiction de prendre l'enfant dans les bras en dehors des soins. L'enfant pleure souvent mais elle résiste à l'envie de le consoler.",
    questions: [
      "Identifiez les éléments caractéristiques de la puériculture pastorienne dans ce cas.",
      "Analysez les conséquences possibles de ces pratiques sur le développement de l'enfant.",
      "Expliquez le paradoxe entre l'intention de bien faire et les effets potentiellement négatifs."
    ],
    answers: [
      "Éléments pastoriens : hygiène stricte (bains à l'eau bouillie, stérilisation), horaires rigides (tétées toutes les 3h), répression affective (interdiction de consoler), médicalisation des pratiques.",
      "Conséquences possibles : troubles de l'attachement, stress chronique chez l'enfant, difficultés dans le développement émotionnel, relation mère-enfant perturbée par les règles strictes.",
      "Paradoxe : l'intention de protéger l'enfant des maladies (révolution pastorienne) conduit à négliger ses besoins affectifs fondamentaux, créant un déséquilibre entre soins physiques et besoins psychologiques."
    ],
    methodology: [
      "Identifier la période historique et ses caractéristiques",
      "Repérer les pratiques spécifiques à l'époque",
      "Analyser les motivations sous-jacentes",
      "Évaluer les conséquences à court et long terme",
      "Mettre en perspective avec les connaissances actuelles"
    ]
  },
  {
    id: 2,
    title: "Évolution des pratiques alimentaires",
    scenario: "En 1920, le Dr Martin recommande à ses patientes d'utiliser le nouveau lait en poudre 'révolutionnaire' plutôt que l'allaitement maternel, jugé 'moins hygiénique'. Il prescrit des horaires stricts, des quantités précises et des pesées quotidiennes. En 1960, le Dr Rousseau, influencé par les nouvelles théories, conseille l'allaitement à la demande et l'écoute des besoins de l'enfant.",
    questions: [
      "Comparez les deux approches et identifiez les facteurs d'évolution.",
      "Analysez l'impact de l'industrialisation sur les pratiques alimentaires.",
      "Expliquez le rôle des découvertes psychologiques dans ce changement."
    ],
    answers: [
      "1920 : approche médicalisée, standardisée, privilégiant l'artificiel. 1960 : approche individualisée, naturelle, centrée sur la relation. Facteurs : influence de la psychanalyse, remise en question de la rigidité, valorisation du lien mère-enfant.",
      "L'industrialisation a permis le développement des laits artificiels, créant une alternative à l'allaitement maternel, mais aussi une dépendance aux produits manufacturés et une perte de confiance dans les capacités naturelles.",
      "Les découvertes psychologiques (Spock, Dolto) ont mis en évidence l'importance des besoins émotionnels, de la relation d'attachement et de l'adaptation aux rythmes individuels de l'enfant."
    ],
    methodology: [
      "Comparer les pratiques de deux époques",
      "Identifier les facteurs de changement",
      "Analyser l'influence des contextes scientifiques et sociaux",
      "Évaluer les avantages et inconvénients de chaque approche",
      "Synthétiser l'évolution des mentalités"
    ]
  },
  {
    id: 3,
    title: "Impact de Françoise Dolto",
    scenario: "En 1975, une jeune mère lit les ouvrages de Françoise Dolto et découvre que son bébé de 6 mois 'comprend tout'. Elle commence à lui parler de ses émotions, à expliquer les situations, à respecter ses refus alimentaires. Sa belle-mère, élevée dans la tradition pastorienne, s'inquiète de cette 'permissivité' et craint que l'enfant devienne 'capricieux'.",
    questions: [
      "Analysez le conflit générationnel révélé par cette situation.",
      "Expliquez les apports révolutionnaires de Françoise Dolto.",
      "Évaluez les risques et bénéfices de cette nouvelle approche."
    ],
    answers: [
      "Conflit entre deux paradigmes : l'ancien (discipline, contrôle, enfant objet) et le nouveau (écoute, respect, enfant sujet). Tension entre tradition familiale et innovations scientifiques, entre autorité et bienveillance.",
      "Apports de Dolto : reconnaissance de l'enfant comme personne, importance de la parole et de l'explication, respect des émotions infantiles, valorisation de l'autonomie progressive, révolution de l'écoute.",
      "Bénéfices : meilleur développement émotionnel, relation plus authentique, confiance en soi renforcée. Risques potentiels : manque de limites, difficulté à poser un cadre, confusion des rôles parent-enfant."
    ],
    methodology: [
      "Identifier les enjeux générationnels",
      "Analyser les apports théoriques majeurs",
      "Évaluer l'impact pratique des nouvelles approches",
      "Peser les avantages et les limites",
      "Contextualiser dans l'évolution sociale"
    ]
  }
];

export default function CasPratiquesPage() {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);
  const [showAnswers, setShowAnswers] = useState<{ [key: number]: boolean }>({});
  const [analysisStarted, setAnalysisStarted] = useState(false);

  const toggleCase = (caseId: number) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  const toggleAnswers = (caseId: number) => {
    setShowAnswers(prev => ({
      ...prev,
      [caseId]: !prev[caseId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-purple-100 p-3 rounded-full">
              <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">Cas Pratiques</h1>
          </div>

          {!analysisStarted ? (
            <div className="text-center py-8">
              <div className="mb-6">
                <p className="text-lg text-gray-700 mb-4">
                  Analysez des situations concrètes en appliquant vos connaissances historiques.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-purple-900 mb-2">Ce que vous allez analyser :</h3>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Pratiques du XIXe siècle et puériculture pastorienne</li>
                    <li>• Évolution des pratiques alimentaires</li>
                    <li>• Impact de Françoise Dolto sur l&apos;éducation</li>
                    <li>• Méthodologies d&apos;analyse historique</li>
                    <li>• Enjeux sociaux et transformations</li>
                  </ul>
                </div>
              </div>
              <button
                onClick={() => setAnalysisStarted(true)}
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg"
              >
                Commencer l&apos;Analyse
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6 sm:mb-8">
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 sm:p-6 rounded">
                  <h2 className="text-base sm:text-lg font-semibold text-indigo-900 mb-2 sm:mb-3">Objectifs</h2>
                  <p className="text-indigo-800 mb-3 sm:mb-4 text-sm sm:text-base">
                    Ces cas pratiques vous permettent d&apos;appliquer vos connaissances sur l&apos;histoire 
                    des puéricultures à des situations concrètes. Analysez chaque scenario en 
                    mobilisant les concepts étudiés.
                  </p>
                  <div className="bg-white p-3 sm:p-4 rounded">
                    <p className="text-indigo-900 font-medium text-sm sm:text-base">
                      💡 <strong>Conseil :</strong> Prenez le temps de réfléchir avant de consulter les corrections.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {cases.map((casePractice) => (
                  <div key={casePractice.id} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{casePractice.title}</h3>
                        <button
                          onClick={() => toggleCase(casePractice.id)}
                          className="flex items-center gap-2 px-3 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium self-start sm:self-auto"
                        >
                          {expandedCase === casePractice.id ? (
                            <>
                              <ChevronDown className="h-4 w-4" />
                              Réduire
                            </>
                          ) : (
                            <>
                              <ChevronRight className="h-4 w-4" />
                              Développer
                            </>
                          )}
                        </button>
                      </div>

                      {expandedCase === casePractice.id && (
                        <div className="space-y-4 sm:space-y-6">
                          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Scenario</h4>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{casePractice.scenario}</p>
                          </div>

                          <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
                            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Questions d&apos;analyse</h4>
                            <ol className="space-y-2 sm:space-y-3">
                              {casePractice.questions.map((question, index) => (
                                <li key={index} className="flex items-start gap-2 sm:gap-3">
                                  <span className="bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                                    {index + 1}
                                  </span>
                                  <span className="text-blue-900 text-sm sm:text-base leading-relaxed">{question}</span>
                                </li>
                              ))}
                            </ol>
                          </div>

                          <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg">
                            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Méthodologie</h4>
                            <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg">
                              <ul className="space-y-1 sm:space-y-2">
                                {casePractice.methodology.map((step, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-600 mt-1 flex-shrink-0" />
                                    <span className="text-yellow-800 text-sm sm:text-base leading-relaxed">{step}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="border-t pt-4 sm:pt-6">
                            <button
                              onClick={() => toggleAnswers(casePractice.id)}
                              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base"
                            >
                              {showAnswers[casePractice.id] ? 'Masquer les corrections' : 'Voir les corrections'}
                            </button>

                            {showAnswers[casePractice.id] && (
                              <div className="mt-4 sm:mt-6 bg-green-50 p-4 sm:p-6 rounded-lg">
                                <h4 className="text-base sm:text-lg font-semibold text-green-900 mb-3 sm:mb-4">Éléments de correction</h4>
                                <div className="space-y-3 sm:space-y-4">
                                  {casePractice.answers.map((answer, index) => (
                                    <div key={index} className="bg-white p-3 sm:p-4 rounded border-l-4 border-green-500">
                                      <div className="flex items-start gap-2 sm:gap-3">
                                        <span className="bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                                          {index + 1}
                                        </span>
                                        <p className="text-green-800 text-sm sm:text-base leading-relaxed">{answer}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-12 bg-gray-50 border-l-4 border-gray-500 p-4 sm:p-6 rounded">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Conseils pour l&apos;analyse</h2>
                <ul className="space-y-2 sm:space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Situez chaque cas dans son contexte historique précis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Identifiez les influences scientifiques et sociales de l&apos;époque</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Analysez les conséquences à court et long terme des pratiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Établissez des liens avec les connaissances actuelles</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 sm:mt-8 text-center">
                <Link 
                  href="/quiz"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  Continuer vers le Quiz
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-4 text-center">
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base"
                >
                  Retour au plan du cours
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}