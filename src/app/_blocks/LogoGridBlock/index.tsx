import { Page } from '@/payload/payload-types'
import React from 'react'

type Props = Extract<Page['layout'][0], { blockType: 'LogoGridBlock' }>

const LogoGridBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto py-10">
        <div className="grid grid-cols-5 place-content-center">
          {/* {Props.map((path, i) => (
            <div key={i} className="">
              <img src={path} alt={`${i}`} className="object-contain h-10" />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default LogoGridBlock
