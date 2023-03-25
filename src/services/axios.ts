import { instance as axiosClient } from './network'

export const axiosService = {
  getAll(params: any, url: string): Promise<any> {
    return axiosClient.get(url, { params })
  },

  post(data: any, url: string): Promise<any> {
    const base_url = `${url}`
    return axiosClient.post(base_url, data)
  },

  delete(id: string, url: string): Promise<any> {
    const base_url = `${url}${id}`
    return axiosClient.delete(base_url)
  }
}
