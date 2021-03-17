// used redux-thunk
const CREATE_VIDEOS = 'CREATE_VIDEOS';
export const createVideos = (key = '') => {
    return(dispatch) => {
        const API_KEY = 'AIzaSyClNroBD2ZRyIAJEzMDu70u4qZQZnduYuk';  
        const baseURL = "https://www.googleapis.com/youtube/v3"; 
        
        fetch(baseURL+'/search?&key='+API_KEY+'&q='+key+'&part=snippet',{headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }})
          .then((response) => response.json())
          .then(response=> {
              dispatch({type:CREATE_VIDEOS, payload: response.items})
          })
    }
};

const VIDEO_ID = 'VIDEO_ID';
export const getVideoID = (ID = '') => {
    return {
        type: VIDEO_ID,
        payload: ID,    
    }
};
