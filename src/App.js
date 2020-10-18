import React from 'react';
import Header from './common/header';
import {GlobalStyled} from "./style";
import {IconGlobalStyled} from "./statics/iconfont/iconfont";
import {Provider} from 'react-redux';
import store from "./store";

function App() {
  return (
    <div>
      <GlobalStyled/>
      <IconGlobalStyled/>
      <Provider store={store}>
        <Header/>
      </Provider>
    </div>
  );
}

export default App;
