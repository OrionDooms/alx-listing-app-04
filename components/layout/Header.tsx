import React from "react";

const Header: React.FC = () => {
    return (
        <header className="w-full flex flex-col gap-4 px-6 py-4 shadow-md bg-white text-white">
            <div className="flex items-center justify-between">
                 <h1 className="text-2xl font-bold text-blue-600">stayFinder</h1>
                 <div className="flex gap-4">
                    <button className="px-4 py-2 border rounded">Sign In</button>
                     <button className="px-4 py-2 bg-blue-500 text-white rounded">Sign up</button>
                 </div>
            </div>
           
           <div className="flex justify-center">
            <input type="text" placeholder="Search for listings..." className="w-full max-w-lg px-4 py-2 border rounded" />
           </div>

           <nav className="flex text-sm overflow gap-4 font-medium text-gray-600">
               <button className="hover:text-blue-600">Rooms</button>
               <button className="hover:text-blue-600">Mansions</button>
               <button className="hover:text-blue-600">CountrySide</button>
               <button className="hover:text-blue-600">Apartment</button>
               <button className="hover:text-blue-600">Villas</button>
           </nav>
        </header>
    );

};
export default Header;