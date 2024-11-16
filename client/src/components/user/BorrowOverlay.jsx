import React, { useState } from 'react';

const BorrowOverlay = ({ item, onClose }) => {
    const [bookingDate, setBookingDate] = useState('');
    const [startTime, setStartTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const requestItem = {
                id: 'req_' + Date.now(),
                title: item.name,
                image: item.image,
                date: new Date(bookingDate).toLocaleDateString(),
                time: startTime,
                status: 'Pending',
                requestedAt: new Date().toISOString(),
                itemStatus: item.status
            };

            // Save to localStorage (replace with your API call)
            const requestedItems = JSON.parse(localStorage.getItem('requestedItems')) || [];
            requestedItems.unshift(requestItem);
            localStorage.setItem('requestedItems', JSON.stringify(requestedItems));

            // Show success message and redirect
            alert('Request submitted successfully!');
            onClose();

        } catch (err) {
            console.error('Error in handleBooking:', err);
            alert('Error submitting request: ' + err.message);
        }
    };

    return (
        <div className="overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="overlay-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <div className="item-details">
                    <img src={item.image} alt={item.name} />
                    <div className="details">
                        <h2>{item.name}</h2>
                        <p className={`status ${item.status.toLowerCase()}`}>{item.status}</p>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="booking-details">
                                <div className="date-picker">
                                    <h3>Select Date and Time</h3>
                                    <input
                                        type="date"
                                        value={bookingDate}
                                        onChange={(e) => setBookingDate(e.target.value)}
                                        min={new Date().toISOString().split('T')[0]}
                                        required
                                    />
                                    <div className="time-slots">
                                        <div className="time-picker">
                                            <label>Borrow Time:</label>
                                            <input
                                                type="time"
                                                value={startTime}
                                                onChange={(e) => setStartTime(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="borrow-btn">Book Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BorrowOverlay;