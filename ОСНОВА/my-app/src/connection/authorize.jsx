import { useEffect } from "react";

// Code генерируется в браузере
const myOptionOath = {
  id: "df7ICabs2U1sK_fvyU2BuzlCLv-eduqU51fMxIn6Hvs",
  url: `${window.location.href}photos`,
  type: "code",
  scope: "public+read_user"
}

const authorizationAddress = `https://unsplash.com/oauth/authorize?client_id=${myOptionOath.id}&redirect_uri=${myOptionOath.url}&response_type=${myOptionOath.type}&scope=${myOptionOath.scope}`;
console.log(authorizationAddress);
export default function Authorize () {
  useEffect(()=> {
    // window.location.assign(authorizationAddress)
  },[])

  return (
    <div>Загрузка ...</div>
  )
}