import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { StringifyOptions } from 'querystring';
import { setSyntheticTrailingComments, StringLiteralLike } from 'typescript';

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.scss']
})
export class VoterListComponent implements OnInit {

  public searchText : string;
  public columns: string;
  public headers: any;
  public voterList : any;

  constructor() { 
    console.log(this.voterList);
  }

  ngOnInit(): void {

    this.voterList = [
      {
        "id":  '001',
        "clusteredPrecint": 1,
        "establishedPrecint": '001A',
        "pollingPlace": 'BUENA PARK UNIVERSITY HILLS, CALOOCAN CITY',
        "lastName": 'ACADEMIA',
        "firstName": 'SHERYL',
        "middleName": 'CRUZ',
        "age": '30',
        "registeredVoter": 'Y',
        "inFavor": 'Y',
        "address": '50 ONRUBIA ST. BISIG NG KABATAAN SANGANDAAN'
      },
      {
        "id":  '002',
        "clusteredPrecint": 1,
        "establishedPrecint": '001A',
        "pollingPlace": 'BUENA PARK UNIVERSITY HILLS, CALOOCAN CITY',
        "lastName": 'ALDUESO',
        "firstName": 'LEONORA',
        "middleName": 'LAMAYO',
        "age": 'SENIOR CITIZEN',
        "registeredVoter": 'Y',
        "inFavor": 'Y',
        "address": '95 GEN SAN MIGUEL SANGANDAAN'
      },
      {
        "id":  '003',
        "clusteredPrecint": 1,
        "establishedPrecint": '001A',
        "pollingPlace": 'BUENA PARK UNIVERSITY HILLS, CALOOCAN CITY',
        "lastName": 'ALEJANDRO',
        "firstName": 'JEROME',
        "middleName": 'GIRON',
        "age": '24',
        "registeredVoter": 'Y',
        "inFavor": 'Y',
        "address": '69 LA TORRE ST. BNK SANGANDAAN'
      },
      {
        "id":  '101',
        "clusteredPrecint": 1,
        "establishedPrecint": '001B',
        "pollingPlace": 'BUENA PARK UNIVERSITY HILLS, CALOOCAN CITY',
        "lastName": 'FONSECA',
        "firstName": 'ARTHUR',
        "middleName": 'MORELOS',
        "age": 'SENIOR CITIZEN',
        "registeredVoter": 'Y',
        "inFavor": 'N',
        "address": 'SANGANDAAN'
      },
      {
        "id":  '102',
        "clusteredPrecint": 1,
        "establishedPrecint": '001B',
        "pollingPlace": 'BUENA PARK UNIVERSITY HILLS, CALOOCAN CITY',
        "lastName": 'IGNACIO',
        "firstName": 'MAMERTO',
        "middleName": 'MENDOZA',
        "age": 'SENIOR CITIZEN',
        "registeredVoter": 'Y',
        "inFavor": 'N',
        "address": '42 PABLO ST. BISIG NG KABATAAN'
      },
      {
        "id":  '103',
        "clusteredPrecint": 1,
        "establishedPrecint": '001B',
        "pollingPlace": 'BUENA PARK UNIVERSITY HILLS, CALOOCAN CITY',
        "lastName": 'ISMAEL',
        "firstName": 'CRISTINA',
        "middleName": 'BORJA',
        "age": '32',
        "registeredVoter": 'Y',
        "inFavor": 'Y',
        "address": '64 MARCOS STREET BISIG NG KABATAAN SANGANDAAN'
      },
      {
        "id":  '501',
        "clusteredPrecint": 3,
        "establishedPrecint": '011A',
        "pollingPlace": 'BUENA PARK UNIVERSITY HILLS, CALOOCAN CITY',
        "lastName": 'CERVANTES',
        "firstName": 'RUEL',
        "middleName": 'BOLANTE',
        "age": '32',
        "registeredVoter": 'Y',
        "inFavor": 'N',
        "address": '256 DIZON ST BNK SANGANDAAN'
      },
      {
        "id":  '502',
        "clusteredPrecint": 3,
        "establishedPrecint": '011A',
        "pollingPlace": 'BUENA PARK UNIVERSITY HILLS, CALOOCAN CITY',
        "lastName": 'CIRUELA',
        "firstName": 'MINA',
        "middleName": 'RAMIREZ',
        "age": '25',
        "registeredVoter": 'Y',
        "inFavor": 'Y',
        "address": '135 VILLA MARIA ST SANGANDAAN'
      },
      {
        "id":  '503',
        "clusteredPrecint": 3,
        "establishedPrecint": '011A',
        "pollingPlace": 'BUENA PARK UNIVERSITY HILLS, CALOOCAN CITY',
        "lastName": 'CORNEJO',
        "firstName": 'LUZVIMINDA',
        "middleName": 'REYES',
        "age": 'SENIOR CITIZEN',
        "registeredVoter": 'Y',
        "inFavor": 'Y',
        "address": '408 VILLA MARIA ST. SANGANDAAN'
      },
      {
        "id":  '121',
        "clusteredPrecint": 3,
        "establishedPrecint": '012A',
        "pollingPlace": 'BUENA PARK UNIVERSITY HILLS, CALOOCAN CITY',
        "lastName": 'REGUALOS',
        "firstName": 'AIRA',
        "middleName": 'BALINGIT',
        "age": '42',
        "registeredVoter": 'Y',
        "inFavor": 'Y',
        "address": '217 FUENTES ST BISIG NG KABATAAN, SANGANDAAN'
      },
      {
        "id":  '122',
        "clusteredPrecint": 3,
        "establishedPrecint": '012A',
        "pollingPlace": 'BUENA PARK UNIVERSITY HILLS, CALOOCAN CITY',
        "lastName": 'RIOS',
        "firstName": 'CONSOLACION',
        "middleName": 'ZAFRA',
        "age": 'SENIOR CITIZEN',
        "registeredVoter": 'Y',
        "inFavor": 'Y',
        "address": '193 SITIO 1 SANGANDAAN'
      },
      {
        "id":  '123',
        "clusteredPrecint": 3,
        "establishedPrecint": '012A',
        "pollingPlace": 'BUENA PARK UNIVERSITY HILLS, CALOOCAN CITY',
        "lastName": 'ROCERO',
        "firstName": 'RUBELYN',
        "middleName": 'BALAGA',
        "age": '42',
        "registeredVoter": 'Y',
        "inFavor": 'N',
        "address": '132 VILLA MARIA ST SANGANDAAN'
      }

    ]

    this.headers = Object.keys(this.voterList[0]);
    console.log(this.headers)
  }

  // public voterList: Array<VoterData> = [
    
  // ]

}

// export interface VoterData {
//     id:  number;
//     clusteredPrecint: number;
//     establishedPrecint: string;
//     pollingPlace: string;
//     lastName: string;
//     firstName: string;
//     middleName: string;
//     age: string;
//     registeredVoter: string;
//     address: string;
// }
