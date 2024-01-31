import bigProject from '../../img/projects/02-big.jpg'

const CustomProject = () => {
    return ( 
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">Video service</h1>

                    <img src={bigProject} alt="" className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>Skills: React, Node.js, MongoDB</p>
                    </div>

                </div>
            </div>
        </main>
     );
}
 
export default CustomProject;