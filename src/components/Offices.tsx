//Offices component

import clsx from 'clsx'

// Office locations data - keeping consistent with Footer
const officeLocations = [
  {
    city: 'London',
    country: 'United Kingdom',
    address: '128 City Road, EC1V 2NX, London, UK',
    phone: '+44 20 1234 5678',
    email: 'london@prodg.xyz',
  },
  {
    city: 'Nairobi',
    country: 'Kenya',
    address: 'Vienna Court, State House Cres, Nairobi, Kenya',
    phone: '+254 20 8765 4321',
    email: 'nairobi@prodg.xyz',
  },
  {
    city: 'Abuja',
    country: 'Nigeria',
    address: 'River Benue Street, Maitama, Abuja, Nigeria',
    phone: '+234 90 1234 5678',
    email: 'abuja@prodg.xyz',
  },
]

function Office({
  office,
  invert = false,
}: {
  office: typeof officeLocations[0]
  invert?: boolean
}) {
  return (
    <div className="flex flex-col">
      <h3 
        className={clsx(
          "font-display text-lg font-semibold",
          invert ? "text-white" : "text-neutral-950"
        )}
      >
        {office.city}
      </h3>
      <p 
        className={clsx(
          "mt-1 text-sm",
          invert ? "text-neutral-300" : "text-neutral-700"
        )}
      >
        {office.country}
      </p>
      <address 
        className={clsx(
          "mt-4 text-sm not-italic leading-relaxed",
          invert ? "text-neutral-300" : "text-neutral-700"
        )}
      >
        {office.address}
      </address>
      <p 
        className={clsx(
          "mt-4 text-sm",
          invert ? "text-neutral-300" : "text-neutral-700"
        )}
      >
        <a
          href={`tel:${office.phone.replace(/\s+/g, '')}`}
          className={clsx(
            "transition",
            invert ? "hover:text-white" : "hover:text-neutral-950"
          )}
        >
          {office.phone}
        </a>
      </p>
      <p 
        className={clsx(
          "mt-2 text-sm",
          invert ? "text-neutral-300" : "text-neutral-700"
        )}
      >
        <a
          href={`mailto:${office.email}`}
          className={clsx(
            "transition",
            invert ? "hover:text-white" : "hover:text-neutral-950"
          )}
        >
          {office.email}
        </a>
      </p>
    </div>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { invert?: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3" {...props}>
      {officeLocations.map((office, index) => (
        <Office key={index} office={office} invert={invert} />
      ))}
    </div>
  )
}
