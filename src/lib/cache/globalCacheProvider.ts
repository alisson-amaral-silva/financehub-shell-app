import { Cache as MemoryCache} from 'memory-cache'
import { CacheClass } from 'memory-cache'

declare const globalThis: {
  globalCacheInstance: typeof CacheClass;
} & typeof global

globalThis.globalCacheInstance = globalThis.globalCacheInstance ?? new MemoryCache()
export default globalThis.globalCacheInstance