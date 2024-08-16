import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSuggestions from './GPTSuggestions'
import { MOVIES_BG_IMAGE } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
        <img className="absolute -z-10" src={MOVIES_BG_IMAGE} alt="bg-image" />
        <GPTSearchBar/>
        <GPTSuggestions/>
    </div>
  )
}

export default GPTSearch