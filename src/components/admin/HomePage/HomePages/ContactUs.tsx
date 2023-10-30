import React from 'react'
import ContentCard from '../ContentCard/ContentCard'

export const ContactUsPage: React.FC = () => {
  return (
    <React.Fragment>
      <ContentCard title="CONTACT US">
        {
          <div>
            <p className="mb-2">
              Please get in contact with the team using the email address below:
            </p>
            <p className="mb-3">
              <b>
                {' '}
                <i>
                  <a href="mailto:recruiters@company.com">
                    recruiters@company.com
                  </a>
                </i>
              </b>
            </p>
            <p className="mb-4">
              A member of the team will get back to you as soon as possible
            </p>
            <p className="mb-4">Thank you!</p>
          </div>
        }
      </ContentCard>
    </React.Fragment>
  )
}
