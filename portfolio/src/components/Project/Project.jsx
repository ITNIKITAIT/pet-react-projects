const Project = (props) => {
    const {title, img, i} = props

    return ( 
        <li className="project">
            <a href={`/project/${i}`}>
                <img src={img} alt="Project img" className="project__img"/>
                <h3 className="project__title">{title}</h3>
            </a>
        </li>
     );
}
 
export default Project;