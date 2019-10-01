import {combineReducers} from 'redux';
import Employees from './Employees';
import Profiles from './Profiles';

const appReducers= combineReducers({
        Employees,
        Profiles
});

export default appReducers;
