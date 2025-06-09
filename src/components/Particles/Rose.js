import React from 'react';
import clsx from 'clsx';

import Rose from '@assets/images/particles/rose-1.webp';
import { styParticles } from './styles';

function RoseParticle({ className }) {
    return (
        <div css={styParticles}>
            <img
                src={Rose}
                alt="rose-animated"
                loading="lazy"
                className={clsx(
                    className
                )}
            />
        </div>
    );
}

export default RoseParticle;