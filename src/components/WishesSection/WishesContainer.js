import React, { useState, useEffect, useCallback } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../../firebase/firebase'; // Ensure firebase.js exports your Firestore instance
import WishesItem from './WishesItem';
import { styButtonWrapper } from './styles';

const INTERVAL_SLIDE = 5000;

function WishesContainer() {
  const [active, setActive] = useState(0);
  const [greetings, setGreetings] = useState([]);
  const [pauseSlide, setPauseSlide] = useState(false);
  const totalWishes = greetings.length || 0;

  const handleSetActive = (isNext = true) => {
    if (isNext) {
      if (active === totalWishes - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    } else {
      if (active === 0) {
        setActive(totalWishes - 1);
      } else {
        setActive(active - 1);
      }
    }

    setPauseSlide(true);

    setTimeout(() => {
      setPauseSlide(false);
    }, INTERVAL_SLIDE);
  };

  const handleSetNext = useCallback(() => {
    if (active === greetings.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const renderWishlist = () => {
    return greetings.map((w, index) => <WishesItem key={index} {...w} isActive={index === active} />);
  };

  // Real-time listener for greetings collection
  useEffect(() => {
    const greetingsRef = collection(db, 'greetings');
    const unsubscribe = onSnapshot(greetingsRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      setGreetings(data);
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  /** Side effect to autoscroll */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseSlide) {
        handleSetNext();
      } else {
        clearInterval(interval);
      }
    }, INTERVAL_SLIDE);

    return () => clearInterval(interval);
  }, [handleSetNext, pauseSlide]);

  return (
    <div className="wrap-testimony">
      {renderWishlist()}
      <div css={styButtonWrapper}>
        <button className="btn btn-sm button-nav" onClick={() => handleSetActive(false)}>{`< Sebelumnya`}</button>
        <button className="btn btn-sm button-nav" onClick={() => handleSetActive(true)}>{`Selanjutnya >`}</button>
      </div>
    </div>
  );
}

export default React.memo(WishesContainer);
