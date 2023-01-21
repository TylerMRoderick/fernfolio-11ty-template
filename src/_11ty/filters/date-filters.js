const { DateTime } = require('luxon');

// Date formatting (human readable)
function readableDateFilter (dateObj) {
  return DateTime.fromJSDate(dateObj).toFormat('DDD');
};

// Date formatting (machine readable)
function machineDateFilter (dateObj) {
  return DateTime.fromJSDate(dateObj).toFormat('yyyy-MM-dd');
}

module.exports = {
  readableDateFilter,
  machineDateFilter,
};