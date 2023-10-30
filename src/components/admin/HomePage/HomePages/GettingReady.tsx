import React from 'react'
import ContentCard from '../ContentCard/ContentCard'

export const GettingReady: React.FC = () => {
  return (
    <React.Fragment>
      <ContentCard title="GETTING READY FOR DAY ONE">
        {
          <div>
            <p className="mb-3">
              Once again, we are excited to have you work with us and we look
              forward to your day one. We hope you have familiarized yourself
              with the platform.
            </p>
            <p className="mb-5">
              There are a few tasks to be completed before you join us and a
              checklist of the tasks is available in the checklist section.{' '}
            </p>
            <p className="mb-4">
              If you have any further questions, please send them to:
              <b className="ml-1">
                {' '}
                <i>recruiter@company.com</i>
              </b>
            </p>
            <p className="mb-4">Thank you!</p>
          </div>
        }
      </ContentCard>
    </React.Fragment>
  )
}
