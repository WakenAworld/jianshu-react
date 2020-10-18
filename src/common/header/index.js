import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch,Addition,Button,
  SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoList,SearchInfoItem} from "./style";
import {CSSTransition} from "react-transition-group";
import {actionCreator} from './store';

class Header extends PureComponent{
  getListItem() {
    const {focused, list} = this.props;
    if (focused){
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              list.map((item,index)=>{
                return (
                  <SearchInfoItem key={index}>
                    {item}
                  </SearchInfoItem>
                )
              })
            }
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };

  render() {
    const {focused, handleFocused,handleBlur} = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            {/*Aa图标显示*/}
            <i className="iconfont Aa">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={400}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleFocused}
                onBlur={handleBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
            {this.getListItem()}
          </SearchWrapper>
          <Addition>
            <Button className="writing">
              <i className="iconfont">&#xe678;</i>
              写文章
            </Button>
            <Button className="register">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.getIn(['header', 'list']) // 等价于上面的写法
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocused() {
      dispatch(actionCreator.getList());
      dispatch(actionCreator.searchFocus());
    },
    handleBlur() {
      dispatch(actionCreator.searchBlur());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);