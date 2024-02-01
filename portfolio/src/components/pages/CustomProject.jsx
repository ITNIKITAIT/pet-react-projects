import { useParams } from 'react-router-dom';
import { projects } from '../heplers/project-list';

const CustomProject = () => {
    const {id} = useParams();
    const el = projects[id]

    return ( 
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{el.title}</h1>

                    <img src={el.imgBig} alt="" className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>Skills: {el.skills}</p>
                    </div>

                </div>
            </div>
        </main>
     );
}
 
export default CustomProject;