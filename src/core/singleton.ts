import { GtagJsSingletonData } from '../constant-enum-type';

class GtagJsSingleton {
  private data:GtagJsSingletonData = {
    enableLog: false,
  }

  getData() {
    return this.data;
  }

  setData(newData: GtagJsSingletonData) {
    this.data = { ...this.data, ...newData };
  }
}

const instance = new GtagJsSingleton();

export default instance;
