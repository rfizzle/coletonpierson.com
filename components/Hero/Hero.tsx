import Image from "next/future/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
            <div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Coleton Pierson
              </h1>
              <h2 className="mt-4 text-lg font-light tracking-tight text-gray-400 italic sm:text-xl">
                Security + Software Engineer and Cloud Security Architect
              </h2>
              <p className="mt-3 text-lg text-gray-300 sm:mt-5 lg:text-xl">
                Security Engineer with 9 years experience in security consulting, DevOps, and product engineering with
                a focus on Application Security. Assisted in growing a bootstrapped cyber security company to 10M in
                revenue as a member of the core team over 5 years, maintaining over 50% growth per year. Built security
                products and advised Fortune 1000 companies on security best practices in regards to applications,
                networks, and cloud infrastructure.
              </p>
              <p className="mt-8 text-base font-semibold text-white sm:mt-10">Past Companies</p>
              <div className="mx-auto mt-4 grid max-w-lg gap-20 grid-cols-3 lg:max-w-none justify-center select-none">
                    <Link href="https://agoda.com">
                      <a target="_blank" rel="noopener noreferrer" className="relative h-9 object-cover">
                        <Image
                          fill
                          src="/images/agoda-logo-gray.png"
                          alt="Agoda"
                        />
                      </a>
                    </Link>
                    <Link href="https://praetorian.com">
                      <a target="_blank" rel="noopener noreferrer" className="relative h-9 object-cover">
                        <Image
                          fill
                          src="/images/praetorian-logo-gray.png"
                          alt="Praetorian"
                        />
                      </a>
                    </Link>
                    <Link href="https://modernstack.com">
                      <a target="_blank" rel="noopener noreferrer" className="relative h-9 object-cover">
                        <Image
                          fill
                          src="/images/modernstack-logo-gray.png"
                          alt="Modern Stack"
                        />
                      </a>
                    </Link>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
            <div className="mx-auto sm:mx-4 sm:overflow-hidden sm:rounded-lg">
              <Image src="/images/profile.jpg" alt="profile picture" width={2287} height={2304} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
