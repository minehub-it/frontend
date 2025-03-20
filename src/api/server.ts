import axios, {AxiosInstance} from 'axios'

const apiCustom: AxiosInstance = axios.create({
  baseURL: getAppEndpoints().apiBaseUrl
})

export const apiCommon = {
  async getBannerFeatured(): Promise<IBannerFeatured[]> {
    return (await apiCustom.get('https://featured.minecraft-italia.it/dedicated.json')).data
  },
}