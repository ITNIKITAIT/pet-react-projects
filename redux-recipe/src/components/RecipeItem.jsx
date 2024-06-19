import { useActions } from '../hooks/useActions';
import { useFavorites } from '../hooks/useFavorites';

const RecipeItem = ({ recipe }) => {
    const favorites = useFavorites();
    const { toggleFavorites } = useActions();

    const isExists = favorites[recipe.id] || false;

    return (
        <div className="bg-slate-700 text-white rounded-lg p-2 inline-block max-w-[350px] w-full">
            <img src={recipe.image} alt={recipe.name} />
            <h2 className="text-[26px]">{recipe.name}</h2>
            <button
                onClick={() => toggleFavorites(recipe)}
                className="bg-red-500 text-[16px] rounded-sm p-2 mt-2 w-full">
                {isExists ? 'Remove from favorites' : 'Add to favorites'}
            </button>
        </div>
    );
};

export default RecipeItem;
