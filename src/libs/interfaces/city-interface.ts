export type ICityKeys = 'code' | 'name' | 'cCode' | 'sCode' | 'pCode' | 'lat' | 'lat' | 'tZone';

export type ICityUniqueKeys = 'code';

export interface ICity {
    code: string;
    name: string;
    cCode: string;
    sCode: string;
    pCode: string;
    lat: string;
    lng: string;
    tZone: string;
}
