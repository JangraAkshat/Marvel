import React from 'react';
import './Characters.css';

const Characters = ({ data, onClick }) => {
    return (
        <div className='characters'>
            {data.map(character => (
                <div
                    key={character.id}
                    className='characterCard'
                    style={{ backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})`, backgroundSize: 'cover' }}
                    onClick={() => onClick(character.id)}
                >
                    <div className='caption'>{character.name}</div>
                    <div className='bottom'>View Comics</div>
                </div>
            ))}
        </div>
    );
};

export default Characters;
