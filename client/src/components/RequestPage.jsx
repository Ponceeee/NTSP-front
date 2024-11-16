import React, { useState, useEffect } from 'react';
import Sidebar from './AdminSidebar'; // Ensure the correct path
import Navbar from './Navbar'; // Ensure the correct path
import '../css/Navbar.css';
import '../css/RequestPage.css';

function RequestPage() {
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState({ title: '', image: '', status: '' });
    const [borrowTime, setBorrowTime] = useState('');
    const [isBookButtonActive, setIsBookButtonActive] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://apis.google.com/js/api.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        setIsBookButtonActive(!!borrowTime);
    }, [borrowTime]);

    const openOverlay = (item) => {
        setSelectedItem(item);
        setOverlayVisible(true);
        setBorrowTime('');
    };

    const closeOverlay = () => {
        setOverlayVisible(false);
    };

    return (
        <div>
            <Sidebar />
            <section id="content">
                <Navbar />
                <main></main>
            </section>
        </div>
    );
}

export default RequestPage;