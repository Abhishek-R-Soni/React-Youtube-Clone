const CREATE_VIDEOS = 'CREATE_VIDEOS';
export const createVideos = (list = []) => {
    return {
        type: CREATE_VIDEOS,
        payload: list,    
    }
};

const VIDEO_ID = 'VIDEO_ID';
export const getVideoID = (ID = '') => {
    return {
        type: VIDEO_ID,
        payload: ID,    
    }
};
