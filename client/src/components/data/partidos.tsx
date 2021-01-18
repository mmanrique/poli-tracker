interface Partido {
    id: number;
    name: string;
    checked: boolean;
}
function getPartidos(): Partido[] {
    return [
        { id: 4, 'name': 'ACCION POPULAR', checked: true },
        { id: 1257, 'name': 'ALIANZA PARA EL PROGRESO', checked: true, },
        { id: 2173, 'name': 'AVANZA PAIS - PARTIDO DE INTEGRACION SOCIAL', checked: true, },
        { id: 2191, 'name': 'DEMOCRACIA DIRECTA', checked: true, },
        { id: 2160, 'name': 'EL FRENTE AMPLIO POR JUSTICIA, VIDA Y LIBERTAD', checked: true, },
        { id: 2646, 'name': 'FRENTE POPULAR AGRICOLA FIA DEL PERU - FREPAP', checked: true, },
        { id: 1366, 'name': 'FUERZA POPULAR', checked: true, },
        { id: 1264, 'name': 'JUNTOS POR EL PERU', checked: true, },
        { id: 32, 'name': 'PARTIDO APRISTA PERUANO', checked: true, },
        { id: 14, 'name': 'PARTIDO DEMOCRATICO SOMOS PERU', checked: true, },
        { id: 2857, 'name': 'PARTIDO FRENTE DE LA ESPERANZA 2021', checked: true, },
        { id: 2840, 'name': 'PARTIDO MORADO', checked: true, },
        { id: 179, 'name': 'PARTIDO NACIONALISTA PERUANO', checked: true, },
        { id: 2218, 'name': 'PARTIDO POLITICO NACIONAL PERU LIBRE', checked: true, },
        { id: 2235, 'name': 'PARTIDO POL\xcdTICO CONTIGO', checked: true, },
        { id: 15, 'name': 'PARTIDO POPULAR CRISTIANO - PPC', checked: true, },
        { id: 55, 'name': 'PERU PATRIA SEGURA', checked: true, },
        { id: 2731, 'name': 'PODEMOS PERU', checked: true, },
        { id: 5, 'name': 'RENACIMIENTO UNIDO NACIONAL', checked: true, },
        { id: 22, 'name': 'RENOVACION POPULAR', checked: true, },
        { id: 47, 'name': 'UNION POR EL PERU', checked: true, },
        { id: 21, 'name': 'VICTORIA NACIONAL', checked: true }
    ]

}

export default getPartidos;