import { useEffect } from "react";
import options from "../CONST";
// import Unsplash from "unsplash-js";

// const unsplash = new Unsplash({
//     accessKey: options.access_key,
//     secret: options.secret_key,
//     callbackUrl: options.URI
// });


// Адрес, куда нужно перекинуть пользователя
const authorizationAddress = `https://unsplash.com/oauth/authorize?client_id=${options.access_key}&redirect_uri=${options.URI}&response_type=${options.response_type}&scope=${options.scope}`;
// const authenticationUrl = unsplash.auth.getAuthenticationUrl([
//   "publick",
//   "write_likes"
// ])
export default function Authorize () {
  useEffect(()=> {
    window.location.assign(authorizationAddress)
  },[])

  return (
    <div>Загрузка ...</div>
  )
}