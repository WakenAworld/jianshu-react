import * as constants from './constants';
import {fromJS} from "immutable";

const defaultState = fromJS({
  focused: false,
  // 数组也会变成immutable对象，所以传进来的数组也要转化为immutable
  list: []
});

export default (state = defaultState, action)=>{
  if(action.type === constants.SEARCH_FOCUS || action.type === constants.SEARCH_BLUR){
    return action.type === constants.SEARCH_FOCUS ? state.set('focused',true) : state.set('focused',false);
  }
  if(action.type === constants.CHANGE_LIST) {
    return state.set('list', action.list);
  }
  return state;
}