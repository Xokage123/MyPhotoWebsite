import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: "7Hl_-lhdVSrXSwnayqLBOpquMP_81ErK_zur6YkKx6M",
  secret: "kIkhYPaHa6xocrquAYfT6nDpo7Jwv9qFphlia68YFeo",
  callbackUrl: "http://viewerphoto.ru/"
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes"
]);

export default function Autf() {

  location.assign(authenticationUrl);
  const autfCode = location.search.split('code=')[1];
  console.log('CODE', autfCode);

}
