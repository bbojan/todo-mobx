import { RouterStore, SynchronizedHistory } from 'mobx-react-router'
import React from 'react'
import { GlobalStore } from './GlobalStore'

export interface IGlobals {
  store: GlobalStore
  routing: RouterStore
  synchronizedHistory?: SynchronizedHistory
}

export const InitialGlobals: IGlobals = {
  store: new GlobalStore(),
  routing: new RouterStore(),
}

export const GlobalContext = React.createContext<IGlobals>(InitialGlobals)

export function useGlobals(): IGlobals {
  return React.useContext(GlobalContext)
}
