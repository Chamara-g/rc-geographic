import { IState, IStateKeys, IStateUniqueKeys } from '../interfaces/state-interface';

interface findStateDataByValueProps {
    stateList: IState[];
    key?: IStateUniqueKeys;
    value: string;
}

interface filterStatesProps {
    stateList: IState[];
    key?: IStateKeys;
    value: string;
}

export const findStateByKeyValue = ({ stateList, key = 'code', value }: findStateDataByValueProps): IState | null => {
    if (value && stateList != null) {
        const index = stateList.findIndex((obj) => {
            return obj[key] === value;
        });

        return index !== -1 ? stateList[index] : null;
    }

    return null;
};

export const filterStates = ({ stateList, key = 'code', value }: filterStatesProps): IState[] | null => {
    if (value && stateList != null) {
        return stateList.filter(function (obj) {
            return obj[key] === value;
        });
    }

    return null;
};
