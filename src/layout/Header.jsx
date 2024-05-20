import { CiSearch } from 'react-icons/ci'
import { FiMenu } from 'react-icons/fi'

const Header = () => {
    return (
        <header className="contain">
            <div className="flex py-20 justify-between">
                <div className="flex items-center gap-10">
                    <FiMenu size={30} />
                    <h1 className="text-4xl">
                        <b>Meals </b>
                        page
                    </h1>
                </div>

                <div className="searchBar flex items-center">
                    <input type="text" placeholder="Search" />
                    <CiSearch size={20} color="#f8ca5e" />
                </div>

                <div className="flex items-center gap-5">
                    <div className="profile w-[5rem] h-[5rem] bg-[#fafaf8] rounded-2xl border"></div>
                    <h2 className="text-2xl">Top Wright</h2>
                </div>
            </div>

        </header>
    )
}

export default Header
