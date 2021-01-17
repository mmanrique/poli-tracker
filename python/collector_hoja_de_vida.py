import json
import requests
import time
import os.path


# GET https://plataformaelectoral.jne.gob.pe/HojaVida/GetHVConsolidado?param=135413-0-2646-110
with open('pretty_empty-search.json') as json_file:
    data = json.load(json_file)
    candidate_array = data['data']
    candidate_id_set = {'1'}
    for c in candidate_array:
        statement_id = c['idhojavida']
        if statement_id in candidate_id_set:
            print("Repeated id {}".format(statement_id))
            continue

        candidate_id_set.add(statement_id)
        if os.path.isfile("{}.json".format(statement_id)):
            continue

        url = 'https://plataformaelectoral.jne.gob.pe/HojaVida/GetHVConsolidado?param={}-{}-{}-{}'.format(statement_id, c['intcantexpedientesdadivas'], c['idorganizacionpolitica'], c['idprocesoelectoral'])
        print('Making request to {}'.format(url))

        response = requests.get(url)
        response_json = json.loads(response.text)
        id = response_json['data']['oDatosPersonales']['idHojaVida']
        with open("{}.json".format(id), 'w') as output_file:
            json.dump(response_json, output_file)

    print(len(candidate_array))
