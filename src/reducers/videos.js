const initialState = {
    videos: [],
    loading: false,
};

const Videos = (state = initialState, action) => {
    // console.log(action);
    switch(action.type){
        case 'CREATE_VIDEOS':
            return {
                videos: action.payload,
                loading: true
            }

        default:
            return state;
    }
};

export default Videos;

