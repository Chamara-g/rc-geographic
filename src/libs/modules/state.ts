import { IState, IStateUniqueKeys } from '../interfaces';
import { filterStates, findStateByKeyValue } from '../utils/state-utils';

import stateList from '../../data/stateList.json';

// Get all state list
export const getAllStates = (): IState[] => {
    return stateList;
};

// Get State by custom Key
export const getStateByKeyValue = (key: IStateUniqueKeys, value: string): IState | null => {
    return findStateByKeyValue({ stateList, value, key });
};

// Get state list by Country
export const getStatesByCountry = (countryCode: string): IState[] | null => {
    return filterStates({ stateList, key: 'cCode', value: countryCode });
};
