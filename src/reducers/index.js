import Videos from './videos';
import GetID from './GetID';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    videos: Videos,
    ID: GetID,    
});

export default rootReducer;