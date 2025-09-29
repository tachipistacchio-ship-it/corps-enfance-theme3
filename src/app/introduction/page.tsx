import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BookOpen, Heart, Baby, Target } from 'lucide-react';

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">Introduction à la Puériculture</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Définition et Origine
              </h2>
              <p className="text-blue-800 mb-4">
                La <strong>puériculture</strong> désigne l&apos;ensemble des connaissances et des pratiques 
                relatives aux soins, à l&apos;éducation et à l&apos;élevage des enfants, particulièrement 
                des nourrissons et des jeunes enfants.
              </p>
              <div className="bg-white p-4 rounded border-l-2 border-blue-300">
                <p className="text-blue-900 font-medium mb-2">📚 Origine du terme :</p>
                <p className="text-blue-800">
                  Le mot <strong>&quot;puériculture&quot;</strong> est créé en <strong>1865</strong> par le médecin français 
                  <strong>Dr Caron</strong> qui publie un manuel intitulé <em>&quot;La puériculture ou la science d&apos;élever 
                  hygiéniquement et physiologiquement les enfants&quot;</em>.
                </p>
                <p className="text-blue-800 mt-2">
                  Le terme est ensuite diffusé par le <strong>professeur Pinard</strong> qui définit la puériculture 
                  en 1900 comme les <em>&quot;soins donnés au nouveau-né et aux jeunes enfants durant le premier âge 
                  en vue de leur conservation et de leur santé&quot;</em>.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded mb-8">
              <h2 className="text-xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Plan du Cours
              </h2>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-semibold">1</div>
                  <div>
                    <h3 className="font-semibold text-purple-900">La Puériculture Pastorienne</h3>
                    <p className="text-purple-700 text-sm">Révolution hygiéniste et médicalisation (1860-1890)</p>
                  </div>
                </div>
                <div className="bg-white p-3 rounded flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-semibold">2</div>
                  <div>
                    <h3 className="font-semibold text-purple-900">Évolution des Pratiques</h3>
                    <p className="text-purple-700 text-sm">Le &quot;biberon tueur&quot; et transformations du XXe siècle</p>
                  </div>
                </div>
                <div className="bg-white p-3 rounded flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-semibold">3</div>
                  <div>
                    <h3 className="font-semibold text-purple-900">La Nouvelle Puériculture</h3>
                    <p className="text-purple-700 text-sm">Après 1945 : psychanalyse, Spock, Dolto et l&apos;amour maternel</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-8">
              <h2 className="text-xl font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Méthode d&apos;Étude Recommandée
              </h2>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-yellow-900 mb-2">📖 Lecture active</h3>
                  <p className="text-yellow-800">
                    Prenez des notes sur les dates clés, les personnages importants et les transformations majeures.
                  </p>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-yellow-900 mb-2">🔗 Liens chronologiques</h3>
                  <p className="text-yellow-800">
                    Établissez des connexions entre les différentes périodes et leurs contextes historiques.
                  </p>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-yellow-900 mb-2">💡 Réflexion critique</h3>
                  <p className="text-yellow-800">
                    Questionnez-vous sur les enjeux sociaux et les rapports de pouvoir derrière chaque évolution.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Évolution historique</h2>
              <p className="text-gray-700 mb-6">
                L&apos;histoire de la puériculture reflète les transformations profondes de la société française 
                et de ses représentations de l&apos;enfance.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">XIXe siècle</h3>
                  <p className="text-green-800">
                    Émergence d&apos;une approche scientifique face à la mortalité infantile dramatique. 
                    Révolution pastorienne et médicalisation progressive.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">XXe siècle</h3>
                  <p className="text-purple-800">
                    Évolution vers une puériculture psychologique intégrant les apports de la psychanalyse 
                    et des sciences humaines.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded mb-8">
              <h2 className="text-xl font-semibold text-orange-900 mb-3 flex items-center gap-2">
                <Baby className="h-5 w-5" />
                Contexte Historique et Enjeux
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-orange-900 mb-2">📊 Contexte démographique</h3>
                  <p className="text-orange-800 mb-2">
                    À partir des années 1860, les médecins s&apos;indignent de la <strong>surmortalité infantile</strong> : 
                    <strong>180 ‰</strong> des enfants de moins de 1 an meurent (contre 16% en 1800).
                  </p>
                  <p className="text-orange-800">
                    Cette situation alarmante pousse à une <strong>révolution des pratiques</strong> de soins 
                    et d&apos;éducation des enfants.
                  </p>
                </div>

                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-orange-900 mb-2">🔬 La révolution pastorienne (1860-1890)</h3>
                  <p className="text-orange-800 mb-2">
                    Les découvertes de <strong>Pasteur</strong> sur les microbes et leur transmission transforment 
                    radicalement l&apos;approche des soins infantiles.
                  </p>
                  <p className="text-orange-800">
                    Introduction de l&apos;<strong>hygiène</strong>, de la <strong>stérilisation</strong> et des 
                    <strong>règles sanitaires</strong> strictes.
                  </p>
                </div>

                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-orange-900 mb-2">⚕️ Médicalisation de la naissance</h3>
                  <p className="text-orange-800 mb-2">
                    Les <strong>sages-femmes</strong> sont mieux formées (1 an puis 2 ans à partir de 1894). 
                    Les <strong>médecins</strong> prennent progressivement le contrôle des naissances.
                  </p>
                  <p className="text-orange-800">
                    Cela permet une <strong>baisse radicale de la mortalité</strong> : de 177 ‰ à 78 ‰ en 1931.
                  </p>
                </div>

                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-orange-900 mb-2">🌟 Après 1945 : La nouvelle puériculture</h3>
                  <p className="text-orange-800">
                    Influence de la <strong>psychanalyse</strong> et des sciences humaines. 
                    Figures emblématiques : <strong>Spock</strong>, <strong>Dolto</strong>, <strong>Badinter</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <h2 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                <Baby className="h-5 w-5" />
                Concepts Clés à Retenir
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-green-900 mb-2">🔑 Points essentiels</h3>
                  <ul className="text-green-800 space-y-2">
                    <li>• <strong>Médicalisation progressive</strong> : passage d&apos;un savoir empirique à une approche scientifique</li>
                    <li>• <strong>Évolution des représentations</strong> : de l&apos;enfant fragile à l&apos;enfant épanoui</li>
                    <li>• <strong>Rôle maternel</strong> : transformation du statut et des responsabilités des mères</li>
                    <li>• <strong>Influence sociale</strong> : impact des contextes historiques sur les pratiques</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-green-900 mb-2">📈 Enjeux démographiques</h3>
                  <p className="text-green-800 mb-2">
                    La puériculture répond à un <strong>enjeu démographique majeur</strong> : réduire la mortalité infantile 
                    qui était dramatiquement élevée au XIXe siècle.
                  </p>
                  <p className="text-green-800">
                    Elle s&apos;inscrit dans une logique de <strong>contrôle social</strong> où les médecins cherchent 
                    à encadrer et normaliser les pratiques maternelles.
                  </p>
                </div>

                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-green-900 mb-2">🎯 Objectifs d&apos;apprentissage</h3>
                  <ul className="text-green-800 space-y-1">
                    <li>• Comprendre l&apos;évolution historique des pratiques de puériculture</li>
                    <li>• Analyser l&apos;impact de la révolution pastorienne sur les soins infantiles</li>
                    <li>• Identifier les transformations du rôle maternel à travers les époques</li>
                    <li>• Évaluer l&apos;influence des contextes sociaux sur les pratiques éducatives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div></div>
          <a 
            href="/section-1" 
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Section I →
          </a>
        </div>
      </div>
    </div>
  );
}