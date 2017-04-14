import React, {Component} from 'react';
import {createStore} from 'redux'
import reducers from './reducers'
import Main from './Main';
import {Provider} from 'react-redux'


class App extends Component {

  constructor(props) {
    super(props);
    this.store = createStore(reducers, {spaces: this.props.preloadedState.spaces} );
  }

  render() {
    return (
      <Provider store={this.store}>
        <Main />
      </Provider>
    );
  }
}

export default App;

