import React, { useEffect, useState } from 'react';

export function CountDown({ className }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(`2022-8-3`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]}
                {interval === 'seconds' ? '' : ' : '}
            </span>
        );
    });
    return (
        <div className={className}>
            {timerComponents.length ? timerComponents : <></>}
        </div>
    );
}
