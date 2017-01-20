export default function rate(state = [], action) {

    switch (action.type) {
        case 'ADD_RATE':
            state = [...state];
            state.push({
                id:action.payloads.id,
                code: action.payloads.code,
                name: action.payloads.country,
                amount: action.payloads.amount,
                buyCash: "",
                buyNoncash: "",
                sellCash: "",
                sellNoncash: ""
            });
            return state;

        case 'REMOVE_RATE':
            state = [...state];
            state.forEach((item, index) => {

                if (item.code === action.payloads) {
                    state.splice(index, 1);
                }
            });

            return state;

        case 'CHANGE_RATE_VALUE':
            state = [...state];
            state.forEach((item, index) => {

                if (item.code === action.payloads.code) {
                    item[action.payloads.action] = action.payloads.value;
                }

            });
            return state;

        case 'GET_RATES':

            return action.payloads;

        default:
            return state;
    }
}

