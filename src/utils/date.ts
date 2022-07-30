import moment from 'moment';

function formatTime(datetime: string) {
    const timeFormat = moment(datetime).format('hh:mm a');
    return timeFormat == 'Invalid time' ? '' : timeFormat.toLocaleUpperCase();
}

function formatDate(datetime: string): string {
   const dateFormat = moment(datetime).format('MMMM. DD. YYYY');
   const day = new Date(datetime);
   const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(day), datetime;
   return dateFormat == 'Invalid date' ? '' : `${dateFormat} | ${weekday[day.getDay()]}`;
 }

export {formatDate, formatTime};