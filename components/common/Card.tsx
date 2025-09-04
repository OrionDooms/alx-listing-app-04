import React from 'react';
import Button from './Button';
import { PropertyProps } from "@/interfaces";
import Pill from "./Pill";

interface CardProps {
    property: PropertyProps;
}

interface Card_info {
    image: string;
    title: string;   
    description: string;
}

export const Card = ({title, image, description}: Card_info) => {
    return (
        <div className='border rounded-lg overflow-hidden shadow-md'>
            <img src={image} alt={title} className='w-full h-48 object-cover'/>
            <p>image</p>
            
            <div className="p-4">

            <h2 className='text-xl font-semibold mb-2'>{title}title</h2>
            <p className="text-gray-600">{description}description</p>
        </div>
        </div>
    );
}

export default Card;