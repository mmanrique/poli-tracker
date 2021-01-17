import Provincias from './helper/provincias'
import Partidos from './helper/partidos'
import Axios from 'axios';

function Controllers(props: { updateCandidates: (candidates: []) => void; }) {

    const send = () => {
        props.updateCandidates([]);
        console.log('Sending')
    }
    return (
        <div className="controllers">
            <div className='card'>
                <div className='card-header' data-toggle='collapse' data-target='#collapse-car'>
                    <h3 >Caracteristicas</h3>
                </div>
                <div id='collapse-car' className='collapse card-body'>
                    <div>
                        <label htmlFor='provincia'>Provincia</label>
                        <select name='provincia'>
                            <Provincias />
                        </select>
                    </div>
                    <div>
                        <label htmlFor='grado'>Grado Academico</label>
                        <select name='grado' />
                    </div>
                    <div>
                        <label htmlFor='sentencias'>Tiene sentencias</label>
                        <input type='checkbox' name='sentencias' />
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-header' data-toggle='collapse' data-target='#collapse-partido'>
                    <h4>Partido Politico</h4>
                </div>
                <div id='collapse-partido' className='collapse card-body'>
                    <Partidos />
                </div>
            </div>
            <div className='centered'>
                <button type="button" className="btn btn-success w-100" onClick={send}>Enviar</button>
            </div>
        </div>

    )
}

export default Controllers;