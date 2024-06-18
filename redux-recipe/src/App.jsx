import RecipeItem from './components/RecipeItem';
function App() {
    return (
        <div className="flex flex-col items-center pt-5 bg-slate-900">
            <RecipeItem recipe={{ id: 1, name: 'Potato' }} />
            <RecipeItem recipe={{ id: 2, name: 'Pasta' }} />
            <RecipeItem recipe={{ id: 3, name: 'Soup' }} />
        </div>
    );
}

export default App;
