import React from 'react'
import ContentCard from '../ContentCard/ContentCard'
import SocialWall from '../Purpose/SocialWall'

interface CurrentUser {
  currentUser: any;
}


export const SocialPage: React.FC<CurrentUser> = ({currentUser}) => {
  return (
    <React.Fragment>
      <ContentCard title="SOCIALS">
        <p className="mb-3">
          Here is a great place to connect with your colleagues. Its a great
          place to share information about yourself, and to ask questions.
        </p>
        <p className="mb-3">We hope you find this section useful</p>
        <div>
          <SocialWall currentUser={currentUser} />
        </div>
      </ContentCard>
    </React.Fragment>
  )
}
