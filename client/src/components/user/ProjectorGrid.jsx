import React from 'react';

const ProjectorGrid = ({ searchTerm, selectedFilters, onItemClick }) => {
    // Sample data - replace with your actual data source
    const projectors = [
        {
            id: 1,
            image: "/img/DLP.webp",
            name: "Epson 703HD Powerlite Home Cinema LCD Projector",
            status: "AVAILABLE"
        },
        // Add more projectors...
    ];

    const filteredProjectors = projectors.filter(projector => {
        const matchesSearch = projector.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            projector.status.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = selectedFilters.includes(projector.status.toLowerCase());
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="projector-grid">
            {filteredProjectors.map(projector => (
                <div 
                    key={projector.id}
                    className="projector-card" 
                    onClick={() => onItemClick(projector)}
                >
                    <img src={projector.image} alt={projector.name} />
                    <div className="projector-details">
                        <h3>{projector.name}</h3>
                        <p className={`status ${projector.status.toLowerCase()}`}>
                            {projector.status}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectorGrid;