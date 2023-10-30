import React from 'react'
import ContentCard from '../ContentCard/ContentCard'
import { Link } from 'react-router-dom'
import { InternChecklist } from './InternCheckList'

export const WelcomePage: React.FC = () => {
  return (
    <React.Fragment>
      <InternChecklist />
      <ContentCard title="HOW TO USE THE PORTAL">
        {
          <div className="flex flex-col gap-2">
            <p className="mb-4 font-semibold">
              Explore our portal to find out how more about us
            </p>
            <p className="mb-3 ">
              <span className="font-bold text-[#309CFF]">
                {' '}
                <Link to={''}>Contact Book</Link>{' '}
              </span>
              - Our Contact Book is a list of colleagues on that are starting
              with you. You can explore the list and view details and get
              intouch with them to connect with them, get to know them and ask
              them questions
            </p>
            <p className="mb-3 ">
              <span className="font-bold text-[#309CFF]">
                <Link to={''}>Socials</Link>{' '}
              </span>
              - Socials is a way to connect with other colleagues, share your
              thought and build a strong connection with others. Feel free to
              drop your thoughts and ideas on the social board. You can use
              socials to ask as many questions as possible.
            </p>
            <p className="mb-3 ">
              <span className="font-bold text-[#309CFF]">
                {' '}
                <Link to={''}>Updates</Link>{' '}
              </span>{' '}
              - This provides new information that is required during the
              onboarding process. It is necessary for you to check the update
              tab frequently to get new and timely information
            </p>
            <p className="mb-3 ">
              <span className="font-bold text-[#309CFF]">
                {' '}
                <Link to={''}>inMessaging</Link>{' '}
              </span>{' '}
              - The Messaging feature enables you to chat with colleagues and
              build personal connections and networks required for your career
              advancement.
            </p>
            <p className="mb-3 ">
              <span className="font-bold text-[#309CFF]">
                <Link to={''}>Checklists</Link>{' '}
              </span>{' '}
              - This is an important part and it is required that you complete
              all the tasks assigned to you within timeline stated. If you are
              not able to complete any of the task before deadline, please
              contact the team immediately and we will assist you.
            </p>
            <p className="mb-3 ">
              <span className="font-bold text-[#309CFF]">
                <Link to={''}>Events</Link>{' '}
              </span>{' '}
              -We will be adding events required to prepare you for your
              program. These events are essential part of the onboarding process
              and it is important that you be a part of these events
            </p>
          </div>
        }
      </ContentCard>
    </React.Fragment>
  )
}
