import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BookOpen, CheckCircle, AlertCircle, Target, Brain, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function ExercicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Target className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">Exercices d&apos;Approfondissement</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Objectifs des Exercices
              </h2>
              <p className="text-blue-800 mb-2">
                Ces exercices vous permettront de :
              </p>
              <ul className="text-blue-800 space-y-1 ml-4">
                <li>• <strong>Approfondir</strong> votre compréhension des concepts clés</li>
                <li>• <strong>Analyser</strong> les transformations historiques de la puériculture</li>
                <li>• <strong>Développer</strong> votre esprit critique sur les enjeux sociaux</li>
                <li>• <strong>Synthétiser</strong> les connaissances acquises</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mb-8">
              <h2 className="text-xl font-semibold text-green-900 mb-4 flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Exercice 1 : Analyse Chronologique
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-green-900 mb-2">📋 Consigne</h3>
                  <p className="text-green-800 mb-3">
                    Créez une frise chronologique détaillée des évolutions de la puériculture 
                    de 1860 à 1970, en identifiant les ruptures et continuités.
                  </p>
                  <div className="bg-green-100 p-3 rounded">
                    <h4 className="font-semibold text-green-900 mb-2">Éléments à inclure :</h4>
                    <ul className="text-green-800 space-y-1 text-sm">
                      <li>• Dates clés et découvertes scientifiques</li>
                      <li>• Personnages influents (Pasteur, Spock, Dolto, etc.)</li>
                      <li>• Évolutions des pratiques (alimentation, hygiène, éducation)</li>
                      <li>• Contextes historiques (guerres, évolutions sociales)</li>
                      <li>• Transformations du rôle maternel</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-green-900 mb-2">🎯 Objectif pédagogique</h3>
                  <p className="text-green-800">
                    Développer une vision d&apos;ensemble des transformations et identifier 
                    les facteurs de changement dans l&apos;histoire de la puériculture.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded mb-8">
              <h2 className="text-xl font-semibold text-orange-900 mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Exercice 2 : Étude Comparative
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-orange-900 mb-2">📊 Consigne</h3>
                  <p className="text-orange-800 mb-3">
                    Comparez les approches de la puériculture pastorienne et de la nouvelle 
                    puériculture selon les critères suivants :
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-orange-100 p-3 rounded">
                      <h4 className="font-semibold text-orange-900 mb-2">Puériculture Pastorienne</h4>
                      <ul className="text-orange-800 space-y-1 text-sm">
                        <li>• Conception de l&apos;enfant</li>
                        <li>• Rôle de la mère</li>
                        <li>• Pratiques d&apos;alimentation</li>
                        <li>• Approche de l&apos;hygiène</li>
                        <li>• Rapport à l&apos;affection</li>
                      </ul>
                    </div>
                    <div className="bg-orange-100 p-3 rounded">
                      <h4 className="font-semibold text-orange-900 mb-2">Nouvelle Puériculture</h4>
                      <ul className="text-orange-800 space-y-1 text-sm">
                        <li>• Conception de l&apos;enfant</li>
                        <li>• Rôle de la mère</li>
                        <li>• Pratiques d&apos;alimentation</li>
                        <li>• Approche de l&apos;hygiène</li>
                        <li>• Rapport à l&apos;affection</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-orange-900 mb-2">🔍 Questions d&apos;analyse</h3>
                  <ul className="text-orange-800 space-y-2">
                    <li>• Quels sont les facteurs qui expliquent ces transformations ?</li>
                    <li>• En quoi ces évolutions reflètent-elles les changements sociaux ?</li>
                    <li>• Quelles continuités peut-on identifier malgré les ruptures ?</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded mb-8">
              <h2 className="text-xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Exercice 3 : Réflexion Critique
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-purple-900 mb-2">💭 Sujet de réflexion</h3>
                  <p className="text-purple-800 mb-3">
                    <strong>&quot;La médicalisation de la puériculture : progrès ou contrôle social ?&quot;</strong>
                  </p>
                  <p className="text-purple-800">
                    Rédigez une dissertation de 2-3 pages analysant cette question en vous appuyant 
                    sur les éléments du cours et vos connaissances personnelles.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-purple-900 mb-2">📝 Plan suggéré</h3>
                  <div className="space-y-2">
                    <div className="bg-purple-100 p-2 rounded">
                      <strong className="text-purple-900">I. Les bénéfices de la médicalisation</strong>
                      <p className="text-purple-800 text-sm">Baisse de la mortalité, amélioration des soins, professionnalisation</p>
                    </div>
                    <div className="bg-purple-100 p-2 rounded">
                      <strong className="text-purple-900">II. Les aspects de contrôle social</strong>
                      <p className="text-purple-800 text-sm">Normalisation des pratiques, pouvoir médical, culpabilisation des mères</p>
                    </div>
                    <div className="bg-purple-100 p-2 rounded">
                      <strong className="text-purple-900">III. Une évolution ambivalente</strong>
                      <p className="text-purple-800 text-sm">Bilan nuancé, enjeux contemporains, perspectives d&apos;évolution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-8">
              <h2 className="text-xl font-semibold text-yellow-900 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Exercice 4 : Synthèse Personnelle
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-yellow-900 mb-2">🎨 Consigne créative</h3>
                  <p className="text-yellow-800 mb-3">
                    Choisissez l&apos;une des modalités suivantes pour synthétiser vos apprentissages :
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-yellow-100 p-3 rounded">
                      <h4 className="font-semibold text-yellow-900 mb-2">Option A : Carte mentale</h4>
                      <p className="text-yellow-800 text-sm">
                        Créez une carte mentale illustrant les interconnexions entre les différents 
                        concepts, personnages et évolutions étudiés.
                      </p>
                    </div>
                    <div className="bg-yellow-100 p-3 rounded">
                      <h4 className="font-semibold text-yellow-900 mb-2">Option B : Infographie</h4>
                      <p className="text-yellow-800 text-sm">
                        Réalisez une infographie présentant visuellement l&apos;évolution de la 
                        puériculture avec statistiques et éléments marquants.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-yellow-900 mb-2">🎯 Critères d&apos;évaluation</h3>
                  <ul className="text-yellow-800 space-y-1">
                    <li>• <strong>Exhaustivité :</strong> Tous les éléments importants sont présents</li>
                    <li>• <strong>Clarté :</strong> L&apos;organisation est logique et lisible</li>
                    <li>• <strong>Créativité :</strong> Originalité dans la présentation</li>
                    <li>• <strong>Précision :</strong> Exactitude des informations et des dates</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded">
              <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Ressources Complémentaires
              </h2>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">📚 Pour aller plus loin</h3>
                  <ul className="text-gray-800 space-y-1 text-sm">
                    <li>• Relisez attentivement les trois sections du cours</li>
                    <li>• Consultez les cas pratiques pour des exemples concrets</li>
                    <li>• Testez vos connaissances avec le quiz interactif</li>
                    <li>• Recherchez des sources primaires (textes d&apos;époque, témoignages)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <Link 
              href="/cas-pratiques" 
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              ← Cas Pratiques
            </Link>
            <Link 
              href="/" 
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retour au Plan →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}