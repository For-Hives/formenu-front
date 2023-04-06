import { Container } from '@/components/Container'
import { SwirlyDoodle } from '@/components/SwirlyDoodle'
import { Plan } from '@/components/Plan'

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute left-0 top-1/2 h-[1em] w-full fill-formenu-indigo-400" />
              <span className="relative">Un prix adapté,</span>
            </span>{' '}
            pour tous.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Peu importe votre taille, nous avons un plan adapté à vos besoins.
          </p>
        </div>
        <div className="mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            name="Commis"
            price="59.99€"
            description="Pour les petits restaurants familiaux."
            href="mailto:contact@formenu.fr"
            features={[
              'Créations de 3 menus personnalisés',
              'Customisation partielle avec les thèmes par défaut',
              'Export imprimable des menus',
              'Désactivation des plats, et ingrédient à la volée',
              'Le client à accès au tri, recherche, et filtre des plats',
              'Le client peut voir les ingrédients des plats',
              'Le client peut voir les allergènes des plats',
            ]}
          />
          <Plan
            featured
            name="Second"
            price="99.99€"
            description="Pour les restaurants qui veulent grandir."
            href="mailto:contact@formenu.fr"
            features={[
              "Tout ce qu'il y a dans le plan Commis",
              'Création de 10 menus personnalisés',
              'Customisation complète avec les thèmes par défaut',
              'Système de popularité sur vos plats (orientation des commandes clients)',
              'Aide à la mise en place de votre carte',
            ]}
          />
          <Plan
            name="Chef"
            price="199.99€"
            description="Pour ceux qui veulent conquérir le monde."
            href="mailto:contact@formenu.fr"
            features={[
              "Tout ce qu'il y a dans le plan Second",
              'Création illimitée de menus personnalisés',
              'Accès aux thèmes premium',
              'Analyse des ventes',
              'ChatBot pour conseiller les clients',
              'Support 24/7',
              'Conseil 100% personnalisé par des experts',
              'Statistiques poussées sur les comportements des clients',
              'Saisonnalité des menus (automatique ou manuel), pour les fêtes et évènements spéciaux !',
            ]}
          />
        </div>
      </Container>
    </section>
  )
}
