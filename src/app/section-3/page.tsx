import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Brain, Heart, Smile, BookOpen, Star } from 'lucide-react';

export default function Section3Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-purple-100 p-3 rounded-full">
              <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center sm:text-left">Section III : La Nouvelle Puériculture (après 1945)</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <h2 className="text-xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Révolution Psychologique
              </h2>
              <p className="text-purple-800">
                Après 1945, une révolution s&apos;opère dans la puériculture : l&apos;influence de la 
                psychanalyse et de la psychologie transforme radicalement l&apos;approche de l&apos;enfance. 
                L&apos;enfant n&apos;est plus seulement un corps à soigner, mais une personne à épanouir.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Les Figures Emblématiques</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Benjamin Spock
                </h3>
                <p className="text-blue-800 mb-3">
                  Pédiatre américain révolutionnaire qui prône une approche plus souple et 
                  affectueuse de l&apos;éducation.
                </p>
                <div className="bg-blue-100 p-3 rounded">
                  <p className="text-blue-900 font-medium text-sm">
                    &quot;Faites confiance à votre instinct maternel&quot;
                  </p>
                </div>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-pink-900 mb-3 flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Laurence Pernoud
                </h3>
                <p className="text-pink-800 mb-3">
                  Auteure française qui démocratise les conseils de puériculture avec 
                  &quot;J&apos;attends un enfant&quot;.
                </p>
                <div className="bg-pink-100 p-3 rounded">
                  <p className="text-pink-900 font-medium text-sm">
                    Approche bienveillante et accessible
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
                <Smile className="h-5 w-5" />
                Françoise Dolto : La Révolution de l&apos;Écoute
              </h3>
              <p className="text-green-800 mb-4">
                Psychanalyste française qui révolutionne la compréhension de l&apos;enfant en 
                affirmant que &quot;l&apos;enfant est une personne&quot; dès sa naissance.
              </p>
              <div className="bg-white p-4 rounded space-y-2">
                <p className="text-green-900"><strong>Principes clés :</strong></p>
                <ul className="text-green-800 space-y-1">
                  <li>• Respect de la parole de l&apos;enfant</li>
                  <li>• Importance du dialogue précoce</li>
                  <li>• Reconnaissance des émotions infantiles</li>
                  <li>• Valorisation de l&apos;autonomie progressive</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Transformation des Pratiques</h2>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-yellow-900 mb-2">Alimentation</h4>
                <p className="text-yellow-800 text-sm">
                  Horaires flexibles, respect des besoins individuels
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-orange-900 mb-2">Sommeil</h4>
                <p className="text-orange-800 text-sm">
                  Adaptation aux rythmes naturels de l&apos;enfant
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <h4 className="font-semibent text-red-900 mb-2">Éducation</h4>
                <p className="text-red-800 text-sm">
                  Encouragement de l&apos;expression et de la créativité
                </p>
              </div>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-8">
              <h2 className="text-xl font-semibold text-pink-900 mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Élisabeth Badinter et la Perspective Néo-Féministe
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-pink-900 mb-2">📚 Contribution intellectuelle</h3>
                  <p className="text-pink-800 mb-2">
                    <strong>Élisabeth Badinter</strong> apporte une perspective <strong>néo-féministe</strong> 
                    sur la question de la maternité et de l&apos;égalité des sexes.
                  </p>
                  <p className="text-pink-800">
                    Elle questionne la naturalisation de l&apos;amour maternel et analyse les enjeux 
                    de pouvoir dans les transformations de la puériculture.
                  </p>
                </div>

                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-pink-900 mb-2">⚖️ Enjeux d&apos;égalité</h3>
                  <p className="text-pink-800">
                    Badinter explore comment <strong>réconcilier l&apos;égalité des sexes</strong> avec 
                    les nouvelles exigences de la maternité moderne, questionnant les injonctions 
                    sociales pesant sur les femmes.
                  </p>
                </div>

                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-pink-900 mb-2">🔍 Analyse critique</h3>
                  <p className="text-pink-800">
                    Elle met en lumière les <strong>contradictions</strong> entre les discours 
                    d&apos;émancipation féminine et les nouvelles normes maternelles qui peuvent 
                    paradoxalement renforcer l&apos;assignation des femmes au foyer.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded mb-8">
              <h2 className="text-xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Le Rôle Central de l&apos;Amour
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-purple-900 mb-2">💝 Révolution affective</h3>
                  <p className="text-purple-800 mb-2">
                    L&apos;amour maternel devient le <strong>fondement de l&apos;éducation</strong>. 
                    Les pratiques rigides cèdent la place à une approche plus souple, centrée sur 
                    les besoins émotionnels de l&apos;enfant.
                  </p>
                  <p className="text-purple-800">
                    <em>&quot;Un enfant a besoin d&apos;amour comme une plante a besoin d&apos;eau&quot;</em> - 
                    Nouveau paradigme éducatif
                  </p>
                </div>

                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-purple-900 mb-2">🎯 Nouvelles responsabilités maternelles</h3>
                  <p className="text-purple-800 mb-2">
                    Les mères doivent désormais être <strong>à l&apos;écoute</strong>, comprendre les signaux 
                    de leur enfant et adapter leurs réponses.
                  </p>
                  <p className="text-purple-800">
                    Cette évolution transforme profondément le <strong>rôle maternel</strong> : 
                    de gardienne de l&apos;hygiène à accompagnatrice émotionnelle.
                  </p>
                </div>

                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-purple-900 mb-2">🌟 Légitimation des sentiments</h3>
                  <p className="text-purple-800">
                    Les manifestations affectives, autrefois réprimées, sont désormais 
                    <strong>encouragées et valorisées</strong>. L&apos;expression des émotions devient 
                    un élément central du développement de l&apos;enfant.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact Social et Culturel</h2>
            <p className="text-gray-700 mb-6">
              Cette transformation s&apos;inscrit dans un contexte plus large de changements sociaux : 
              émancipation féminine, évolution de la famille, influence des médias, et 
              démocratisation de l&apos;accès à l&apos;information.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Moyens mnémotechniques</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                  <strong>SPOCK :</strong> <em>Souplesse, Psychologie, Ouverture, Confiance, Kindness</em>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-green-500">
                  <strong>DOLTO :</strong> <em>Dialogue, Ouverture, Liberté, Tendresse, Ouïe</em>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <strong>Phrase mémo :</strong> &quot;Après 1945, l&apos;Amour Arrive Avec l&apos;Analyse&quot;
                </div>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-900 mb-3">Points clés à retenir</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Influence majeure de la psychanalyse et de la psychologie</li>
                <li>• Passage d&apos;une approche rigide à une approche flexible</li>
                <li>• Reconnaissance de l&apos;enfant comme personne à part entière</li>
                <li>• Valorisation de l&apos;amour et de l&apos;épanouissement émotionnel</li>
                <li>• Figures emblématiques : Spock, Pernoud, Dolto</li>
                <li>• Transformation des pratiques alimentaires, éducatives et affectives</li>
                <li>• Contexte social favorable aux changements</li>
              </ul>
            </div>
          </div>

          {/* Bouton Commencer */}
          <div className="mt-8 text-center">
            <a 
              href="/quiz" 
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-lg shadow-lg"
            >
              🎯 Passer au Quiz
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <a 
            href="/section-2" 
            className="bg-gray-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors text-center"
          >
            ← Section II
          </a>
          <a 
            href="/quiz" 
            className="bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
          >
            Quiz →
          </a>
        </div>
      </div>
    </div>
  );
}