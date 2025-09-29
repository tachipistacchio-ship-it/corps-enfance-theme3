import BackToPlanButton from '@/components/content/BackToPlanButton';
import { TrendingUp, Shield, Microscope, Users, AlertTriangle } from 'lucide-react';

export default function Section1Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">Section I : La Puériculture Pastorienne</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h2 className="text-xl font-semibold text-red-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Contexte : La Crise de la Mortalité Infantile
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-red-900 mb-2">📊 Chiffres alarmants</h3>
                  <p className="text-red-800 mb-2">
                    À partir des années 1860, les médecins s&apos;indignent de la <strong>surmortalité infantile</strong> :
                  </p>
                  <ul className="text-red-800 space-y-1 ml-4">
                    <li>• <strong>180 ‰</strong> des enfants de moins de 1 an meurent</li>
                    <li>• Contre seulement <strong>16%</strong> en 1800</li>
                    <li>• Une augmentation dramatique qui interpelle les autorités médicales</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-red-900 mb-2">🎯 Diagnostic médical</h3>
                  <p className="text-red-800">
                    Cette mortalité pourrait être réduite si on ne laissait pas les mères et nourrices 
                    <em>&quot;trop souvent négligentes&quot;</em> à elles-mêmes et si on laissait les 
                    <strong>médecins guider leur élevage</strong>.
                  </p>
                </div>

                <div className="bg-white p-4 rounded">
                  <h3 className="font-semibold text-red-900 mb-2">⚡ Urgence d&apos;action</h3>
                  <p className="text-red-800">
                    Cette situation devient un <strong>enjeu de santé publique majeur</strong> qui justifie 
                    l&apos;intervention médicale dans la sphère domestique et maternelle.
                  </p>
                </div>
              </div>
            </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
            <Microscope className="h-5 w-5" />
            La Révolution Pastorienne (1860-1890)
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">🔬 Découvertes révolutionnaires</h3>
              <p className="text-blue-800 mb-2">
                Les découvertes de <strong>Louis Pasteur</strong> sur les microbes et leur transmission 
                transforment <strong>significativement</strong> les comportements autour de la naissance.
              </p>
              <p className="text-blue-800">
                On sait désormais que <strong>se laver les mains</strong>, <strong>stériliser les instruments</strong> 
                et ustensiles limitent la transmission microbienne et diminuent la mortalité.
              </p>
            </div>

            <div className="bg-white p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">⚕️ Impact sur la formation médicale</h3>
              <p className="text-blue-800 mb-2">
                Les <strong>sages-femmes</strong> sont mieux formées :
              </p>
              <ul className="text-blue-800 space-y-1 ml-4">
                <li>• <strong>1 an</strong> de formation initialement</li>
                <li>• <strong>2 ans</strong> à partir de 1894</li>
                <li>• Formation renforcée aux pratiques d&apos;asepsie</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">📈 Résultats spectaculaires</h3>
              <p className="text-blue-800 mb-2">
                À partir de <strong>1878</strong>, Pasteur montre l&apos;importance vitale des pratiques d&apos;asepsie.
              </p>
              <p className="text-blue-800">
                Cela permet une <strong>baisse radicale de la mortalité</strong> : 
                de <strong>177 ‰ à 78 ‰ en 1931</strong>.
              </p>
            </div>
          </div>
        </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Les Règles d&apos;Hygiène</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Hygiène Corporelle
                </h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• Bains quotidiens obligatoires</li>
                  <li>• Stérilisation systématique</li>
                  <li>• Vêtements propres et changés régulièrement</li>
                  <li>• Désinfection des espaces de vie</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Surveillance Médicale
                </h3>
                <ul className="text-purple-800 space-y-2">
                  <li>• Contrôles médicaux réguliers</li>
                  <li>• Pesées systématiques</li>
                  <li>• Surveillance de la croissance</li>
                  <li>• Prévention des épidémies</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h2 className="text-xl font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Les Sentiments Cachés
              </h2>
              <p className="text-yellow-800 mb-4">
                Paradoxalement, cette période de médicalisation intensive s&apos;accompagne d&apos;une 
                répression des manifestations affectives. Les règles d&apos;hygiène deviennent si 
                strictes qu&apos;elles occultent parfois les besoins émotionnels de l&apos;enfant.
              </p>
              <div className="bg-yellow-100 p-4 rounded">
                <p className="text-yellow-900 font-medium">
                  &quot;L&apos;hygiène avant tout&quot; devient le mot d&apos;ordre, parfois au détriment 
                  du lien affectif parent-enfant.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Transformation du Rôle Maternel</h2>
            <p className="text-gray-700 mb-6">
              La puériculture pastorienne redéfinit le rôle des mères, qui deviennent les gardiennes 
              de l&apos;hygiène familiale. Elles doivent acquérir de nouvelles compétences techniques 
              et suivre scrupuleusement les prescriptions médicales.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Moyens mnémotechniques</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-green-500">
                  <strong>PASTEUR :</strong> <em>Propreté, Asepsie, Stérilisation, Théorie microbienne, 
                  Éducation, Uniformisation, Règles</em>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <strong>Phrase mémo :</strong> &quot;Pasteur Prescrit Parfaitement Pour Protéger 
                  Petits Patients&quot;
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Points clés à retenir</h3>
              <ul className="text-red-800 space-y-2">
                <li>• La révolution pastorienne transforme radicalement la puériculture</li>
                <li>• L&apos;hygiène devient la priorité absolue</li>
                <li>• Médicalisation progressive des soins aux enfants</li>
                <li>• Répression des manifestations affectives</li>
                <li>• Nouveau rôle des mères comme &quot;infirmières domestiques&quot;</li>
              </ul>
            </div>
          </div>

          {/* Bouton Commencer */}
          <div className="mt-8 text-center">
            <a 
              href="/section-2" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg shadow-lg"
            >
              🚀 Continuer vers Section II
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <a 
            href="/introduction" 
            className="bg-gray-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors text-center"
          >
            ← Introduction
          </a>
          <a 
            href="/section-2" 
            className="bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
          >
            Section II →
          </a>
        </div>
      </div>
    </div>
  );
}