function Candidates(props: { candidates: any[]; }) {
    return (
        <>
            {props.candidates.map(e => (
                <div className='card'>
                    <div className='card-body'>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Candidates;