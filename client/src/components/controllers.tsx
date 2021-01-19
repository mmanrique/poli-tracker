import React, { useState } from 'react'
import Provincias from './helper/provincias'
import Partidos from './helper/partidos'
import Axios from 'axios';

function Controllers(props: { partidos: any[]; updateCandidates: (candidates: []) => void; }) {

    const [sentencia, setSentencia] = useState("");
    const [sexo, setSexo] = useState("");
    const [dni, seDni] = useState("");
    const [education, setEducation] = useState("");

    const send = () => {

        let selectedParty = props.partidos.filter(e => e.checked).map(e => e.id);
        let data = {
            party: selectedParty,
            sexo: sexo,
            sentencia: sentencia,
            education: education
        }
        Axios.post('/api/search', data).then(function (response) {
            props.updateCandidates(response.data)

        }).catch(function (error) {
            console.log(error);
        })
    }

    return (
        <div className="controllers">
            <div className='card'>
                <div className='card-header' data-toggle='collapse' data-target='#collapse-car'>
                    <h3>Caracteristicas</h3>
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
                        <select name='grado' onChange={(e) => setEducation(e.target.value)} value={education}>
                            <option value="">No importa</option>
                            <option value="basica">Basica</option>
                            <option value="primaria">Primaria</option>
                            <option value="secundaria">Secundaria</option>
                            <option value="universitaria">Universitaria</option>
                            <option value="master">Master</option>
                            <option value="doctor">Doctor</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='sentencias'>Tiene sentencias</label>
                        <select name='sentencias' onChange={(e) => setSentencia(e.target.value)} value={sentencia}>
                            <option value="">No importa</option>
                            <option value="0">No tiene</option>
                            <option value="1">Tiene</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor='sexo'>Sexo</label>
                        <select name='sexo' onChange={(e) => setSexo(e.target.value)} value={sexo}>
                            <option value="">No importa</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-header' data-toggle='collapse' data-target='#collapse-partido'>
                    <h4>Partido Politico</h4>
                </div>
                <div id='collapse-partido' className='collapse card-body partidos'>
                    <Partidos partidos={props.partidos} />
                </div>
            </div>
            <div className='centered'>
                <button type="button" className="btn btn-success w-100" onClick={send}>Enviar</button>

            </div>
        </div>

    )
}

export default Controllers;