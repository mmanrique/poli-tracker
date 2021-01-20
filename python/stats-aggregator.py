import json
import itertools
import datetime
from dateutil.relativedelta import relativedelta


def calculate_total_postulaciones(candidates_array):
    in_order = sorted(candidates_array, key=lambda e: e['party']['partyId'])
    mapped = itertools.groupby(in_order, lambda e: e['party']['partyId'])
    result = []
    for k, v in mapped:
        candidates_per_party = list(v)
        result.append({
            'party': candidates_per_party[0]['party']['partyId'],
            'party_name': candidates_per_party[0]['party']['partyName'],
            'candidates': len(candidates_per_party)
        })
    return result


def calculate_sexo_congresista(candidates_array):
    male = 0
    female = 0
    for e in candidates_array:
        if e['sex'] == "M":
            male += 1
        else:
            female += 1
    return {
        'male': male,
        'female': female
    }


def calculate_sexo_partido(candidates_array):
    in_order = sorted(candidates_array, key=lambda e: e['party']['partyId'])
    mapped = itertools.groupby(in_order, lambda e: e['party']['partyId'])
    result = []
    for k, v in mapped:
        candidates_per_party = list(v)
        sexes_count = calculate_sexo_congresista(candidates_per_party)
        result.append({
            'party': candidates_per_party[0]['party']['partyId'],
            'party_name': candidates_per_party[0]['party']['partyName'],
            'sex_counter': sexes_count
        })
    return result


def calculate_sentencias_total(candidates_array):
    sentencias = 0
    no_sentencias = 0
    for candidate in candidates_array:
        if candidate['sentencia'] == True:
            sentencias += 1
        else:
            no_sentencias += 1

    return {
        'sentencias': sentencias,
        'no_sentencias': no_sentencias
    }


def calculate_sentencias_partido(candidates_array):
    in_order = sorted(candidates_array, key=lambda e: e['party']['partyId'])
    mapped = itertools.groupby(in_order, lambda e: e['party']['partyId'])
    result = []
    for k, v in mapped:
        candidates_per_party = list(v)
        sentencias_total = calculate_sentencias_total(candidates_per_party)
        result.append({
            'party': candidates_per_party[0]['party']['partyId'],
            'party_name': candidates_per_party[0]['party']['partyName'],
            'sentencias': sentencias_total
        })
    return result


def calculate_sentencias_sexo(candidates_array):
    male = 0
    female = 0
    for e in candidates_array:
        if e['sentencia'] == True:
            if e['sex'] == "M":
                male += 1
            else:
                female += 1
        else:
            continue

    return {
        'male': male,
        'female': female
    }


def calculate_age_blocks(candidates_array):
    current_date = datetime.datetime.now()
    less_twenty = 0
    twenties = 0
    thirties = 0
    forties = 0
    fifties = 0
    sixties = 0
    seventy = 0
    eighties = 0
    for e in candidates_array:
        # format DD/MM/YYY
        birthDay = e['birthInformation']['birthday']
        formatted = datetime.datetime.strptime(birthDay, '%d/%m/%Y')
        difference = relativedelta(current_date, formatted).years
        if difference < 20:
            less_twenty += 1
        elif difference < 30:
            twenties += 1
        elif difference < 40:
            thirties += 1
        elif difference < 50:
            forties += 1
        elif difference < 60:
            fifties += 1
        elif difference < 70:
            sixties += 1
        elif difference < 80:
            seventy += 1
        elif difference < 90:
            eighties += 1
        else:
            print("WOW {} born {}, difference is {}".format(
                e['documentId'], formatted, difference))

    return {
        '0-19': less_twenty,
        '20-29': twenties,
        '30-39': thirties,
        '40-49': forties,
        '50-59': fifties,
        '60-69': sixties,
        '70-79': seventy,
        '80-89': eighties
    }

def calculate_age_blocks_partido(candidates_array):
    in_order = sorted(candidates_array, key=lambda e: e['party']['partyId'])
    mapped = itertools.groupby(in_order, lambda e: e['party']['partyId'])
    result = []
    for k, v in mapped:
        candidates_per_party = list(v)
        sentencias_total = calculate_age_blocks(candidates_per_party)
        result.append({
            'party': candidates_per_party[0]['party']['partyId'],
            'party_name': candidates_per_party[0]['party']['partyName'],
            'age_groups': sentencias_total
        })
    return result


def congresal_filter(candidate):
    return candidate['postulation']['role']['id'] == 2


with open('summarized.json') as json_file:
    candidates_array = json.load(json_file)
    # print(calculate_age_blocks_partido(filter(congresal_filter, candidates_array)))

    stats = {
        'total-partido': calculate_total_postulaciones(filter(congresal_filter, candidates_array)),
        'sexo-congresal': calculate_sexo_congresista(filter(congresal_filter, candidates_array)),
        'sexo-partido': calculate_sexo_partido(filter(congresal_filter, candidates_array)),
        'sentenicas-congresal': calculate_sentencias_total(filter(congresal_filter, candidates_array)),
        'sentencias-partido': calculate_sentencias_partido(filter(congresal_filter, candidates_array)),
        'sentencias-sexo': calculate_sentencias_sexo(filter(congresal_filter, candidates_array)),
        'age-blocks': calculate_age_blocks(filter(congresal_filter, candidates_array)),
        'age-blocks-partido': calculate_age_blocks_partido(filter(congresal_filter, candidates_array)),
    }
    
    with open("stats/result.json", 'w') as output_file:
            json.dump(stats, output_file)
    
        
