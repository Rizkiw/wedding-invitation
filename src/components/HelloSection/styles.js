import { css } from '@emotion/core';

export const styWrapper = css`
  .info {
    font-style: italic;
  }

  .sub-title {
    color: #828282;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
  }

  .container {
    z-index: 1;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }
  
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

.rose-sway {
  animation: sway 6s ease-in-out infinite;
  transform-origin: left center; /* This makes it "swing" from the left side */
}
.rose-container {
  position: relative;
}

.rose-top-left {
  position: absolute;
  top: -300px;
  left: -10px;
  width: 500px; /* adjust as needed */
  z-index: 0;
}

.leaf-sway {
  animation: sway 6s ease-in-out infinite;
  transform-origin: left center; /* This makes it "swing" from the left side */
}
.leaf-container {
  position: relative;
}

.leaf-top-left {
  position: absolute;
  top: -200px;
  left: -10px;
  width: 180px; /* adjust as needed */
}

@keyframes swayMirroredTop  {
  0% {
    transform: scaleY(-1) rotate(0deg);
  }
  50% {
    transform: scaleY(-1) rotate(-5deg);
  }
  100% {
    transform: scaleY(-1) rotate(0deg);
  }
}

.leaf-bottom-left {
  position: absolute;
  top: 400px;
  left: -10px;
  width: 150px; /* adjust as needed */
  animation: swayMirroredTop 6s ease-in-out infinite;
  transform-origin: left center;
}

// RIGHT SIDE

@keyframes swayMirrored  {
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

.rose-bottom-right {
  position: absolute;
  top: 200px;
  right: -510px;
  width: 500px; /* adjust as needed */
  animation: swayMirrored 6s ease-in-out infinite;
  transform-origin: left center;
  z-index: 0;
}

.bird-top-right {
  position: absolute;
  top: -318px;
  right: -50px;
  width: 250px; /* adjust as needed */
  animation: sway 6s ease-in-out infinite;
  transform-origin: top center;
  z-index: 0;
}


@media screen and (max-width: 500px) {
  .sub-title {
    font-size: 18px;
    margin: 0 0 8px 0;
  }

  p {
    font-size: 16px;
  }

  .rose-top-left {
    top: auto;
    width: 150px; /* adjust as needed */
    z-index: 0;
  }

  .leaf-top-left {
    top: auto;
    width: 60px; /* adjust as needed */
    z-index: 0;
  }

  .bird-top-right, .leaf-bottom-left {
    display: none;
  }

  .rose-bottom-right {
    margin-top: 480px;
    bottom: auto;
    right: -150px;
    width: 130px; /* adjust as needed */
    z-index: 0;
  }
}

@media screen and (max-width: 450px) {
  p {
    font-size: 14px;
  }
}
`;
