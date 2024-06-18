import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../store/favorites/favorites.slice';

const RecipeItem = ({ recipe }) => {
    const favorites = useSelector(selectors.selectFavorites);
    const dispatch = useDispatch();
    console.log(favorites);

    const isExists = favorites[recipe.id] || false;

    return (
        <div className="bg-slate-700 text-white rounded-lg p-2 inline-block mb-4">
            <h2 className="text-[30px]">{recipe.name}</h2>
            <button
                onClick={() => dispatch(actions.toggleFavorites(recipe))}
                className="bg-red-500 text-[16px] rounded-sm p-2 mt-2">
                {isExists ? 'Remove from favorites' : 'Add to favorites'}
            </button>
        </div>
    );
};

export default RecipeItem;
