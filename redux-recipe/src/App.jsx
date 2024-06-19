import RecipeItem from './components/RecipeItem';
import Header from './components/Header';
import { useGetRecipesQuery } from './store/api/api';
import CreateRecipe from './components/CreateRecipe';

function App() {
    const { isLoading, data } = useGetRecipesQuery();

    return (
        <>
            <Header />
            <CreateRecipe />
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className="flex items-center pt-5 bg-slate-900 flex-wrap max-w-[1300px] justify-center m-auto gap-3">
                    (
                    {data.map((recipe) => (
                        <RecipeItem key={recipe.id} recipe={recipe} />
                    ))}
                    )
                </div>
            )}
        </>
    );
}

export default App;
