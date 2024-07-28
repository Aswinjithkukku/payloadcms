import { Page } from '../../../payload/payload-types'
import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'

type Props = Extract<Page['layout'][0], { blockType: 'heroBlock' }>

export const HeroBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { columns } = props

  // text Type

  const textTypeContent = txtData => {
    return (
      <div
        className={`col-span-6 bg-[${txtData?.textFields?.backgroundColor}] flex flex-col justify-center items-center min-h-96  py-40 px-5`}
      >
        <div className="flex flex-col gap-5">
          <div className="font-grotesk font-black text-white">
            <p className="text-xl">{txtData?.textFields?.heroLightHeading}</p>
            <h1 className="text-6xl">{txtData?.textFields?.heroMainHeading}</h1>
          </div>
          <div className="font-inter text-sm text-neutral-500">
            <p>{txtData?.textFields?.heroDescription}</p>
          </div>
          <div className="flex gap-2 items-center font-grotesk">
            <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[#00F5A3]">
              <MdArrowRightAlt size={20} />
            </div>
            <div className="text-white text-sm font-semibold">
              {txtData?.textFields?.buttonLabel}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Image Type

  const imageTypeContent = imgData => {
    return (
      <div className={`bg-[${imgData?.imageFields?.backgroundColor}] col-span-6 relative `}>
        <div className="absolute right-0 bottom-0">
          <img
            src={imgData?.imageFields?.primaryImage?.url}
            alt={imgData?.imageFields?.primaryImage?.alt}
            className=" w-auto  max-h-[500px]"
          />
        </div>
        <div className="absolute bg-white h-48 w-48 bottom-0 left-0 flex flex-col justify-center items-center p-5 gap-2">
          <img
            src={imgData?.imageFields?.secondaryImage?.url}
            alt={imgData?.imageFields?.secondaryImage?.alt}
            className="h-10 object-contain"
          />
          <p className="font-grotesk font-black text-xl">{imgData?.imageFields?.text} </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="w-full grid grid-cols-12 ">
        {columns?.map(data => {
          let typeOfHeroSection = data?.typeOfHeroSection
          switch (typeOfHeroSection) {
            case 'textType':
              return textTypeContent(data)
            case 'imageType':
              return imageTypeContent(data)
            default:
              return ''
          }
        })}
      </div>
    </div>
  )
}
