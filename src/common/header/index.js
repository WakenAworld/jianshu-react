import React, {PureComponent} from "react";
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch,Addition,Button,SearchWrapper} from "./style";

class Header extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
    this.handleFocused = this.handleFocused.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch
              className={this.state.focused ? 'focused' : ''}
              onFocus={this.handleFocused}
              onBlur={this.handleBlur}
            />
            <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
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

  handleFocused(){
    this.setState(()=>{
      return {
        focused: true
      }
    })
  }
  handleBlur(){
    this.setState(()=>{
      return {
        focused: false
      }
    })
  }
}

export default Header;