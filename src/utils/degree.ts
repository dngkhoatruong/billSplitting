
function formatCelsius(fDegree: number) {
   return `${Math.round((fDegree - 32) * 5 / 9)} °C`;
};

function formatFahrenheit(cDegree: number) {
   return `${cDegree * 9 / 5 + 32} °F`;
};

export {formatCelsius, formatFahrenheit};