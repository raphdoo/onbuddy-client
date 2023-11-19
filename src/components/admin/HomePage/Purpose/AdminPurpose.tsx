import ContentCollapse from '../../../../components/admin/ContentColaps/ContentColapes'
import ContactSearch from './ContactSearch'
import NewsLetter from './NewLetter'
import SocialWall from './SocialWall'

interface CurrentUser {
  currentUser: any;
}

const AdminPurpose: React.FC<CurrentUser> = ({currentUser}) => {
  return (
    <div>
      {' '}
      <h1 className="font-bold mb-4 text-2xl text-[#309CFF] ">
        Purpose and Strategy
      </h1>
      <div>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, modi tempora incidunt ut labore et
        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
        aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
        qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
        illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      </div>
      <div>
        <ContentCollapse key={'company-bio'} title="Company Bio">
          <div className="ml-6">
            <div>
              <h2 className="font-bold">Mission</h2>
              <p>
                Onbuddy aims to enhance the onboarding process for new hires in
              </p>
            </div>
            <div>
              <h2 className="font-bold">Vision</h2>
              <p>
                Onbuddy aims to enhance the onboarding process for new hires in
              </p>
            </div>
            <div>
              <h2 className="font-bold">Values</h2>
              <p>
                Onbuddy aims to enhance the onboarding process for new hires in
              </p>
            </div>
          </div>
        </ContentCollapse>
        <ContentCollapse title="Social Walls" key={'Social Walls'}>
          <div className="ml-2">
            {currentUser && <SocialWall currentUser={currentUser}/>}
          </div>
        </ContentCollapse>
        <ContentCollapse title="Updates" key={'Updates'}>
          <h1>Upadate</h1>
        </ContentCollapse>
        <ContentCollapse title="Newsletter" key={'Newsletter'}>
          <NewsLetter />
        </ContentCollapse>
        <ContentCollapse title="Contact Book" key={'Contact Book'}>
          <ContactSearch />
        </ContentCollapse>
        <ContentCollapse title="Events" key={'Events'}>
          <h1>Events</h1>
        </ContentCollapse>
        <ContentCollapse title="Messages" key={'Messages'}>
          <h1>Messages</h1>
        </ContentCollapse>
        <ContentCollapse title="Checklist " key={'Checklist '}>
          <h1>Checklist </h1>
        </ContentCollapse>
      </div>
    </div>
  )
}

export default AdminPurpose
