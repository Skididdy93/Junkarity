import { getItems } from "../utils/fetchers";
import { ITEM_LIST_FAIL, ITEM_LIST_REQUEST, ITEM_LIST_SUCCESS } from "../constants/itemConstants";

export const listItems = () => async (dispatch) => {
    try{
        dispatch({type: ITEM_LIST_REQUEST})

        const data = await getItems();

        dispatch({
            type: ITEM_LIST_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ITEM_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}
