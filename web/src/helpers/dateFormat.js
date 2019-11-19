// Simple Date Formatting
// Input: 2018-12-43
// Output: Dec 23
// By Pete

const dateFormat = (date, monthLength) => {
  let dateArray = date.split('-');
  let arrayMonth = parseInt(dateArray[1]) - 1;
  let arrayDay = parseInt(dateArray[2]);

  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Augu',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // let months = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December',
  // ];

  // Create Ordinals
  // 23"rd", 1"st", etc.
  const ordinal = day => {
    if (day > 3 && day < 21) return day + 'th';
    switch (day % 10) {
      case 1:
        return day + 'st';
      case 2:
        return day + 'nd';
      case 3:
        return day + 'rd';
      default:
        return day + 'th';
    }
  };

  // Build String
  return months[arrayMonth] + ' ' + ordinal(arrayDay);
};

export default dateFormat;
