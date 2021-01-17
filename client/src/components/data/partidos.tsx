interface Partido {
    id: string;
    name: string;
    checked: boolean;
}
function getPartidos(): Partido[] {
    return [
        { id: '1', name: "ACCION POPULAR", checked: true },
        { id: '2', name: "ALIANZA PARA EL PROGRESO", checked: true },
        { id: '3', name: "AVANZA PAIS - PARTIDO DE INTEGRACION SOCIAL", checked: true },
        { id: '4', name: "DEMOCRACIA DIRECTA", checked: true },
        { id: '5', name: "EL FRENTE AMPLIO POR JUSTICIA, VIDA Y LIBERTAD", checked: true },
        { id: '6', name: "FRENTE POPULAR AGRICOLA FIA DEL PERU - FREPAP", checked: true },
        { id: '7', name: "FUERZA POPULAR", checked: true },
        { id: '8', name: "JUNTOS POR EL PERU", checked: true },
        { id: '9', name: "PARTIDO APRISTA PERUANO", checked: true },
        { id: '10', name: "PARTIDO DEMOCRATICO SOMOS PERU", checked: true },
        { id: '11', name: "PARTIDO FRENTE DE LA ESPERANZA 2021", checked: true },
        { id: '12', name: "PARTIDO MORADO", checked: true },
        { id: '13', name: "PARTIDO NACIONALISTA PERUANO", checked: true },
        { id: '14', name: "PARTIDO POLÍTICO CONTIGO", checked: true },
        { id: '15', name: "PARTIDO POLITICO NACIONAL PERU LIBRE", checked: true },
        { id: '16', name: "PARTIDO POPULAR CRISTIANO - PPC", checked: true },
        { id: '17', name: "PERU NACION", checked: true },
        { id: '18', name: "PERU PATRIA SEGURA", checked: true },
        { id: '19', name: "PODEMOS PERU", checked: true },
        { id: '20', name: "RENACIMIENTO UNIDO NACIONAL", checked: true },
        { id: '21', name: "RENOVACION POPULAR", checked: true },
        { id: '22', name: "TODOS POR EL PERU", checked: true },
        { id: '23', name: "UNION POR EL PERU", checked: true },
        { id: '24', name: "VAMOS PERU", checked: true },
        { id: '25', name: "VICTORIA NACIONAL", checked: true }
    ]
}

export default getPartidos;