export default function ChangeSrcPic2(liked_by_user) {

  let srcPic2;
    if (liked_by_user) {
      return srcPic2 = "./src/img/heart_full.png";
    } else {
      return srcPic2 = "./src/img/heart_zero.png";
    }
}
