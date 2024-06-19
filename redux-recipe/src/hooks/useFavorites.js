import { useSelector } from 'react-redux';
import { selectors } from '../store/favorites/favorites.slice';

export const useFavorites = () => {
    return useSelector(selectors.selectFavorites);
};
