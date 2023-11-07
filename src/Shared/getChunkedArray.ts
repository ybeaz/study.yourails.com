export const getChunkedArray: Function = (arr: any[], size: number): any[] =>
  arr.length > size
    ? [arr.slice(0, size), ...getChunkedArray(arr.slice(size), size)]
    : [arr]
