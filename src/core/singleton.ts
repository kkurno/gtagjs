import { GtagJsSingletonData } from '../constant-enum-type';

class GtagJsSingleton {
  private data: Omit<GtagJsSingletonData, 'id'> = {
    enableLog: false,
  }

  getData(): Omit<GtagJsSingletonData, 'id'> & { id?: string } {
    return this.data;
  }

  setData(newData: Partial<GtagJsSingletonData>) {
    this.data = { ...this.data, ...newData };
  }
}

const instance = new GtagJsSingleton();

export default instance;
