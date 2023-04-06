import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question:
        'Et si mes clients ne veulent pas utiliser l’application\u00A0?',
      answer:
        "Aucun souci, vous avez la possibilité de proposer un menu papier à vos clients. L'application vous permet " +
        "d'imprimer vos menus en un clic\u00A0!",
    },
    {
      question:
        "Oui, mais comment je fais pour garder l'âme de mon restaurant\u00A0? Mon identité visuelle\u00A0?",
      answer:
        'Tout a été pensé pour que vous puissiez garder votre identité visuelle. Vous pouvez choisir' +
        ' de personnaliser votre menu à votre guise',
    },
    {
      question:
        "Et si je n'ai aucune compétence pour utiliser mon identité visuelle\u00A0? mes couleurs etc\u00A0?",
      answer:
        'Notre support sera là pour vous accompagner, vous ne serez pas seul\u00A0! loin de là\u00A0!',
    },
  ],
  [
    {
      question:
        "Légal\u00A0? Vous parlez de l'obligation de mentionner les allergènes\u00A0?",
      answer:
        'Et oui\u00A0! En effet, la loi vous oblige à afficher les allergènes sur vos menus. depuis le décret n°2015-447 du 17 avril 2015 ' +
        'les restaurateurs sont tenus d’indiquer les allergènes sur leurs menus. ForMenu vous permet de le faire facilement\u00A0!',
    },
    {
      question:
        'Votre application est disponible sur téléphone, tablette et ordinateur\u00A0?',
      answer:
        "Oui, vous pouvez utiliser ForMenu sur tous vos appareils\u00A0! ForMenu est responsive et s'adapte à tous les écrans\u00A0!",
    },
    {
      question: 'ForMenu est utilisable partout\u00A0?',
      answer:
        'Oui, peu importe où vous êtes, vous pouvez utiliser ForMenu\u00A0! Que ce soit en France, en Belgique, en Suisse ou ailleurs\u00A0!',
    },
  ],
  [
    {
      question: "Qu'est-ce-que ça m'apporte\u00A0?",
      answer:
        "La possibilité de proposer une expérience unique à vos clients\u00A0! De gagner du temps, et donc de l'argent, et avoir une visibilité sur vos ventes\u00A0!",
    },
    {
      question: 'Sur mes ventes\u00A0?',
      answer:
        'Et oui, en effet, il vous sera possible de savoir quels sont vos plats les plus vus, les plus commandés\u00A0!',
    },
    {
      question: 'Et si il manque une fonctionnalité qui me serait utile\u00A0?',
      answer:
        "Nous sommes à votre écoute, n'hésitez pas à nous contacter pour nous faire part de vos idées\u00A0! Nous les étudierons avec attention\u00A0!",
    },
    {
      question: 'Et en termes de RGPD\u00A0?',
      answer:
        'Toutes les données sont stockées sur des serveurs en Europe, et ne sont pas transmises à des tiers. ' +
        'Vous pouvez à tout moment supprimer vos données ou demander à les récupérer.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Les questions les plus fréquentes
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Si la question que vous vous posez {"n'est"} pas dans la liste,{' '}
            {"n'hésitez"} pas à nous contacter&nbsp;!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
