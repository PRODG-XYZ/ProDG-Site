//Offices component

import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="London" invert={invert}>
          128 City Road
          <br />
          EC1V 2NX, London, UK
        </Office>
      </li>
      <li>
        <Office name="Nairobi" invert={invert}>
          Vienna Court, 
          <br />
          State House Cres, Nairobi, Kenya
        </Office>
      </li>
      <li>
        <Office name="Abuja" invert={invert}>
          River Benue Street, 
          <br />
          Maitama, Abuja, Nigeria
        </Office>
      </li>
    </ul>
  )
}
