import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
import LogoGrid from './_blocks/LogoGrid'
import { Button } from '@/app/_components/Button'
import { url } from 'inspector'

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
      <div className="max-w-screen-xl mx-auto py-5">
        <div className="grid grid-cols-12 gap-10">
          <div className="flex items-center px-20  col-span-6">
            <div className="text-4xl font-grotesk font-black  ">
              <div className="relative flex flex-col ">
                Unlocking Digital Excellence: Data -Driven Solutions
                <div className="absolute -bottom-2 right-14 -z-10">
                  <img
                    src="/decorator/underline.png"
                    alt="underline"
                    className="object-contain h-10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 grid grid-cols-2 py-5 place-items-center">
            <div className="w-full p-10">
              <div className="relative aspect-square rounded-full bg-[#2D2C2B] flex justify-center items-center overflow-hidden">
                <div className="absolute w-8 h-full rotate-45 bg-[#464646] "></div>
                <p className="text-[110px] font-black font-grotesk text-white z-10">10</p>
                <sup className="mb-10 text-3xl text-white font-bold">+</sup>
              </div>
            </div>
            <div className="w-full">
              <h4 className="font-inter text-sm font-bold uppercase">10+ years of experience</h4>
              <p className="text-xs pt-4 font-inter text-[#C1C1C1] leading-relaxed">
                With over a decade of experience, we specialise in turning concepts into impactful
                digital solutions. Whether you’re a sole proprietorship, small to medium-sized
                business, or a Fortune 500 company, our team delivers meticulous designs and
                innovative code to power exceptional technology.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-around gap-10 pb-5 font-inter">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border-t pt-5">
              <div className="flex gap-10 items-center max-w-xs">
                <div className="text-sm text-[#727272]">
                  350+ very satisfied clients around the worldwide.
                </div>
                <div className="h-10 w-10 ">
                  <img src="/smiley.png" alt="logo" className="h-full w-full object-contain" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#1E1D1D] ">
        <div className="max-w-screen-xl mx-auto py-20 p-5 flex flex-col gap-10">
          <div className="max-w-screen-sm">
            <h2 className="font-black text-5xl font-grotesk text-white">
              Empowering Your Digital Success
            </h2>
          </div>
          <p className=" font-inter text-sm text-[#C1C1C1]">
            With over a decade of experience, we specialise in turning concepts into impactful
            digital solutions. Whether you’re a sole proprietorship, small to medium-sized business,
            or a Fortune 500 company, our team delivers meticulous designs and innovative code to
            power exceptional technology.
          </p>
          <div className="divide-y border-y divide-[#727272]/30 border-[#727272]/30 ">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="grid grid-cols-12 py-10 px-5">
                <div className="col-span-2 text-white font-grotesk text-lg">0{i + 1}</div>
                <div className="col-span-4 text-white font-grotesk flex gap-3 items-center">
                  <img src="/icon.png" alt="icon" className="w-10 h-10 object-contain" />
                  <p className="text-2xl font-medium">Design</p>
                  <p className="bg-[#00F5A3] text-[12px] font-medium text-[#2D2C2B] py-[2px] px-3 rounded-full uppercase">
                    Popular
                  </p>
                </div>
                <div className="col-span-6 text-[#727272] font-inter">
                  We strive to develop real-world web solutions that are ideal for small to large
                  projects with project requirements.
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white font-inter">
            Save your precious time and effort spent for finding a solution. Contact us now
          </p>
        </div>
      </div>

      {/* section our projects */}
      <div className="max-w-screen-lg mx-auto space-y-14 py-20">
        <div className="flex justify-between">
          <h3 className="font-grotesk font-bold text-4xl">Our Projects</h3>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="h-[450px] rounded overflow-hidden shadow">
            <img src="/projects/project.jpg" alt="project" className="h-full w-full object-cover" />
          </div>
          <div className="h-[450px] rounded overflow-hidden shadow">
            <img src="/projects/project.jpg" alt="project" className="h-full w-full object-cover" />
          </div>
          <div className="h-[450px] rounded overflow-hidden shadow">
            <img src="/projects/project.jpg" alt="project" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      {/* About us */}
      <div className="max-w-screen-lg mx-auto">
        <div className="text-4xl font-grotesk font-black  ">
          <div className="relative flex flex-col max-w-screen-sm">
            Expert ERP Solutions: Tailored Development Agency
            <div className="absolute -bottom-2 right-14 -z-10">
              <img src="/decorator/underline.png" alt="underline" className="object-contain h-10" />
            </div>
          </div>
        </div>
        <div className="my-10 grid grid-cols-12">
          <div className="col-span-5 p-10 space-y-5 ">
            <p className="text-[#727272] font-inter text-xs">
              We combine human empathy and intelligent data to provide the highest level of
              satisfaction.
            </p>
            <Button appearance="primary" label="LET'S TALK NOW" className=""></Button>
          </div>
          <div className="col-span-7 grid grid-cols-2 ">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={` p-10 ${i % 2 === 0 ? ' border-x' : ' border-r'} ${
                  i === 0 || i === 1 ? ' border-b' : ''
                }`}
              >
                <p className=" font-inter text-xs">
                  Mobile Apps on App store we've created in 2023.
                </p>
                <p className="font-extrabold text-3xl pt-10">8500+ </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* News Letter */}
      <div className="bg-[#060606]">
        <div className="relative max-w-screen-lg mx-auto min-h-80">
          <div className="text-[#C1C1C1]/10 text-[140px] font-inter font-black absolute inset-0 flex justify-center items-center">
            Newsletter
          </div>
          <div className="w-full min-h-80 h-full flex items-center">
            <div className="border-b border-[#43B5E2] w-full">
              <div className="font-inter">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="placeholder:text-white placeholder:text-xs w-full text-white text-sm outline-none border-none bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stages Section */}
      <div
        style={{ backgroundImage: `url("/section.jpg")` }}
        className="w-full h-96 object-cover object-center "
      >
        <div className="max-w-screen-xl mx-auto p-5 space-y-7">
          <div className="max-w-md">
            <h3 className="font-grotesk text-white font-extrabold text-4xl">
              We offer our customers our best effort.
            </h3>
          </div>
          <div className="max-w-screen-md">
            <p className="text-[#C1C1C1] text-xs">
              In the realm of digital marketing, our agency crafted ingenious strategies tailored to
              each client’s unique needs, driving exponential growth, expanding their online
              presence, and fostering lasting connections with their audience. Through data-driven
              insights, cutting-edge technologies, and creative brilliance, we revolutionized their
              digital landscape, yielding remarkable results that exceeded expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaircodePage
