import { combineReducers } from 'redux';
import app from '../modules/app';



const reducer = combineReducers({
  auth: app.reducer,
});

export default reducer;
