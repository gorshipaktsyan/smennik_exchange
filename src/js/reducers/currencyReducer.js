import currencyList from '../data/currencyList'

const initialState = {
  list: currencyList(),
  checklist: []
};

export default function currency(state = initialState, action) {

    switch (action.type) {

        case 'GET_RATES':
            const checklist = [];

            action.payloads.forEach((item, index) => {
                checklist.push(item.id)
            });

            state = {...state, checklist};

        return state;

    default:
        return state;
    }
}
