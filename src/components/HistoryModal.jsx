// HistoryModal.jsx
import React from 'react';
import '../csspages/HistoryModal.css';
import { FaDownload } from 'react-icons/fa';

function HistoryModal({ onClose, timelineData }) {
    // Function to trigger resume download
    const handleDownload = () => {
        // Create a temporary <a> element
        const link = document.createElement('a');
        // Set the href to the location of your resume file; ensure the file is in your public folder
        link.href = '/Anirudh_Vijayaraghavan_Resume-3.pdf'; // Adjust this path as needed
        // Set the download attribute to specify the filename for the downloaded file
        link.download = 'Anirudh_Vijayaraghavan_Resume.pdf';
        // Append to the body (required for Firefox)
        document.body.appendChild(link);
        link.click();
        // Clean up and remove the temporary element
        document.body.removeChild(link);
    };
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <h2>My Timeline</h2> {/* Download Resume Button */}
                <br/>
                {/* <button className="download-resume" onClick={handleDownload}>
                    Resume <FaDownload className="download-icon" />
                </button> */}
                <button class='glowing-btn' onClick={handleDownload}><span class='glowing-txt'>
                    R<span class='faulty-letter'>e</span>s<span class='faulty-letter'>um</span>e</span>
                    <FaDownload className="download-icon" />
                </button>
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
