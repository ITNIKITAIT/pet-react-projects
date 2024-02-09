import './Result.css'

export default function Result({setModal, setTab}) {
    return (
        <div className="overlay">
            <section className="result">
                <img alt='result' src="https://img.freepik.com/free-vector/trophy_78370-345.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1707350400&semt=sph"></img>
                <h1 className='discription'>You won</h1>
                <button className='btn-again' onClick={() => {
                    setModal(false);
                    setTab('menu')
                }}>Try again</button>
            </section>
        </div>
    )
}