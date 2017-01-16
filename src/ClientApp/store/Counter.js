import { Action, Reducer, ThunkAction } from 'redux';

export const actionCreators = {
    increment: () => ({ type: 'INCREMENT_COUNT' }),
    decrement: () => ({ type: 'DECREMENT_COUNT' })
};

const initialState = {
    count: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return { count: state.count + 1 };
        case 'DECREMENT_COUNT':
            return { count: state.count - 1 };
    }

    return state;
};
