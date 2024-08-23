import { useEffect } from 'react';
import './Detail.css';

function Detail({ property, onBack }) {
    useEffect(() => {
        document.title = "Detail | Silicon Valley Real Estate";
    }, []);

    if (!property) return <p>No property details available.</p>;

    return (
        <div className="detail-page">
            <h1>{property.title}</h1>
            <img src={property.image} alt={property.title} style={{ maxWidth: "100%", height: "auto" }}/>
            <p><strong>Price:</strong> {property.price}</p>
            <p><strong>Description:</strong> {property.description}</p>
            <p><strong>Detailed Description:</strong> {property.detailedDescription}</p>
            <button onClick={onBack}>Return to Listing</button>
        </div>
    );
}

export default Detail;
