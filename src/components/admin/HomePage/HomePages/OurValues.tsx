import React from 'react'
import ContentCard from '../ContentCard/ContentCard'

export const OurValues: React.FC = () => {
  return (
    <React.Fragment>
      <ContentCard title="OUR VALUES">
        {
          <div>
            <p className="mb-5">
              Welcome to [Company Name], where we believe in the power of
              innovation and integrity to drive positive change. As a leading
              [industry/sector] company, we are dedicated to delivering
              cutting-edge solutions that not only meet the needs of our
              customers but also contribute to a more sustainable and
              interconnected world. Our commitment to excellence, collaboration,
              and customer satisfaction forms the foundation of our values,
              guiding us as we navigate the dynamic landscape of
              [industry/sector] with adaptability and a customer-centric
              approach. At [Company Name], we are not just building a business;
              we are fostering a community that values diversity, inclusivity,
              and accountability, and strives to make a meaningful impact on
              both the industry and the broader global community. Join us on
              this journey as we redefine possibilities and set new standards
              for [industry/sector] excellence.
            </p>
            <p className="mb-4 font-semibold">This is who we are...</p>
            <p>We are bound by our value system</p>
            <ol className="list-decimal ml-8">
              <li>Innovation</li>
              <li>Excellence</li>
              <li>Professionalism</li>
              <li>Integrity</li>
            </ol>
          </div>
        }
      </ContentCard>
    </React.Fragment>
  )
}
