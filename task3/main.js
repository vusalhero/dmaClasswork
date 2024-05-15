// task 3
// fetch('https://restcountries.com/v3.1/name/azerbaijan-ə')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Xəta: HTTP status ' + response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     const countryData = data[0]; // Ölkə məlumatları
//     const name = countryData.name.common; // Adı
//     const flag = countryData.flags.png; // Şəkili
//     const area = countryData.area; // Sahəsi
//     const coatOfArms = countryData.coatOfArms; // Gerbi
//     const capital = countryData.capital; // Paytaxtı

//     console.log("Adı:", name);
//     console.log("Şəkili:", flag);
//     console.log("Sahəsi:", area);
//     console.log("Gerbi:", coatOfArms);
//     console.log("Paytaxtı:", capital);
//   })
//   .catch(error => {
//     console.error(error);
//   });