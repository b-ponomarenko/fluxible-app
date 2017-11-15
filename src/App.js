import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import connectToStores from 'fluxible-addons-react/connectToStores';
import ApplicationStore from './store/ApplicationStore';

@connectToStores(
  [ApplicationStore],
  (context, props) => {
    // debugger
    return {
      foo: context.getStore(ApplicationStore).getStore()
    }
  })
class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="ui container">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis dicta, dolore earum facere incidunt iusto modi neque non reprehenderit repudiandae, temporibus veritatis vero! Asperiores exercitationem nesciunt nobis soluta unde!
      </div>
    );
  }
}

export default App;
