export const INDICATION_MESSAGE = 'INDICATION_MESSAGE';

export const indicationMessageHandler = (type , message) => {
    return { type: INDICATION_MESSAGE , payload: { type , message } };
}
/*
export const loadCandiesArrayFromServer = () => {
    return async (dispatch) => {
        try {     
            const response = await getRequest('/candies' , DONT_SEND_X_ACCESS_TOKEN);
            dispatch(indicationMessageHandler(response.type, response.message));
            response.status === 200 && (
                dispatch(updateCandiesArray(response.candies)),
                setTimeout(()=>dispatch(candiesDataIsLoaded()) , 500)
            );
            setTimeout(()=> dispatch(indicationMessageHandler('', '')));
        } catch(err) {
            dispatch(indicationMessageHandler('error','Oops, an error occurred!'));
        }
    }
}
*/