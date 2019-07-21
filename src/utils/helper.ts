let _uid = 0
export function newUID() {
  _uid++
  return _uid
}
export function addInArrayFast<T>(thisArray: T[], toAdd: T[]): T[] {
  Array.prototype.push.apply(thisArray, toAdd)
  return thisArray
}
