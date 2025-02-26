import React, { useState, Fragment } from 'react';
import { object } from 'prop-types';
import getQueryValue from '@helpers/getQueryValue';
/**
 * List of local components
 */
import MainLayout from '@components/Layout';
import WelcomeSection from '@components/WelcomeSection';
import HelloSection from '@components/HelloSection';
import WeddingSection from '@components/WeddingSection';
import LocationSection from '@components/LocationSection';
import PhotoSection from '@components/PhotoSection/Loadable';
import WishesSection from '@components/WishesSection';
import FooterSection from '@components/FooterSection';
import FloatingMusic from '@components/FloatingMusic/Loadable';
import GreetingForm from '@components/GreetingForm';

function Home({ location }) {
  const guestName = decodeURIComponent(getQueryValue(location, 'to') || '');
  const isInvitation = getQueryValue(location, 'type') === 'invitation';
  const isMatrimoni = getQueryValue(location, 'type') === 'holymatrimoni';
  const isAnonymGuest = guestName === '' && !isInvitation;
  const codeLink = getQueryValue(location, 'code') || '';
  const finalTicketLink = `code=${codeLink}&name=${guestName}`;
  const [showDetailContent, setShowDetailContent] = useState(false);

  const handleClickDetail = () => {
    setShowDetailContent(true);
  };

  const renderDetailContent = () => {
    if (!showDetailContent) return null;
    return (
      <Fragment>
        <FloatingMusic />
        <HelloSection />
        <WeddingSection
          isMatrimoni={isMatrimoni}
        />
        <LocationSection
          isMatrimoni={isMatrimoni}
        />
        {/* <StorySection /> */}
        <PhotoSection />
        <WishesSection />
        <GreetingForm />
        <FooterSection />
      </Fragment>
    );
  };

  return (
    <MainLayout>
      <WelcomeSection
        guestName={guestName}
        isAnonymGuest={isAnonymGuest}
        isInvitation={isInvitation}
        location={location}
        codeLink={finalTicketLink}
        isMatrimoni={isMatrimoni}
        onClickDetail={handleClickDetail}
      />
      {renderDetailContent()}
    </MainLayout>
  );
}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
