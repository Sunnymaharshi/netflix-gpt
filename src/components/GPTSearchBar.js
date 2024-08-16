import { useSelector } from "react-redux"
import { langConstants } from "../utils/langConstants"
import { useRef } from "react"

const GPTSearchBar = () => {
    const lang = useSelector(store=>store.config.lang)
    const searchText = useRef(null);
    const handleGPTSearch = async ()=>{
        console.log(searchText.current.value)

    }
  return (
    <div className='pt-[15%] flex justify-center'>
        <form onSubmit={(e)=>e.preventDefault()} className='bg-black bg-opacity-60 py-6 w-1/2 grid grid-cols-12 rounded-lg'>
            <input ref={searchText} className='col-span-8 mx-[30px] py-2 px-5 rounded-lg' type='text' placeholder={langConstants[lang].searchInputPlaceholder}/>
            <button onClick={handleGPTSearch} className='text-white col-span-4 bg-red-600 py-2 px-5 mx-[30px] rounded-lg'>{langConstants[lang].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar