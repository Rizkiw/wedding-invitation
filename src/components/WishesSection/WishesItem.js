import React from 'react';
import { string, bool } from 'prop-types';
import { styWrapperItem, styWithAnimation } from './styles';

function WishesItem({ name, message, isActive }) {
  if (!isActive) return null;

  const renderItem = () => {
    return (
      <div className="item" css={styWrapperItem}>
        <div className={`testimony-slide text-center ${isActive ? 'active' : 'hide'}`}>
          <h4>{name}</h4>
          <blockquote>
            <p className="description">{message}</p>
          </blockquote>
        </div>
      </div>
    );
  };

  return <div css={styWithAnimation(isActive)}>{renderItem()}</div>;
}

WishesItem.propTypes = {
  name: string.isRequired,
  isActive: bool.isRequired,
};

export default React.memo(WishesItem);
