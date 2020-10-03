import axios from 'axios';

class HTTP {
  constructor() {
    this.instance = axios.create({
      url: process.env.BASE_URL || 'http://localhost:3000',
    });
  }

  fetch(url, options) {
    return this.instance.get(url, options);
  }

  create(url, data, options) {
    return this.instance.post(url, data, options);
  }

  update(url, data, options) {
    return this.instance.put(url, data, options);
  }

  remove(url, options) {
    return this.instance.delete(url, options);
  }
}

export default HTTP;
