export default function ChangeSrcPic1(liked_by_user) {

  let srcPic1;
    if (liked_by_user) {
      return srcPic1 = "./src/img/heart.png";
    } else {
      return srcPic1 = "./src/img/heart2_zero.png";
    }
}
