import styled from 'styled-components';
import LogoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  height: 56px;
  width: 100px;
  display: block;
  background: url(${LogoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 945px;
  height: 100%;
  margin: 0 auto;
  background: #ffffff;
`;

export const NavItem = styled.div`
  padding: 15px;
  line-height: 26px;
  font-size: 17px;
  height: 56px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;


export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  box-sizing: border-box;
  padding: 0 40px 0 20px;
  border: none;
  outline: none;
  margin-top: 9px;
  margin-left: 20px;
  height: 38px;
  width: 160px;
  background: #eee;
  border-radius: 19px;
  font-size: 14px;
  color: #777;
  &::placeholder{
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .4s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .4s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 58px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div`
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #787878
`;


export const Addition = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  height: 58px;
`;

export const Button = styled.div`
  line-height: 38px;
  float: right;
  padding: 0 20px;
  margin-top: 9px;
  margin-right: 5px;
  margin-left: 15px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 15px;
  &.register {
    color: #ec6149;
    background: transparent;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
  
`;