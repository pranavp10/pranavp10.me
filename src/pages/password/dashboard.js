/* eslint-disable jsx-a11y/label-has-associated-control */
import { BellIcon, CogIcon } from '@heroicons/react/outline';
import { PlusIcon, SearchIcon } from '@heroicons/react/solid';
import Router from 'next/router';

const subNavigation = [
  {
    name: 'Account',
    description: 'Ullamcorper id at suspendisse nec id volutpat vestibulum enim. Interdum blandit.',
    href: '#',
    icon: CogIcon,
    current: false,
  },
  {
    name: 'Notifications',
    description: 'Enim, nullam mi vel et libero urna lectus enim. Et sed in maecenas tellus.',
    href: '#',
    icon: BellIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className="flex bg-blue-gray-50 overflow-hidden pt-20">
      <main className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
          <nav
            aria-label="Sections"
            className="flex-shrink-0 bg-white border-blue-gray-200 xl:flex xl:flex-col">
            <div className="flex-shrink-0 h-16 border-b border-blue-gray-200 flex items-center justify-between px-8">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div
                    className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                    aria-hidden="true">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search-field"
                    name="search-field"
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search transactions"
                    type="search"
                  />
                </div>
              </form>
              <button
                type="button"
                onClick={() => {
                  Router.push('/password/new');
                }}
                className="inline-flex items-center justify-center px-2 py-1 border border-transparent shadow-sm text-base font-medium rounded-[4px] text-white bg-black hover:bg-gray-900 focus:outline-none focus:bg-gray-800">
                <PlusIcon className="mr-1 h-4 w-4" aria-hidden="true" />
                New
              </button>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto">
              {subNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-blue-50 bg-opacity-50'
                      : 'hover:bg-gray-100 hover:bg-opacity-50',
                    'flex p-6 border-b border-blue-gray-200'
                  )}
                  aria-current={item.current ? 'page' : undefined}>
                  <item.icon
                    className="flex-shrink-0 h-8 w-8 text-blue-gray-400 bg-gray-100 p-1 rounded-md"
                    aria-hidden="true"
                  />
                  <div className="ml-3 text-sm">
                    <p className="font-medium text-blue-gray-900">{item.name}</p>
                    <p className="mt-1 text-blue-gray-500">{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
}
