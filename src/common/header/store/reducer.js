import * as constants from './constants';
import {fromJS} from "immutable";

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  // 数组也会变成immutable对象，所以传进来的数组也要转化为immutable
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action)=>{
  if(action.type === constants.SEARCH_FOCUS || action.type === constants.SEARCH_BLUR){
    return action.type === constants.SEARCH_FOCUS ? state.set('focused',true) : state.set('focused',false);
  }
  if(action.type === constants.CHANGE_LIST) {
    return state.merge({
      list: action.list,
      totalPage: action.totalPage
    });
  }
  if(action.type === constants.MOUSE_ENTER){
    return state.set('mouseIn',true);
  }
  if(action.type === constants.MOUSE_LEAVE){
    return state.set('mouseIn',false);
  }
  if(action.type === constants.CHANGE_PAGE){
    return state.set('page',action.page);
  }
  return state;
}