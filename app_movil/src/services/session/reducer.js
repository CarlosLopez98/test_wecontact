import * as actionTypes from './actionTypes';

export const initialState = {
	tokens: {
		access: {
			type: null,
			value: null,
			expiresIn: null,
		},
		refresh: {
			type: null,
			value: null,
		},
	},
	user: {
		id: null,
	},
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SING_IN_SUCCESS:
			return {
        ...state,
				...action.session,
			};
		default:
			return state;
	}
};
