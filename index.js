const dateHolidays = require('date-holidays');
const fs = require('fs');

let countryCodes = ['ve','mx','bo','sr','co','cr','do','ec','sv','gt','jm','hn','pa','pe','ni']

for (let i = 0 ; i < countryCodes.length; i++) {
  let hd = new dateHolidays(countryCodes[i]);
  let holidays = hd.getHolidays(2023);

  let csvString = "";
  csvString += '"Fecha","Nombre","Tipo","Pais"\n';

  for (let j = 0; j < holidays.length; j++){
    let holiday = holidays[j];
    let date = holiday.date.toString();
    let name = holiday.name;
    let type = holiday.type;
    csvString += `"${date}","${name}","${type}","${countryCodes[i]}"\n`;
  }

  fs.writeFileSync(`holidays_${countryCodes[i]}.csv`, csvString);
  console.log(`holidays_${countryCodes[i]}.csv creado exitosamente!`);

}
