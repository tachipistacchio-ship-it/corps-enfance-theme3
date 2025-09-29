import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Users, Baby, Clock, Scale, AlertCircle } from 'lucide-react';

export default function Section2Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-orange-100 p-3 rounded-full">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">Section II : Évolution des Pratiques</h1>
          </div>

          {/* Bouton Commencer */}
          <div className="mb-8 text-center">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors shadow-lg">
              Commencer la Section II
            </button>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <h2 className="text-xl font-semibold text-orange-900 mb-3 flex items-center gap-2">
                <Baby className="h-5 w-5" />
                L&apos;Alimentation du Nourrisson
              </h2>
              <p className="text-orange-800">
                L&apos;évolution des pratiques alimentaires révèle les transformations profondes 
                de la société et des représentations de l&apos;enfance. Du biberon artisanal 
                aux laits industriels, une révolution s&apos;opère.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Le &quot;Biberon Tueur&quot;</h2>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-3">Un Fléau Sanitaire</h3>
                  <p className="text-red-800 mb-4">
                    Au XIXe siècle, les biberons artisanaux, difficiles à nettoyer et souvent 
                    contaminés, causent une mortalité infantile dramatique. D&apos;où l&apos;expression 
                    &quot;biberon tueur&quot; qui marque les esprits.
                  </p>
                  <div className="bg-red-100 p-4 rounded">
                    <p className="text-red-900 font-medium">
                      Conséquences : Méfiance envers l&apos;alimentation artificielle et promotion 
                      de l&apos;allaitement maternel exclusif.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  Surveillance du Poids
                </h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• Pesées quotidiennes obligatoires</li>
                  <li>• Courbes de croissance standardisées</li>
                  <li>• Contrôle strict des quantités</li>
                  <li>• Médicalisation de l&apos;alimentation</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Horaires Rigides
                </h3>
                <ul className="text-green-800 space-y-2">
                  <li>• Tétées toutes les 3 heures</li>
                  <li>• Respect strict des horaires</li>
                  <li>• Pas de tétées nocturnes</li>
                  <li>• Discipline alimentaire précoce</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Diversification Alimentaire</h2>
            <p className="text-gray-700 mb-6">
              L&apos;introduction progressive de nouveaux aliments marque une étape importante. 
              Les laits en poudre et les premières céréales pour bébés révolutionnent 
              l&apos;alimentation infantile.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Innovations Alimentaires</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-purple-300">
                  <strong>Laits en poudre :</strong> Première révolution industrielle de l&apos;alimentation infantile
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-purple-300">
                  <strong>Céréales pour bébés :</strong> Diversification précoce et standardisée
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-purple-300">
                  <strong>Petits pots :</strong> Industrialisation complète de l&apos;alimentation
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dressage Corporel</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Contrôle du Corps</h3>
              <p className="text-yellow-800 mb-4">
                Cette période voit naître une véritable &quot;orthopédie infantile&quot; visant à 
                contrôler et discipliner le corps de l&apos;enfant dès son plus jeune âge.
              </p>
              <ul className="text-yellow-800 space-y-2">
                <li>• <strong>Propreté précoce :</strong> Apprentissage du pot dès 6 mois</li>
                <li>• <strong>Contrôle gestuel :</strong> Limitation des mouvements spontanés</li>
                <li>• <strong>Répression émotionnelle :</strong> Interdiction des pleurs &quot;capricieux&quot;</li>
                <li>• <strong>Discipline posturale :</strong> Position assise imposée</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Moyens mnémotechniques</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                  <strong>BIBERON :</strong> <em>Bactéries, Infections, Bébés, Épidémies, 
                  Risques, Outils, Nettoyage</em>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-green-500">
                  <strong>3H :</strong> <em>Horaires, Hygiène, Habitudes</em> - Les trois piliers 
                  de l&apos;alimentation contrôlée
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">Points clés à retenir</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Le &quot;biberon tueur&quot; marque les consciences et influence les pratiques</li>
                <li>• Médicalisation et standardisation de l&apos;alimentation</li>
                <li>• Horaires rigides et contrôle quantitatif</li>
                <li>• Émergence de l&apos;industrie alimentaire infantile</li>
                <li>• Dressage corporel et répression des manifestations naturelles</li>
                <li>• Discipline précoce du corps et des émotions</li>
              </ul>
            </div>
          </div>

          {/* Bouton Commencer */}
          <div className="mt-8 text-center">
            <a 
              href="/section-3" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg shadow-lg"
            >
              🚀 Continuer vers Section III
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <a 
            href="/section-1" 
            className="bg-gray-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors text-center"
          >
            ← Section I
          </a>
          <a 
            href="/section-3" 
            className="bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
          >
            Section III →
          </a>
        </div>
      </div>
    </div>
  );
}