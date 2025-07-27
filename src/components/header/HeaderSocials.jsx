import React from 'react';
import IconSpeedometerLoop from './IconSpeedometerLoop';
import IconCompassLoop from './IconCompassLoop';
import IconClock from './IconClock';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <p><IconCompassLoop className="icon-color-primary" /></p>
      <p><IconClock className="icon-color-primary" /></p>
      <p><IconSpeedometerLoop className="icon-color-primary" /></p>
    </div>
  )
}

export default HeaderSocials