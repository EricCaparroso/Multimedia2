import React from 'react'
import { RenderCardListContext, RenderCardListContextType } from '../contexts/RenderCardListContext'

type RenderCardListProviderProps = {
  children: JSX.Element | JSX.Element[]
}

const RenderCardListProvider = (props: RenderCardListProviderProps) => {
  const { children } = props;

  const [isListRendered, setIsListRendered] = React.useState(true)

  const toggleIsListRendered = () => setIsListRendered(!isListRendered);

  const defaultValue: RenderCardListContextType = {
    isListRendered,
    toggleIsListRendered
  }

  return (
    <RenderCardListContext.Provider value={defaultValue}>
      {children}
    </RenderCardListContext.Provider>
  )
}

export default RenderCardListProvider;