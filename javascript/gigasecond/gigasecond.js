/*
# Gigasecond

Given a moment, determine the moment that would be after a gigasecond
has passed.

A gigasecond is 10^9 (1,000,000,000) seconds.
*/

//new Date(Date.UTC(2047, 4, 23, 1, 46, 40))
export const gigasecond = date => {
  let giga = Math.pow(10, 9);

  //year, month, day, hour, minute, second
  let year = date.getYear();
  let month = date.getMonth();
  let day = date.getDay();
  let hour = date.getHour();
  let minute = date.getMinute();
  let second = date.getSecond();

  year += giga/
};
