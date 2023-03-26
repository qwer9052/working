export const writeToStorage = (key: string, value: string) =>
  new Promise((resolve, reject) => {
    //AsyncStorage.setItem(key, value).then(resolve).catch(reject);

    try {
      window.localStorage.setItem(key, value);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });

export const readFromStorage = (key: string) =>
  new Promise<string>((resolve, reject) => {
    try {
      var value = window.localStorage.getItem(key);
      if (value && value.length > 0) {
        resolve(value);
      } else resolve('');
    } catch (error) {
      reject(error);
    }
  });
