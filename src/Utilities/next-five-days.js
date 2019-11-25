import DAYS_OF_WEEK from 'Constants';
import dayjs from 'dayjs';

const getNextFiveDays = () => {
  const currentDay = dayjs().day() - 1;
  const fifthDay = currentDay + 5;
  let newArray = [];

  newArray = DAYS_OF_WEEK.slice(currentDay, fifthDay);
  if (newArray.length < 5) {
    newArray.push(DAYS_OF_WEEK.slice(0, 5 - newArray.length));
  }

  return newArray.flat();
};

export default getNextFiveDays;
