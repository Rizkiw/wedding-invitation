import React from 'react';
import clsx from 'clsx';

import Bird from '@assets/images/particles/parket.webp';
import { styParticles } from './styles';

function BirdParticle({ className }) {
    return (
        <div css={styParticles}>
            <img
                src={Bird}
                alt="bird-animated"
                loading="lazy"
                className={clsx(
                    className
                )}
            />
        </div>
    );
}

export default BirdParticle;