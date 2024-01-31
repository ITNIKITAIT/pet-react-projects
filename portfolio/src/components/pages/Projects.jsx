import Project from "../Project/Project";
import { projects } from "../heplers/project-list";


const Projects = () => {
    return ( 
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    
                    {projects.map((item, i) => <Project key={i} {...item} />)}

                </ul>
            </div>
        </main>
     );
}
 
export default Projects;