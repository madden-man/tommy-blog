export const fetchImageList = () => {
  let images = {};
  const files = require.context('../assets', true, /\.(jpg|png|gif|svg|pdf|ico)$/);
  files.keys().forEach (function(item) {
    images[item.replace('./', '')] = files(item);
  });
  return images;
}
