export interface SwManifest {
  dev?: boolean;
  group: CacheGroupMap;
  routing?: Routing;
}

export interface CacheGroupMap {
  [name: string]: CacheGroup;
}

export interface CacheGroup {
  name: string;
  url: CacheEntryMap;
  version?: string
}

export interface CacheEntryMap {
  [url: string]: CacheEntry;
}

export interface CacheEntry {
  url: string;
  group: CacheGroup;
  
  hash?: string;
}

export interface Routing {
  index: string;
  route?: RouteMap;
}

export interface RouteMap {
  [url: string]: Route;
}

export interface Route {
  url: string;
  prefix?: boolean;
}

export class ManifestDelta {
  current: SwManifest;
  currentStr: string;
  previous: SwManifest;
  changed: boolean = true;
  delta: CacheGroupDeltaMap = {};
}

export interface CacheGroupDeltaMap {
  [url: string]: CacheGroupDelta;
}

export class CacheGroupDelta {
  added: string[] = [];
  removed: string[] = [];
}