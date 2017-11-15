import { EventEmitter } from 'events';
// import data from '../../public/data.json';

export default class ApplicationStore extends EventEmitter {
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