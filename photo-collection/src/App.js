import { useState} from "react";
import Collection from "./components/collection";
import { images } from "./components/data";
import { categories } from "./components/categories";


function App() {
  const [searchValue, setSearchValue] = useState('')
  const [categoryId, setCategoryId] = useState(0)
  const [page, setPage] = useState(0)

  const filterImage = () => {
    if (categoryId !== 0) return images.filter((obj) => obj.category === categoryId)
    else return images;
  }

  return (
    <div className="App">
      <h1>My photo collection</h1>
      <div className="top">
        <ul className="tags">
          {categories.map((obj, index) => <li onClick={() => {
              setCategoryId(index)
              setPage(0)
            }
            } className={index === categoryId ? 'active' : ''} key={obj.name}>
            {obj.name}
            </li>)}
        </ul>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="search-input" placeholder="Search by name" />
      </div>
      <div className="content">
        {
        filterImage()
        .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        .slice(page * 3, page * 3 + 3)
        .map((obj, index) => {
          return <Collection key={index} name={obj.name} images={obj.photos} />
        })}
      </div>
      <ul className="pagination">
        {
          [...Array(Math.ceil(filterImage().length / 3))].map((_, index) => <li onClick={() => setPage(index)} className={page === index ? 'active' : ''}>
          {index + 1}
          </li>)
        }
      </ul>
    </div>
  );
}

export default App;
