import { ReactNode } from 'react'

interface ContentCardProps {
  title: string
  children: ReactNode
}

const ContentCard: React.FC<ContentCardProps> = ({ title, children }) => {
  return (
    <div className="p-2 mb-4">
      <div className="flex items-center gap-5 cursor-pointer">
        <h1 className="font-bold mb-5  items-center uppercase flex md:text-4xl text-lg text-[#309CFF] ">
          {title}
        </h1>
      </div>
      <div className="mt-2 text-xl  text-justify ">{children}</div>
    </div>
  )
}

export default ContentCard
