import { differenceInYears, getDate, getMonth } from 'date-fns';

export const isBirthday = birthDay => {
  const today = new Date();
  const birthday = new Date(birthDay);

  return (
    getDate(today) === getDate(birthday) &&
    getMonth(today) === getMonth(birthday)
  );
};
