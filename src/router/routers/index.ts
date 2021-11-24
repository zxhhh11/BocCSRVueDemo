let configArray: any[] = [];

const files = require.context('.', true, /\.ts$/);

files.keys().forEach((key) => {
  if (key === './index.ts') return;
  configArray = configArray.concat(files(key).default);
});
console.log({ configArray });
export default configArray;
