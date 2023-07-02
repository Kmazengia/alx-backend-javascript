export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';
  let iterator = reportWithIterator();

  while (true) {
    let result = iterator.next();
    if (result.done) {
      break;
    }

    employeeNames += result.value + ' | ';
  }

  return employeeNames.slice(0, -3);
}
