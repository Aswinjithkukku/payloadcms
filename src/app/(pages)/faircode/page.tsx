import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
import LogoGrid from './_blocks/LogoGrid'
import GlobalTextBlock from './_blocks/GlobalTextBlock'

const FaircodePage = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-12 ">
        <div className="col-span-6 bg-[#1D1D1D] flex flex-col justify-center items-center min-h-96  py-40">
          <div className="flex flex-col gap-5">
            <div className="font-grotesk font-black text-white">
              <p className="text-xl">Crafting Intelligent</p>
              <h1 className="text-6xl">
                Technology
                <br /> Expert
              </h1>
            </div>
            <div className="font-inter text-sm text-neutral-500">
              <p>
                We create world-class digital products <br /> materials that communicate clearly.
              </p>
            </div>
            <div className="flex gap-2 items-center font-grotesk">
              <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[#00F5A3]">
                <MdArrowRightAlt size={20} />
              </div>
              <div className="text-white text-sm font-semibold">Discover our portfolio</div>
            </div>
          </div>
        </div>
        <div className="bg-[#00F5A3] col-span-6 relative">
          <div className="absolute right-0 bottom-0">
            <img src="/herobanner.png" alt="" className=" w-auto  max-h-[650px]" />
          </div>
          <div className="absolute bg-white h-48 w-48 bottom-0 left-0 flex flex-col justify-center items-center p-5 gap-2">
            <img src="/hey.png" alt="hey" className="h-10 object-contain" />
            <p className="font-grotesk font-black text-xl">Cardamom trading made easy</p>
          </div>
        </div>
      </div>
      <LogoGrid />

      <div className="max-w-screen-lg mx-auto grid grid-cols-12">
        <GlobalTextBlock />
      </div>
    </div>
  )
}

export default FaircodePage
