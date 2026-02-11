export const reqToParams = (request: Request): URLSearchParams => new URL(request.url).searchParams

export const paramsGet = (request: Request, name: string): string | null => reqToParams(request).get(name)

export const paramsGetAll = (request: Request, name: string): string[] => reqToParams(request).getAll(name)