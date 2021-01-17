function Partidos(props: { partidos: { id: string; name: string; checked: boolean }[] }) {
    const onChange = (cheked: boolean, index: number) => {
        props.partidos[index].checked = cheked;
    }

    return (
        <>
            {props.partidos.map((e, index) => (
                <>
                    <label htmlFor={e.id}>{e.name}</label>
                    <input type='checkbox' defaultChecked name={e.id} onChange={(e) => onChange(e.target.checked, index)}></input>
                </>
            ))}
        </>
    )
}

export default Partidos;