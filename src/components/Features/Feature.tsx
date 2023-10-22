import Image from '../common/Images/Image'
import React from 'react'

import { featureData } from '../../utils/data/features'

const Features: React.FC = () => {
  return (
    <section className="mt-28  ">
      <div className="container mx-auto p-8 max-w-[70rem]  h-full ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* First Subsection */}
          {featureData.map((item) => (
            <div
              key={item.title}
              className="bg-blue-200 p-14 rounded-lg flex flex-col cursor-pointer lg:min-h-[70vh] min-h-[50vh] transition hover:bg-[#309CFF]"
            >
              <div className="flex-1">
                {' '}
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-700">{item.description}</p>
              </div>
              <div className="flex-10 h-full flex mx-auto">
                {' '}
                <Image
                  className="max-w-auto"
                  src={`${item.imageSrc}`}
                  alt="feature image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
