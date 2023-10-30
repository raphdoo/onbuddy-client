import React from 'react'
import ContentCard from '../ContentCard/ContentCard'
import { Link } from 'react-router-dom'

export const Health: React.FC = () => {
  return (
    <React.Fragment>
      <ContentCard title="HEALTH AND WELLNESS">
        {
          <div>
            <p>
              We understand that in order to be a great place to work, we must
              prioritse the heath and wellness of our people. We have won
              several awards in the health and wellness categories which
              evidents how important this is to our buisness. We have championed
              this by allowing colleagues take charge of their wellness so they
              can be at their best.
            </p>
            <p>
              To find out more about what we are doing to about wellbeing,
              please read more
              <Link className="ml-2 text-blue-500 font-semibold" to={''}>
                here
              </Link>
            </p>
          </div>
        }
      </ContentCard>
    </React.Fragment>
  )
}
