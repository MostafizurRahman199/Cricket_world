import React, { useContext } from 'react';
import FlagIcon from '@mui/icons-material/Flag';
import MyContext from '../utils/MyContext';
import GradeIcon from '@mui/icons-material/Grade';

export default function PlayerCard({ player }) {
    const { handlePlayerSelect } = useContext(MyContext);
    const { image, name, country, role, rating, battingStyle, price } = player;

    const ratingGets = (rating) => {
        const icons = [];
        for (let i = 1; i <= rating; i++) {
            icons.push(<GradeIcon style={{color:'gold'}} key={i} />);
        }
        return icons;
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-2 m-4 hover:shadow-2xl transition-all hover:scale-105 duration-500">
            <img className="w-full h-48 object-cover rounded-t-md" src={image} alt="Player" />

            <div className="px-1 md:px-4 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                        <div className="flex items-center text-gray-500">
                            <FlagIcon />
                            <p className="text-sm">{country}</p>
                        </div>
                    </div>
                    <div className="px-2 py-1 bg-gray-200 rounded-2xl text-xs font-medium text-gray-700 text-center">
                        {role}
                    </div>
                </div>

                <div className="mt-4 flex justify-between text-sm text-gray-600">
                    <div>
                        <p className="font-medium">Rating: {rating}</p>
                        <div className="flex flex-wrap ">{ratingGets(rating)}</div>
                    </div>
                    <div>
                        <p className="font-medium">Batting Style</p>
                        <p>{battingStyle}</p>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                    <p className="font-medium text-gray-800">
                        Price: <span className="font-semibold">${price}</span>
                    </p>
                    <button
                        onClick={() => handlePlayerSelect(player)}
                        className="btn px-2 py-0 bg-transparent border-2 hover:bg-gradient-to-r from-rose-400 to-yellow-400 text-black font-bold hover:border-white"
                    >
                        Choose Player
                    </button>
                </div>
            </div>
        </div>
    );
}
