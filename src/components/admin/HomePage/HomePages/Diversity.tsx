import React from 'react'
import ContentCard from '../ContentCard/ContentCard'
import { Link } from 'react-router-dom'

export const Diversity: React.FC = () => {
  return (
    <React.Fragment>
      <ContentCard title="DIVERSITY AND INCLUSION">
        {
          <div>
            <p>
              We are on a mission to build an inclusive organisation. This is
              important to us because we want everyone to feel welcome. This is
              central to our purpose
            </p>
            <p>
              To find out more about what we are doing to build an inclusive
              organisation. Please read more{' '}
              <Link className="text-blue-500 font-semibold" to={''}>
                here
              </Link>
            </p>
          </div>
        }
      </ContentCard>
    </React.Fragment>
  )
}
