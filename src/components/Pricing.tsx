import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Monthly',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$7',
    description: 'Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.',
    features: ['Unlimited Users', 'FREE for clients & vendors', 'All Features', 'Unlimited Automations', 'Unlimited Storage', 'FREE Custom Domain', 'Mobile Apps', 'Desktop App', 'Basic Support (Email)', 'Assisted Onboarding', 'Premium Support (Chat & Phone)'],
  },
  {
    name: 'Yearly',
    id: 'tier-team',
    href: '#',
    priceMonthly: '$70',
    description: 'Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.',
    features: ['Unlimited Users', 'FREE for clients & vendors', 'All Features', 'Unlimited Automations', 'Unlimited Storage', 'FREE Custom Domain', 'Mobile Apps', 'Desktop App', 'Basic Support (Email)', 'Assisted Onboarding', 'Premium Support (Chat & Phone)'],
  },
]

export default function Example() {
  return (
    <div className="isolate overflow-hidden bg-brand-blue">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pricing that doesn't break the bank.
          </h2>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Blue has one simple plan that includes all features. You can try the entire platform free for 7 days, without a credit card.
          </p>
        </div>
      </div>
      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-lg bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                >
                  <div>
                    <h3 id={tier.id} className="text-base font-semibold leading-7 text-brand-blue">
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                      <span className="text-base font-semibold leading-7 text-gray-600">/user</span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">{tier.description}</p>
                    <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon className="h-6 w-5 flex-none text-brand-blue" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md bg-brand-blue px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue transition duration-300 ease-in-out transform hover:-translate-y-1"
                  >
                    Start 7-day free trial now
                  </a>
                  <p className="mt-2 text-center text-sm text-gray-500">No credit card required</p>
                </div>
              ))}
              <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-lg p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-blue-brand">Discounted Plans</h3>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    Dolor dolores repudiandae doloribus. Rerum sunt aut eum. Odit omnis non voluptatem sunt eos nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-blue-brand ring-1 ring-inset ring-blue-brand hover:ring-blue-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-brand"
                >
                  Contact Us <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
