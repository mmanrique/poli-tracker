import json
candidates = []

# Unknwon "idambito": 1,
# idcargoeleccion = 5 matches idtipoeleccion = 3
# idmateria is always 27
# idprocesoelectoral is always 110
# idtipoexpediente is always 13
# intcantexpedientesdadivas is always 0
# strprocesoelectoral is always ELECCIONES GENERALES 2021

with open('pretty_empty-search.json') as json_file:
    candidates_array = json.load(json_file)['data']
    for candidate_raw in candidates_array:
        hoja_de_vida = candidate_raw['idhojavida']
        hoja_de_vida_file = "results/{}.json".format(hoja_de_vida)
        with open(hoja_de_vida_file) as detailed_file:
            candidate_details = json.load(detailed_file)['data']
            candidate = {
                'documentId': candidate_raw['strdocumentoidentidad'],
                'name': candidate_raw['strnombrecompleto'],
                'firstLastName': candidate_raw['strapellidopaterno'],
                'secondLastName': candidate_raw['strapellidomaterno'],
                'picture': candidate_raw['strrutaarchivo'],
                'sex': "M" if candidate_raw['strsexo'] == "1" else "F",
                'birthInformation': {
                    'birthday': candidate_details['oDatosPersonales']['strFechaNacimiento'],
                    'country': candidate_details['oDatosPersonales']['strPaisNacimiento'],
                    'departamento': candidate_details['oDatosPersonales']['strNaciDepartamento'],
                    'provincia': candidate_details['oDatosPersonales']['strNaciProvincia'],
                    'distrito': candidate_details['oDatosPersonales']['strNaciDistrito']
                },
                'detailedResumeId': hoja_de_vida,
                'address': {
                    'departamento': candidate_details['oDatosPersonales']['strDomiDepartamento'],
                    'provincia': candidate_details['oDatosPersonales']['strDomiProvincia'],
                    'distrito': candidate_details['oDatosPersonales']['strDomiDistrito'],
                    'direccion': candidate_details['oDatosPersonales']['strDomicilioDirecc'],
                },
                'party': {
                    'partyId': candidate_raw['idorganizacionpolitica'],
                    'partyName': candidate_raw['strorganizacionpolitica']
                },
                'location': {
                    'provincia': candidate_raw['strprovincia'],
                    'departamento': candidate_raw['strdepartamento'],
                    'distrito':  candidate_raw['strdistritoelectoral'],
                    'ubigeo': candidate_raw['strubigeopostula'],
                    'distritoPostula': candidate_raw['strdistrito']
                },
                'postulation': {
                    'fileId': candidate_raw['idExpediente'],
                    'fileName': candidate_raw['strCodExpedienteExt'],
                    'role': {
                        'id': candidate_raw['idtipoeleccion'],
                        'name': candidate_raw['strcargoeleccion']
                    },
                    'number': candidate_raw['intPosicion'],
                    'status': candidate_raw['strestado']
                }
            }
            candidates.append(candidate)


with open("summarized.json", 'w') as output_file:
    json.dump(candidates, output_file)
