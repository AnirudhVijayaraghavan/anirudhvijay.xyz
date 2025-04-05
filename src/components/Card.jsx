import React from 'react';
import '../csspages/AboutCards.css';
import techIconMap from '../matrix/techicons';

function Card({ data, content, techs }) {
    // If a "techs" prop is provided, render the icons
    if (techs && techs.length > 0) {
        return (
            <div className="card">
                <h3>{data ? data[0] : 'Default Title'}</h3>
                <div className="tech-icons">
                    {techs.map((tech, index) => (
                        <div key={index} className="tech-icon">
                            {techIconMap[tech] || tech}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Otherwise, render the content from the JSON.
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
