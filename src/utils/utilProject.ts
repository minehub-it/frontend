import {endpoints} from "@/const";

export function getAppEndpoints() {
  const mode: 'dev'|'prod' = import.meta.env.MODE === 'development' ? 'dev' : 'prod'

  return endpoints[mode]
}