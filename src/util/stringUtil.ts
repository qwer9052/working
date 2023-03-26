//string 관련 함수 정의

export const phoneHypen = (phone: string) => {
  var phoneStr = phone.trim();
  return phoneStr
    .replace(/[^0-9]/g, '')
    .replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, '$1-$2-$3')
    .replace('--', '-');
};

export function replaceThousandComma(value: Number) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const replaceOnlyString = (text: any) => {
  return text.replace(/[- #*;:,.<>\{\}\[\]\\\/+=a-zㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '');
};

export const pwValidation = (pw: string) => {
  const pwRegex = new RegExp('^(?=.{8,})');
  if (pwRegex.test(pw)) {
    return true;
  }
  return false;
};

export const emailValidation = (email: string) => {
  const regex = new RegExp(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z-_\.])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/);
  if (regex.test(email)) {
    return true;
  }
  return regex.test(email);
};

export function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}
