import React from 'react'
import ContentCard from '../ContentCard/ContentCard'
import ContentCollapse from 'components/admin/ContentColaps/ContentColapes'
import ContactSearch from '../Purpose/ContactSearch'

export const ContactBooks: React.FC = () => {
  return (
    <React.Fragment>
      <ContentCard title="CONTACTS BOOK">
        {
          <div>
            <p>
              You can use this page to find out more information about your
              colleagues and build your network by using the messaging feature
            </p>
            <div>
              <ContentCollapse title="View contact list" key={'contact'}>
                <ContactSearch />
              </ContentCollapse>
            </div>
          </div>
        }
      </ContentCard>
    </React.Fragment>
  )
}
