import React from 'react'
import ContentCard from '../ContentCard/ContentCard'

export const OurPurpose: React.FC = () => {
  return (
    <React.Fragment>
      <ContentCard title="Our Purpose">
        {
          <div>
            <p className="mb-5">
              We are strongly guided by our purpose as it underpins every
              decision{' '}
            </p>
            <div>
              Our purpose is to empower individuals and communities by providing
              innovative solutions that enhance everyday life. Through a
              commitment to sustainability, integrity, and excellence, we aim to
              foster a more connected and sustainable world, where our products
              and services inspire positive change and create lasting value for
              our customers, employees, and stakeholders
            </div>
          </div>
        }
      </ContentCard>
    </React.Fragment>
  )
}
