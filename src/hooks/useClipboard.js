import { useState } from 'react';

const useClipboard = () => {
    const [successCopy, setSuccessCopy] = useState(false);

    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setSuccessCopy(true);
        } catch (err) {
            setSuccessCopy(false);
            alert('Failed to copy! :(');
        }
    };

    return { successCopy, handleCopy };
};

export default useClipboard;
