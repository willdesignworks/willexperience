import React from 'react';

const IconSpeedometerLoop = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <mask id="lineMdSpeedometerLoop0">
        <path
          fill="none"
          stroke="currentColor"
          strokeDasharray="48"
          strokeDashoffset="48"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.64 19.36c-3.52 -3.51 -3.52 -9.21 0 -12.72c3.51 -3.52 9.21 -3.52 12.72 -0c3.52 3.51 3.52 9.21 0 12.72"
        >
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0" />
        </path>
        <g transform="rotate(-100 12 13)">
          <path d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z">
            <animate
              fill="freeze"
              attributeName="d"
              begin="0.4s"
              dur="0.2s"
              values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M17 13C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13C7 10.2386 12 -2 12 -2C12 -2 17 10.2386 17 13Z"
            />
          </path>
          <path fill="currentColor" d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z">
            <animate
              fill="freeze"
              attributeName="d"
              begin="0.4s"
              dur="0.2s"
              values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M15 13C15 14.6568 13.6569 16 12 16C10.3431 16 9 14.6568 9 13C9 11.3431 12 2 12 2C12 2 15 11.3431 15 13Z"
            />
          </path>
          <animateTransform
            attributeName="transform"
            begin="0.4s"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="-100 12 13;65 12 13;65 12 13;65 12 13;30 12 13;10 12 13;0 12 13;35 12 13;55 12 13;65 12 13;75 12 13;15 12 13;-20 12 13;-100 12 13"
          />
        </g>
      </mask>
      <rect width="24" height="24" fill="currentColor" mask="url(#lineMdSpeedometerLoop0)" />
    </svg>
  );
};

export default IconSpeedometerLoop;
