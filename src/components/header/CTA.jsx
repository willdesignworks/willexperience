import React from 'react';
import CV from '../../assets/will_works_ 20240603.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download 履歷
      </a>
      {/* <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>*/}
    </div>
  );
};

export default CTA;
