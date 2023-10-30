import React from 'react'
import ContentCard from '../ContentCard/ContentCard'
import { Link } from 'react-router-dom'

export const Learning: React.FC = () => {
  return (
    <React.Fragment>
      <ContentCard title="LEARNING AND DEVELOPMENT">
        {
          <div>
            <p className="mb-3">
              At [Company Name], we are committed to fostering a culture of
              continuous learning and professional growth. We promise to provide
              our employees with enriching opportunities and resources that
              empower them to expand their skills, knowledge, and capabilities.
              Through tailored development programs, mentorship initiatives, and
              access to cutting-edge learning technologies, we aim to support
              our team members in reaching their full potential and achieving
              their career aspirations.
            </p>
            <p>
              To find out more about what we are doing to about learning and
              development, please read more
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
