type PropertyCardProps = {
    property: {
        id: string;
        title: string;
        price: number;
        location: string;
        image: string;
    };
};

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    return (
        <div>
            <img 
            src={property.image}
            alt={property.title}
            />
            <div>
                <h2>{property.title}</h2>
                <p>{property.location}</p>
                <p>${property.price}/night</p>
            </div>
        </div>
    )
}
export default PropertyCard;