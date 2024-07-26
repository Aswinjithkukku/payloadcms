import React from 'react'

const LogoGrid = () => {
  const imagesPath = [
    '/logos/amazon.png',
    '/logos/invision.png',
    '/logos/logitech.png',
    '/logos/netflix.png',
    '/logos/walmart.png',
  ]
  return (
    <div className="max-w-screen-lg mx-auto py-10">
      <div className="grid grid-cols-5 place-content-center">
        {imagesPath.map((path, i) => (
          <div key={i} className="">
            <img src={path} alt={`${i}`} className='object-contain h-10' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoGrid
