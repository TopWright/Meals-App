/* eslint-disable no-unused-vars */
import { CiSearch } from 'react-icons/ci'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Header = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearchSubmit = () => {
        navigate('/meals');
        setSearchParams({ search: searchValue });
    };

    return (
        <header className="contain">
            <div className="flex py-20 justify-between">
                <div className="flex items-center gap-10">
                    <FiMenu size={30} />
                    <h1 className="text-4xl">
                        <b>Top </b>
                        Meals
                    </h1>
                </div>

                <div className="searchBar flex items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchValue}
                        onChange={handleSearchChange}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSearchSubmit();
                            }
                        }}
                    />
                    <CiSearch
                        size={20}
                        color="#f8ca5e"
                        onClick={handleSearchSubmit}
                        className='cursor-pointer'
                    />
                </div>

                <div className="flex items-center gap-5">
                    <div className="profile w-[5rem] h-[5rem] bg-[#fafaf8] rounded-2xl border"></div>
                    <h2 className="text-2xl">Top Wright</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;
