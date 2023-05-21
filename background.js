console.log('[background] background.js 2');
console.log('[background] ua = ', navigator.userAgent);

const makaRequest = async () => {
  console.log('before request: ', navigator.userAgent);
  const baseURLMainNet = 'https://api.bitverse.zone';
  const response = await fetch(`${baseURLMainNet}/v3/public/time`);
  const res = await response.json();
  console.log(res);
};

setTimeout(() => {
  makaRequest();
}, 5 * 1000);
