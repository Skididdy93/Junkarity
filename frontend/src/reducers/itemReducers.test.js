import { itemListReducer } from './itemReducers';
import expect from 'expect';
import {
	ITEM_LIST_REQUEST,
	ITEM_LIST_SUCCESS,
	ITEM_LIST_FAIL,
} from '../constants/itemConstants';

describe('item reducer', () => {
	it('should return the initial state', () => {
		expect(itemListReducer(undefined, {})).toEqual({ items: [] });
	});

	it('should handle ITEM_LIST_REQUEST', () => {
		const requestSuccess = {
			type: ITEM_LIST_REQUEST,
		};
		expect(itemListReducer({}, requestSuccess)).toEqual({
			loading: true,
			items: [],
		});
	});
	it('should handle ITEM_LIST_SUCCESS', () => {
		const myItem = {
			name: 'laptop',
			description: 'asgdfgasdfg',
			price: '22',
		};
		const itemSuccess = {
			type: ITEM_LIST_SUCCESS,
			payload: [myItem],
		};
		expect(itemListReducer({}, itemSuccess)).toEqual({
			loading: false,
			items: [myItem],
		});
	});
	it('should handle ITEM_LIST_SUCCESS when no payload is present', () => {
		const itemSuccess = {
			type: ITEM_LIST_SUCCESS,
		};
		expect(itemListReducer({}, itemSuccess)).toEqual({
			loading: false,
			items: [],
		});
	});
	it('should handle ITEM_LIST_FAIL', () => {
		const itemFail = {
			type: ITEM_LIST_FAIL,
		};
		const initialState = {};
		const finalState = itemListReducer(initialState, itemFail);
		const expectedState = { loading: false, error: { success: false } };
		console.log(expectedState, finalState);
		expect(finalState).toEqual(expectedState);
	});
});
