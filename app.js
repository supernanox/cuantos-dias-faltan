let dateFrom;
let dateTo;

dateFrom = Date.parse("2025-03-28T16:00:00.000-03:00")
dateTo = Date.now();

console.log(dateFrom)
console.log("Faltan " + (dateFrom - dateTo)) + " milisegundos"