import React from 'react';
import '../csspages/AboutCards.css';
import techIconMap from '../matrix/techicons';

function Card({ data, content, techs, funItems }) {
    // Otherwise, render default text/HTML content.
    const textContent = data ? data[1] : content;
    const containsHTML = /<\/?[a-z][\s\S]*>/i.test(textContent);
    return (
        <div className="card">
            <h3>{data ? data[0] : 'Default Title'}</h3>
            {containsHTML ? (
                <p dangerouslySetInnerHTML={{ __html: textContent }} />
            ) : (
                <p>{textContent}</p>
            )}
        </div>
    );
}

export default Card;
