import { css } from '@emotion/core';

export const styParticles = css`
  @keyframes sway {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  // RIGHT SIDE
  @keyframes swayMirrored {
    0% {
      transform: scaleX(-1) rotate(0deg);
    }
    50% {
      transform: scaleX(-1) rotate(-5deg);
    }
    100% {
      transform: scaleX(-1) rotate(0deg);
    }
  }

  // ROSE PARTICLE
  .rose-top-left {
    position: absolute;
    top: -300px;
    left: -10px;
    width: 500px; /* adjust as needed */
    animation: sway 6s ease-in-out infinite;
    transform-origin: left center; /* This makes it "swing" from the left side */
    z-index: 0;
  }

  .rose-top-right {
    position: absolute;
    top: -300px;
    right: -510px;
    width: 500px; /* adjust as needed */
    animation: swayMirrored 6s ease-in-out infinite;
    transform-origin: left center;
    z-index: 0;
  }

  .rose-bottom-left {
    position: absolute;
    top: 200px;
    left: -10px;
    width: 500px; /* adjust as needed */
    animation: sway 6s ease-in-out infinite;
    transform-origin: left center;
    z-index: 0;
  }

  .rose-bottom-right {
    position: absolute;
    top: 200px;
    right: -510px;
    width: 500px; /* adjust as needed */
    animation: swayMirrored 6s ease-in-out infinite;
    transform-origin: left center;
    z-index: 0;
  }

  // LEAF PARTICLE
  .leaf-top-left {
    position: absolute;
    top: -200px;
    left: -10px;
    width: 180px; /* adjust as needed */
    animation: sway 6s ease-in-out infinite;
    transform-origin: left center; /* This makes it "swing" from the left side */
  }

  .leaf-top-right {
    position: absolute;
    top: -300px;
    right: -210px;
    width: 180px; /* adjust as needed */
    animation: swayMirrored 6s ease-in-out infinite;
    transform-origin: left center; /* This makes it "swing" from the left side */
  }

  .leaf-bottom-left {
    position: absolute;
    top: 400px;
    left: -10px;
    width: 150px; /* adjust as needed */
    animation: sway 6s ease-in-out infinite;
    transform-origin: left center;
    z-index: 0;
  }

  .leaf-bottom-right {
    position: absolute;
    top: 400px;
    right: -210px;
    width: 180px; /* adjust as needed */
    animation: swayMirrored 6s ease-in-out infinite;
    transform-origin: left center; /* This makes it "swing" from the left side */
  }

  // BIRD PARTICLE
  .bird-top-right {
    position: absolute;
    top: -318px;
    right: -50px;
    width: 250px; /* adjust as needed */
    animation: sway 6s ease-in-out infinite;
    transform-origin: top center;
    z-index: 0;
  }

  .bird-top-left {
    position: absolute;
    top: -318px;
    left: -20px;
    width: 250px; /* adjust as needed */
    animation: swayMirrored 6s ease-in-out infinite;
    transform-origin: top center;
    z-index: 0;
  }

  @media screen and (max-width: 500px) {
    .rose-top-left {
      top: auto;
      width: 150px; /* adjust as needed */
      z-index: 0;
    }

    .rose-bottom-right {
      margin-top: 480px;
      bottom: auto;
      right: -150px;
      width: 130px; /* adjust as needed */
      z-index: 0;
    }

    .leaf-top-left {
      top: auto;
      width: 60px; /* adjust as needed */
      z-index: 0;
    }

    .bird-top-right,
    .leaf-bottom-left .leaf-bottom-right {
      display: none;
    }
  }
`;
