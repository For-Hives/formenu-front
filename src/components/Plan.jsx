import clsx from 'clsx'
import { CheckIcon } from '@/components/CheckIcon'
import { Button } from '@/components/Button'

export function Plan({
  name,
  price,
  description,
  href,
  features,
  featured = false,
}) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 py-8 sm:px-8',
        featured
          ? ' bg-formenu-indigo-600 py-8 lg:order-none'
          : 'border border-2 border-formenu-indigo-600 lg:border-none lg:bg-transparent lg:py-8'
      )}
    >
      <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
      <p
        className={clsx(
          'mt-2 text-base',
          featured ? 'text-white' : 'text-slate-400'
        )}
      >
        {description}
      </p>
      <p className="order-first font-display text-5xl font-light leading-tight tracking-tight text-white">
        {price}
      </p>
      <p
        className={clsx(
          'order-first font-display text-xl font-light leading-tight tracking-tight text-white',
          featured ? 'opacity-[88%]' : 'opacity-50'
        )}
      >
        /mois
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? 'text-white' : 'text-slate-200'
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className={featured ? 'text-white' : 'text-slate-400'} />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={href}
        id={`pricing-${name}`}
        variant={featured ? 'solid' : 'outline'}
        color="white"
        className={
          'mt-8' + (featured ? '' : ' bg-formenu-indigo-600 lg:bg-transparent')
        }
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {"ça m'intéresse !"}
      </Button>
    </section>
  )
}
