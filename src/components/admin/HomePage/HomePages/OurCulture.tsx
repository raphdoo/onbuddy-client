import React from 'react'
import ContentCard from '../ContentCard/ContentCard'

export const OurCulture: React.FC = () => {
  return (
    <React.Fragment>
      <ContentCard title="OUR Culture">
        {
          <div>
            <p>
              We champion talents and seek to constantly find new ways to how we
              work.
            </p>
            <p>
              our culture is the beating heart of our organization. We foster a
              dynamic and inclusive environment where every individual is
              valued, respected, and encouraged to bring their authentic selves
              to the table. Collaboration and teamwork are ingrained in our DNA,
              as we believe that diverse perspectives and collective efforts
              lead to the most innovative and impactful solutions.
            </p>
            <p>
              We promote a culture of continuous learning and personal growth,
              providing our team members with the resources and support they
              need to thrive both personally and professionally. Open
              communication channels and a flat organizational structure ensure
              that every voice is heard, and ideas are welcomed with enthusiasm
              and consideration.
            </p>
          </div>
        }
      </ContentCard>
    </React.Fragment>
  )
}
