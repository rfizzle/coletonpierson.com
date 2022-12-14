import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import classNames from "classnames"
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: 'About', href: "/"},
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: "/projects" },
  { name: 'Contact Me', href: '/contact' },
]

const Navigation = ({}) => {
  const router = useRouter();

  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div>
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button
                    className={
                      classNames(
                        "inline-flex items-center justify-center rounded-md p-2 text-gray-400",
                        "hover:bg-gray-700 hover:text-white",
                        "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      )
                    }
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <div className="flex items-center lg:hidden">
                      <Link href="/" >
                        <a>
                          <Image src="/logo.svg" alt="logo" width={32} height={32} />
                        </a>
                      </Link>
                    </div>
                    <div className="hidden items-center lg:flex">
                      <Link href="/">
                        <a>
                          <Image src="/logo.svg" alt="logo" width={32} height={32} />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <a
                            className={
                              classNames(
                              "px-3 py-2 rounded-md text-sm font-medium",
                                "hover:bg-gray-700 hover:text-white",
                                "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                router.pathname == item.href ? "text-white" : "text-gray-400"
                              )
                            }
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button key={item.name} as={ Link } href={item.href}>
                    <a
                      className={
                        classNames(
                        'block px-3 py-2 rounded-md text-base font-medium',
                          "hover:bg-gray-700 hover:text-white",
                          "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                          router.pathname == item.href ? "text-white" : "text-gray-400"
                        )
                      }
                    >
                      {item.name}
                    </a>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}

export default Navigation;
