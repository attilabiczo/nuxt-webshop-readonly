import BaseService from './BaseService';

export default class ProductService extends BaseService {
  endpointName: string

  constructor(baseUrl: string, endpoint: string) { 
      super(baseUrl)
      this.endpointName = endpoint;
  }

  async getProducts() {
    const endpoint = this.baseUrl + this.endpointName

    const response = await fetch(endpoint)

    return await response.json();
  }
}