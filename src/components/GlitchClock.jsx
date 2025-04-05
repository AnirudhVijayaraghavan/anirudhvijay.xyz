import React, { useEffect } from 'react';
import $ from 'jquery';
import '../csspages/GlitchClock.css';

function GlitchClock() {
    useEffect(() => {
        function secondPassed() {
            $('.clock').removeClass('is-off');
        }
        setTimeout(secondPassed, 2000);

        $('.switcher').on('click', function (e) {
            e.preventDefault();
            $('.screen').toggleClass('glitch');
        });

        setInterval(function () {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const realTime =
                (hours < 10 ? '0' : '') + hours +
                ' : ' + (minutes < 10 ? '0' : '') + minutes +
                ' : ' + (seconds < 10 ? '0' : '') + seconds;

            $('.time').html(realTime);
            $('.time').attr('data-time', realTime);
        }, 1000);
    }, []);

    return (
        <div className="glitch-clock-container">
            <a href="#" className="switcher"></a>
            <div className="screen glitch">
                <div className="clock is-off">
                    <span className="time" data-time=""></span>
                </div>
                <div className="figure"></div>
                <div className="figure-mask"></div>
            </div>
        </div>
    );
}

export default GlitchClock;