import { Page, PartnerLogo } from '@/payload/payload-types'
import React from 'react'

type Props = Extract<Page['layout'][0], { blockType: 'logoGridBlock' }>

export const LogoGridBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { logos } = props

  return (
    <div>
      <div className="max-w-screen-lg mx-auto py-5 px-5">
        <div className="grid grid-cols-5 place-items-center ">
          {logos.map((data, i) => (
            <div key={i} className="">
              <img src={data?.logo?.url} alt={`${i}`} className="object-contain h-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
