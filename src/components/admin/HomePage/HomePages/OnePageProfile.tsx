import React from 'react'
import ContentCard from '../ContentCard/ContentCard'
import { Link } from 'react-router-dom'

export const OnePageProfile: React.FC = () => {
  return (
    <React.Fragment>
      <ContentCard title="YOUR ONE PAGE PROFILE">
        {
          <div>
            <p className="mb-3">
              Ahead of your joining us, we would like to send your managers a
              one page profile of you to give them insight into just a bit more
              about you.
            </p>
            <p className="mb-5">
              You can download the one page profile template{' '}
              <Link to={''} className="ml-2">
                here
              </Link>
            </p>
            <p className="mb-4">
              Please fill and send to{' '}
              <b>
                <i>
                  <a href="mailto:recruiter@company">recruiter@company</a>
                </i>
              </b>{' '}
              before 20th June, 2022.
            </p>
            <p className="mb-4">
              If you have any questions about this, please get in touch with our
              team
            </p>
          </div>
        }
      </ContentCard>
    </React.Fragment>
  )
}
