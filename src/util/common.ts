import moment from 'moment';

export const _sortingObject = (objParam: any) =>
  Object.keys(objParam)
    .sort()
    .reduce((obj: any, key) => ((obj[key] = objParam[key]), obj), {});

export const handleOnChange = (text: string, input: string, setInputs: Function) => {
  setInputs((prevState: any) => ({ ...prevState, [input]: text }));
};
export const handleError = (error: string | null, input: string, setErrors: Function) => {
  setErrors((prevState: any) => ({ ...prevState, [input]: error }));
};

export const date = (time) => {
  const publish_date = moment(time);
  const now = moment();

  var diff_day = moment.duration(publish_date.diff(now)).asDays() * -1;
  var diff_hour = moment.duration(publish_date.diff(now)).asHours() * -1;

  if (Math.floor(diff_day) == 0) {
    //시간 리턴
    return Math.floor(diff_hour) + '시간';
  } else {
    return Math.floor(diff_day) + '일';
  }
};

export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
};

export const changeEnteredNum = (value1: number) => {
  return value1?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
