// import data from '../../public/data.json';
import BaseStore from 'fluxible/addons/BaseStore';

class ApplicationStore extends BaseStore {
  constructor(dispatcher) {
    super(dispatcher);
    this.dispatcher = dispatcher;

    // this.data = data;
  }

  getStore() {
    return {
      a: '2'
    };
  }
}

ApplicationStore.storeName = 'ApplicationStore';

export default ApplicationStore