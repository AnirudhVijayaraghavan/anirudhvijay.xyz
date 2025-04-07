// HistoryCard.jsx
import React, { useState } from 'react';
import HistoryModal from './HistoryModal';
import '../csspages/AboutCards.css';

function HistoryCard({ data, timelineData }) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="card" onClick={() => setModalOpen(true)}>
                <h3>{data ? data[0] : 'History'}</h3>
                <br/>
                <p>{data ? data[1] : 'Click to view timeline.'}</p>
                
            </div>
            {modalOpen && (
                <HistoryModal
                    timelineData={timelineData}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </>
    );
}

export default HistoryCard;
