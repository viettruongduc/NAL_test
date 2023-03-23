import { instance as axiosClient } from './network'

export const axiosService = {
  getAll(params: any, url: string): Promise<any> {
    return axiosClient.get(url, { params })
  }
}
