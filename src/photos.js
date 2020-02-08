let baseURL = "https://github.com/jhcccc/wuhan2020-artwork/blob/master/img/"
let imgEntension = ".jpg?raw=true";
let imgCount = 12;
let photos = [];
let widthHeightList = [[4,3],[3,5],[3,5],[3,5],[1,1],[5,3],[5,3],[3,5],[1,1],[1,1],[3,5],[3,5],[3,5]];
for(let i=0;i<imgCount;i++){
  photos.push(
  {
    src:baseURL+'0'+i+imgEntension,
    width:widthHeightList[i][0],
    height:widthHeightList[i][1]
  });
}
export {photos};