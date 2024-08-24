import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // PropTypes
import './Listing.css';

function Listing({ onPropertySelect }) {
    useEffect(() => {
        document.title = "On Sale Properties | Silicon Valley Real Estate";
    }, []);

    const [filterPrice, setFilterPrice] = useState(''); 

    const properties = [
        { id: 1, title: "123 9th St, San Jose CA 95118", price: "$1,600,000", description: "3b2b SFH, 1500 sq ft, 5000 sq ft lot", image: "images/property1.jpg", detailedDescription: "Constructed in 1963, the property consists of three-bedroom/two-bathroom units, presenting a desirable unit mix that offers a strong investment opportunity. With a total building size of 1,500 square feet situated on a spacious lot spanning 5,000 square feet, this property presents strong value-add opportunities. It also features dual pane windows, private outdoor spaces and balconies, private garages, coin-operated laundry facilities, and more, enhancing the appeal and functionality of the investment. The property is close to major highways, shopping centers like Westgate Center and Santana Row. It features easy access to Almaden Expwy and Highway 85. Finally, the property is surrounded by renowned tech companies including Google, Apple, and Cisco Systems, offering abundant employment opportunities for potential tenants."},
        { id: 2, title: "567 Willowbrook Pl, Sunnyvale CA 94087", price: "$3,500,000", description: "4b3b SFH, 2500 sq ft, 8000 sq ft lot", image: "images/property2.jpg", detailedDescription: "Ranch style home. Remodeled kitchen/family room with gas fireplace and remodeled bathrooms. Separate Family and Living Rooms with crown molding throughout. Wolf brand cooking appliances. Fully landscaped front and backyards with natural gas fire pits." },
        { id: 3, title: "890 Shaw Dr, Fremont CA 94536", price: "$2,800,000", description: "5b3b SFH, 2300 sq ft, 9000 sq ft lot", image: "images/property3.jpg", detailedDescription:"Discover this exceptional 5-bedroom, 3-bathroom home that presents a perfect investment opportunity for those seeking a property designed for multigenerational living or potential rentals. Currently generating a total rent of $6,500, this property showcases its earning potential with each of the three wings occupied by separate tenants, emphasizing privacy and convenience. The main house features a modern kitchen with granite countertops, a dining room illuminated by a skylight, a large living room with granite-topped cabinets and a wet bar, alongside three bedrooms and a bathroom. The West wing's master suite provides solitude with its own bathroom, a second living room with a skylight, and a kitchenette for independent living. The North wing offers a junior suite with a separate entrance, making it ideal for extended family or as a rental opportunity. Outdoors, the property boasts a deck, an abundance of citrus trees, and a spacious shed with electricity, perfect for entertainment or hobbies. Located in a sought-after area close to shopping and schools, this versatile home combines functionality with the potential for customization, making it an attractive option for investors or families desiring a space that meets everyone's needs." },
    ];

    const handleFilterChange = (e) => {
        setFilterPrice(e.target.value);
    };

    const filteredProperties = properties.filter(property => {
        const price = Number(property.price.replace(/[$,]/g, ''));
        return filterPrice === '' || price <= filterPrice;
    });

    return (
        <div>
            <h1>On Sale Properties</h1>
            <input 
                type="text" 
                placeholder="Filter by price" 
                value={filterPrice} 
                onChange={handleFilterChange} 
                style={{marginBottom: '20px'}}
            />
            <div className="property-list">
                {filteredProperties.map(property => (
                    <div key={property.id} className="property-item" onClick={() => onPropertySelect(property)}>
                    <img src={property.image} alt={property.title} />
                    <h2>{property.title}</h2>
                    <p>{property.price}</p>
                    <p>{property.description}</p>
                </div>
                ))}
            </div>
        </div>
    );
}

Listing.propTypes = {
    onPropertySelect: PropTypes.func.isRequired,  //  PropTypes 
};

export default Listing;
