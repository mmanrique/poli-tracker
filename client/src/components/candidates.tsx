import '../css/candidates.css';
function Candidates(props: { candidates: any[]; }) {
    const imageAddress = "https://declara.jne.gob.pe"
    return (
        <>
            {props.candidates.map(e => (
                <div className='card candidate'>
                    <img className="card-img-top" src={imageAddress + e.picture} alt="Card image cap"></img>
                    <div className='card-body'>
                        {JSON.stringify(e)}
                    </div>
                </div>
            ))}
        </>
    )
}

export default Candidates;