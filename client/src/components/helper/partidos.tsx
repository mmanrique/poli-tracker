import React, { useState } from "react";
function Partidos(props: { partidos: { id: string; name: string; checked: boolean }[] }) {

    const [partidos, setPartidos] = useState(props.partidos);

    const onChange = (checked: boolean, index: number) => {
        partidos[index].checked = checked;
        let newParty = [...partidos];
        setPartidos(newParty);
    }

    const selectNone = () => {
        partidos.forEach(e => e.checked = false);
        let newParty = [...partidos];
        setPartidos(newParty);
    }

    const selectAll = () => {
        partidos.forEach(e => e.checked = true);
        let newParty = [...partidos];
        setPartidos(newParty);
    }

    return (
        <>
            <button type='button' className='btn btn-link' onClick={selectAll}>Seleccionar Todos</button>
            <button type='button' className='btn btn-link' onClick={selectNone}>Seleccionar Ninguno</button>
            <div>
                {partidos.map((e, index) => (
                    <div>
                        <label htmlFor={e.id}>{e.name}</label>
                        <input type='checkbox' checked={e.checked} name={e.id} onChange={(e) => onChange(e.target.checked, index)}></input>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Partidos;