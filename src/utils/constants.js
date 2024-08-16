export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const PROFILE_PIC = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_MOVIE_API_KEY
    }
}
export const IMAGE_CDN = "https://image.tmdb.org/t/p/w500/"
export const MOVIES_BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg"
export const SUPORTED_LANGUAGES = [{name:"English",identifier:"en"},{name:"Hindi",identifier:"hindi"},{name:"Spanish",identifier:"spanish"}]