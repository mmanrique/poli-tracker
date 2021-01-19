import '../css/candidates.css';
import React, { useEffect, useState } from 'react'
function Candidates(props: { candidates: any[]; }) {

    const pageSize = 12;
    const [candidates, setCandidates] = useState(props.candidates);
    //Calculate pages
    const [pages, setPages] = useState(1);

    //Grab initial pageSize
    const [visibleCandidates, setVisibleCandidates] = useState(candidates.slice(0, pageSize));
    //Start at page 1
    const [currentPage, setCurrentPage] = useState(1);

    const moveToPage = (page: number) => {
        //Move current page
        setCurrentPage(page);
        //Move visibleCandidates window
        let startIndex = (page - 1) * 10;
        setVisibleCandidates(candidates.slice(startIndex, startIndex + pageSize));
    }

    useEffect(() => {
        setCandidates(props.candidates);
        setCurrentPage(1);
        setVisibleCandidates(props.candidates.slice(0, pageSize));
        setPages(Math.floor(props.candidates.length / 10) + 1)

    }, [props.candidates])


    const getEducation = (e: { education: any }) => {
        switch(e.education.highest){
            case 1: return "Basica";
            case 2: return "Primaria";
            case 3: return "Secundaria";
            case 4: return "Universitaria";
            case 5: return "Master";
            case 6: return "Doctor";
        }
    }


    const imageAddress = "https://declara.jne.gob.pe"
    return (
        <>
            <div className='w-100'>
                <p>State Candidates: {candidates.length}</p>
                <p>Visible Candidates: {visibleCandidates.length}</p>
                <p>Pages: {pages}</p>
                <p>Current Page: {currentPage}</p>
            </div>
            {visibleCandidates.map(e => (
                <div className='card candidate'>
                    <img className="card-img-top" src={imageAddress + e.picture} alt="Card image cap"></img>
                    <div className='card-body'>
                        <h5 className='card-title'>{e.name}</h5>
                        <h5 className='card-title'>{e.firstLastName} {e.secondLastName}</h5>
                        <p className={e.sentencia ? "sentenciado" : "no-sentenciado"}>Sentencia: {e.sentencia ? "Tiene" : "No Tiene"}</p>
                        <p className="partido">Partido: {e.party.partyName}</p>
                        <p className="birthday">Fecha Nacimiento: {e.birthInformation.birthday}</p>
                        <p>Nivel Educacion: {getEducation(e)}</p>
                    </div>
                </div>
            ))}

            <nav>
                <ul className="pagination">

                    <li className={1 == currentPage ? "active page-item" : "page-item"}><a className="page-link" onClick={() => moveToPage(1)}>1</a></li>

                    {
                        currentPage - 2 > 0 && (
                            <li className="page-item"><a className="page-link">...</a></li>
                        )
                    }
                    {
                        currentPage - 2 > 1 && (
                            <li className="page-item"><a className="page-link" onClick={() => moveToPage(currentPage - 2)} >{currentPage - 2}</a></li>
                        )
                    }
                    {
                        currentPage - 1 > 1 && (
                            <li className="page-item"><a className="page-link" onClick={() => moveToPage(currentPage - 1)} >{currentPage - 1}</a></li>
                        )
                    }
                    {
                        currentPage !== 1 && currentPage !== pages && (
                            <li className="page-item active"><a className="page-link" onClick={() => moveToPage(currentPage)} >{currentPage}</a></li>
                        )
                    }
                    { }
                    {currentPage + 1 < pages && (
                        <li className="page-item"><a className="page-link" onClick={() => moveToPage(currentPage + 1)} >{currentPage + 1}</a></li>
                    )}
                    {currentPage + 2 < pages && (
                        <li className="page-item"><a className="page-link" onClick={() => moveToPage(currentPage + 2)} >{currentPage + 2}</a></li>
                    )}

                    {currentPage + 3 < pages && (
                        <li className="page-item"><a className="page-link">...</a></li>
                    )}
                    {
                        pages > 1 && <li className={pages == currentPage ? "active page-item" : "page-item"}><a className="page-link " onClick={() => moveToPage(pages)}>{pages}</a></li>
                    }

                </ul>
            </nav>

        </>
    )
}

export default Candidates;