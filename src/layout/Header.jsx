/* eslint-disable no-unused-vars */
import { CiSearch } from 'react-icons/ci'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { useProtectedRoutesContext } from '../context/ProtectedRouteContext';

import profile from '../assets/images/profil.webp'

const Header = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const { user, setToken, setUser } = useProtectedRoutesContext();

    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearchSubmit = () => {
        navigate('/meals');
        setSearchParams({ search: searchValue });
    };

    return (
        <header className="contain mb-20">
            <div className="flex justify-between md:gap-96 flexCol mb-20">
                <div className="flex md:py-20 py-10 justify-between flex-1 flexCol2 ">
                    <Link to={`/`} className="flex items-center gap-10 mb3">
                        <h1 className="text-5xl underline">
                            <b>Top </b>
                            Meals
                        </h1>
                    </Link>

                    <div className="searchBar flex items-center justify-between">
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
                </div>
                <div className='flex justify-between gap-10 flex-1'>
                    <Link to={`/favourites`} className="flex items-center gap-3 cursor-pointer">
                        <FaStar size={35} color='gold' />
                        <h2 className="text-2xl mt-3 hover:underline">Favourites</h2>
                    </Link>
                    <div className="flex items-center gap-5">
                        <div className="profile w-[5rem] h-[5rem] bg-[#fafaf8] rounded-2xl border">
                            <img src={profile} alt="avatar" />
                        </div>
                        <h2 className="text-2xl">{user?.name}</h2>
                    </div>
                    <button type="button" className="text-3xl hover:underline" onClick={() => {
                        setToken(null);
                        setUser(null);
                        navigate('/auth/login');
                    }}>Log Out</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
