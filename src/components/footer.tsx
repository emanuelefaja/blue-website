const navigation = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Insights', href: '#' },
    { name: 'Pricing', href: '#' },
  ],
  platform: [
    { name: 'Overview', href: '#' },
    { name: 'Changelog', href: '#' },
    { name: 'Roadmap', href: '#' },
    { name: 'API', href: '#' },
  ],
  learn: [
    { name: 'Support Center', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Webinars', href: '#' },
    { name: 'Videos', href: '#' },
  ],
  getBlue: [
    { name: 'Desktop App', href: '#' },
    { name: 'iOS', href: '#' },
    { name: 'Android', href: '#' },
    { name: 'PWA', href: '#' },
  ],
}

export default function Example() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img
              className="h-7"
              src="logo.svg"
              alt="Blue"
            />
            <p className="text-sm leading-6 text-gray-600">
              Our mission is to organize the work of the world
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Platform</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.platform.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Learn</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.learn.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Get Blue</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.getBlue.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 flex justify-between">
          <p className="text-xs leading-5 text-gray-500">&copy; 2024 Bloo, Inc. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-xs leading-5 text-gray-500 hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="text-xs leading-5 text-gray-500 hover:text-gray-900">
              Security
            </a>
            <a href="#" className="text-xs leading-5 text-gray-500 hover:text-gray-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}