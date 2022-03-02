import { SING_IN_SUCCESS } from './actionTypes';

export const update = session => ({
	type: SING_IN_SUCCESS,
	session,
});
