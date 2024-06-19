import { IoHeartSharp } from 'react-icons/io5';
import { useFavorites } from '../hooks/useFavorites';

const Header = () => {
    const favorites = useFavorites();

    return (
        <section className="flex items-ceneter justify-between max-w-[1000px] m-auto">
            <span></span>
            <h1 className="text-[34px] text-white">RECIPES</h1>
            <div className="relative h-fit cursor-pointer">
                <IoHeartSharp className="fill-white w-9 h-9" />
                <span className="bg-cyan-600 text-white absolute -left-[5px] -bottom-[5px] rounded-sm h-5 w-5 flex items-center justify-center">
                    {Object.keys(favorites).length}
                </span>
            </div>
        </section>
    );
};

export default Header;
