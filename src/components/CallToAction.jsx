import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-formenu-indigo-600 pt-16 pb-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Prêt à prendre le contrôle de vos menus ?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Avec toutes les technologies {"d'aujourd'hui"}, il est temps de vous démarquer !
            <br/>
            Pourquoi ne pas commencer par vos menus ?
          </p>
          <Button href="mailto:contact@formenu.fr" color="white" className="mt-10">
            Je veux en savoir plus !
          </Button>
        </div>
      </Container>
    </section>
  )
}
