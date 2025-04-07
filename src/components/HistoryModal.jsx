// HistoryModal.jsx
import React from 'react';
import '../csspages/HistoryModal.css';

function HistoryModal({ onClose, timelineData }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <h2>My Timeline</h2>
                <div className="timeline">
                    {timelineData.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-date">{item.date}</div>
                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HistoryModal;
