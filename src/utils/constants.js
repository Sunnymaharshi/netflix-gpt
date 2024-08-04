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