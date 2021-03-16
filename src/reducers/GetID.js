const GetID = (state = 0, action) => {
    switch(action.type){
        case 'VIDEO_ID':
            return {
                ID: action.payload
            }
        default:
            return state;
    }
}

export default GetID;