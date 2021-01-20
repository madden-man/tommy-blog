export const fetchImageList = () => {
  let images = {};
  const files = require.context('../assets/photos_of_me', true, /\.(jpg|jpeg|png|gif|svg|pdf|ico)$/);
  files.keys().forEach (function(item) {
    images[item.replace('./', '')] = files(item);
  });
  return images;
}
