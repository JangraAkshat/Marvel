import React, { useState, useRef } from 'react';
import md5 from 'md5';
import Characters from '../Characters';
import Comics from '../Comics/Comics';
import './Search.css';
import notFoundImage from '../../../assets/notFoundImage.png';

const Search = () => {
    const [characterName, setCharacterName] = useState('');
    const [characterData, setCharacterData] = useState(null);
    const [comicData, setComicData] = useState(null);
    const [noResults, setNoResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const buttonRef = useRef(null);

    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const privateKey = process.env.REACT_APP_PRIVATE_KEY;

    const handleSubmit = (e) => {
        e.preventDefault();
        getCharacterData();
    };

    const getCharacterData = () => {
        setCharacterData(null);
        setComicData(null);
        setNoResults(false);
        setLoading(true);

        const timeStamp = new Date().getTime();
        const hash = generateHash(timeStamp);

        const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&hash=${hash}&ts=${timeStamp}&nameStartsWith=${characterName}&limit=100`;

        fetch(url)
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                if (result.data.results.length === 0) {
                    setNoResults(true);
                } else {
                    setCharacterData(result.data);
                }
            })
            .catch(error => {
                setLoading(false);
                console.log('There was an error', error);
            });
    };

    const getComicData = (characterId) => {
        window.scrollTo({ top: 0, left: 0 });
        setLoading(true);

        const timeStamp = new Date().getTime();
        const hash = generateHash(timeStamp);

        const url = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?apikey=${publicKey}&hash=${hash}&ts=${timeStamp}`;

        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setLoading(false);
                setComicData(result.data);
            })
            .catch(() => {
                setLoading(false);
                console.log("An error occurred while getting comic data");
            });
    };

    const generateHash = (timeStamp) => {
        return md5(timeStamp + privateKey + publicKey);
    };

    const handleChange = (e) => {
        setCharacterName(e.target.value);
    };

    const handleReset = () => {
        setCharacterName('');
        setCharacterData(null);
        setComicData(null);
        setNoResults(false);
        setLoading(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            if (buttonRef.current) {
                buttonRef.current.classList.add('search-button-highlight'); 
                setTimeout(() => {
                    buttonRef.current.classList.remove('search-button-highlight'); 
                }, 300);
            }
            getCharacterData(); 
        }
    };

    return (
        <div className="search-container">
            <div className="search">
                <form className='search-form' onSubmit={handleSubmit}>
                    <h1 className='search-head1'>Search Marvel Characters</h1>
                    <div className="input-box">
                        <input
                            name='characterName'
                            type='text'
                            className='search-field'
                            placeholder='Enter Character Name'
                            onChange={handleChange}
                            onKeyPress={handleKeyPress} 
                            value={characterName} 
                            required
                        />
                    </div>
                    <div className="buttons">
                        <button
                            ref={buttonRef} 
                            className='search-button'
                            type='submit'
                        >
                            Get Character Data
                        </button>
                        <button className='search-reset' type='button' onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>

            <div className="misc">
                {loading && (
                    <div className="loading-spinner">
                        <div className="spinner"></div>
                    </div>
                )}

                {noResults && !loading && (
                    <div className="no-results">
                        <img src={notFoundImage} alt="Not Found" className="not-found-image" />
                        <p>No Results Found 😕</p>
                    </div>
                )}

                {!comicData && characterData && characterData.results[0] && (
                    <Characters
                        data={characterData.results}
                        onClick={getComicData}
                    />
                )}

                {comicData && comicData.results[0] && (
                    <Comics data={comicData.results} onClick={() => { }} />
                )}
            </div>
        </div>
    );
};

export default Search;
