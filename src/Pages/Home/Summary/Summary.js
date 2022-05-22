import React, { useEffect, useRef, useState } from 'react';
import { UserGroupIcon, ThumbUpIcon, CashIcon, CogIcon } from '@heroicons/react/outline';
import useOnScreen from '../../../hooks/useOnScreen';

const Summary = ({ data, index }) => {
    // destructuring the props
    const { name, value } = data;

    // integration of react hooks
    const [counter, setCounter] = useState(0);
    const isOnScreenRef = useRef();

    // integration of custom hooks
    const isVisible = useOnScreen(isOnScreenRef);

    // counting up to the summary value
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (isVisible) {
                if (counter < value) {
                    setCounter(counter + 1);
                }
            }
        }, value > 100 ? 5 : 10);

        return () => clearInterval(intervalId);
    }, [isVisible, counter, value]);

    // rendering summary card component here
    return (
        <div className='border border-accent px-6 py-8'>
            {index === 0 && <UserGroupIcon className='h-24 w-24 mx-auto mb-3 text-neutral' />}
            {index === 1 && <ThumbUpIcon className='h-24 w-24 mx-auto mb-3 text-neutral' />}
            {index === 2 && <CashIcon className='h-24 w-24 mx-auto mb-3 text-neutral' />}
            {index === 3 && <CogIcon className='h-24 w-24 mx-auto mb-3 text-neutral' />}
            <h2 ref={isOnScreenRef} className='text-5xl font-semibold mb-2 text-primary'>{counter}{index === 1 && 'K+'}{index === 2 && 'M+'}{(index === 0 || index === 3) && '+'}</h2>
            <p className='text-lg font-extralight'>{name}</p>
        </div>
    );
};

export default Summary;