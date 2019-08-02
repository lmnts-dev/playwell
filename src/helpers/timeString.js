// Time Strings

const TodayString = () => {
  let objToday = new Date(),
    weekday = new Array(
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ),
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = (function() {
      var a = objToday;
      if (/1/.test(parseInt((a + '').charAt(0)))) return 'th';
      a = parseInt((a + '').charAt(1));
      return 1 == a ? 'st' : 2 == a ? 'nd' : 3 == a ? 'rd' : 'th';
    })(),
    dayOfMonth =
      today + (objToday.getDate() < 10)
        ? '0' + objToday.getDate() + domEnder
        : objToday.getDate() + domEnder,
    months = new Array(
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear(),
    curHour =
      objToday.getHours() > 12
        ? objToday.getHours() - 12
        : objToday.getHours() < 10
        ? '0' + objToday.getHours()
        : objToday.getHours(),
    curMinute =
      objToday.getMinutes() < 10
        ? '0' + objToday.getMinutes()
        : objToday.getMinutes(),
    curSeconds =
      objToday.getSeconds() < 10
        ? '0' + objToday.getSeconds()
        : objToday.getSeconds(),
    curMeridiem = objToday.getHours() > 12 ? 'PM' : 'AM';
  let today = dayOfWeek + ', ' + curMonth + ' ' + dayOfMonth;

  return today;
};

export default TodayString;