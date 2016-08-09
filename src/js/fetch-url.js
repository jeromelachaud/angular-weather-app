// Fetch data with XMLHttpRequest and Promises
export default function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status == 200) {
        resolve(request.response);
      } else {
        reject(Error(request.StatusText));
      }
    };
    request.onerror = () => reject(Error('Network Error'));
    request.send();
  });
}
