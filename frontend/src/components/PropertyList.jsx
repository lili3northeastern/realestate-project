import { useEffect, useState } from 'react';  // React 

function PropertyList() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/properties/')
            .then(response => response.json())
            .then(data => {
                setProperties(data);
            })
            .catch(error => console.error('Error fetching properties:', error));
    }, []);

    return (
        <div>
            <h1>Property List</h1>
            <ul>
                {properties.map(property => (
                    <li key={property.id}>
                        <h2>{property.title}</h2>
                        <p>{property.description}</p>
                        <p>Price: ${property.price}</p>
                        <p>Address: {property.address}</p>
                        <img src={property.image_url} alt={property.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PropertyList;
