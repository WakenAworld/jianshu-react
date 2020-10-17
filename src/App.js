import React from 'react';
import Header from './common/header'
import {GlobalStyled} from "./style";
import {IconGlobalStyled} from "./statics/iconfont/iconfont";

function App() {
  return (
    <div>
      <GlobalStyled/>
      <IconGlobalStyled/>
      <Header/>
    </div>
  );
}

export default App;
