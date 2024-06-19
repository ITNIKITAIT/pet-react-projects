import { useState } from 'react';
import { useCreateRecipeMutation } from '../store/api/api';

const defaultValue = {
    name: '',
    image: '',
};

const CreateRecipe = () => {
    const [recipe, setRecipe] = useState(defaultValue);
    const [createRecipe] = useCreateRecipeMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        createRecipe(recipe).then(() => setRecipe(defaultValue));
    };

    return (
        <div className="mt-3">
            <form
                onSubmit={handleSubmit}
                className="flex gap-3 items-center justify-center">
                <label className="flex gap-3 items-center justify-center">
                    <input
                        className="p-2 min-w-[300px] outline-none text-[18px]"
                        type="text"
                        placeholder="Name"
                        value={recipe.name}
                        onChange={(e) =>
                            setRecipe({ ...recipe, name: e.target.value })
                        }
                    />
                    <input
                        className="p-2 min-w-[300px] outline-none text-[18px]"
                        type="text"
                        placeholder="Image"
                        value={recipe.image}
                        onChange={(e) =>
                            setRecipe({ ...recipe, image: e.target.value })
                        }
                    />
                </label>
                <button
                    className="bg-red-400 text-white text-[16px] rounded-sm p-2 w-[200px]"
                    type="submit">
                    Create
                </button>
            </form>
        </div>
    );
};

export default CreateRecipe;
