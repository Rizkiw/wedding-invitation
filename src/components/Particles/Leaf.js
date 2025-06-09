import React from 'react';
import clsx from 'clsx';

import Leaf from '@assets/images/particles/leaf-1.webp';
import { styParticles } from './styles';

function LeafParticle({ className }) {
    return (
        <div css={styParticles}>
            <img
                src={Leaf}
                alt="leaf-animated"
                loading="lazy"
                className={clsx(
                    className
                )}
            />
        </div>
    );
}

export default LeafParticle;