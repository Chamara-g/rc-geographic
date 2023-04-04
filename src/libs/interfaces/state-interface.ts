export type IStateKeys = 'code' | 'name' | 'cCode' | 'pCode' | 'lat' | 'lat' | 'tZone';

export type IStateUniqueKeys = 'code';

export interface IState {
    code: string;
    name: string;
    cCode: string;
    pCode: string;
    lat: string;
    lng: string;
    tZone: string;
}
