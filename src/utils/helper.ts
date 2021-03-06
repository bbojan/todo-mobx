let _uid = 0
export function newUID() {
  _uid++
  return _uid
}

export function addInArrayFast<T>(array: T[], valuesToAdd: T[]): T[] {
  Array.prototype.push.apply(array, valuesToAdd)
  return array
}

export function delayed(ms:number):Promise<number>{
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(ms)
    }, ms);
  })
}