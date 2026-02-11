import { Cache as MemoryCache} from 'memory-cache'
import { CacheClass } from 'memory-cache'

declare const globalThis: {
  apiCacheInstance: typeof CacheClass;
} & typeof global

globalThis.apiCacheInstance = globalThis.apiCacheInstance ?? new MemoryCache()

export default globalThis.apiCacheInstance