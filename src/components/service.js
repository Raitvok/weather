export const parsing = (api_weather) => {

   const date = new Date(api_weather.forecast.forecastday[0].date);
   const today = date.getUTCDay();
   let itemsForCurrentDay = 0;

   const arrayWeather = api_weather.forecast.forecastday;

   let weatherWeek = [];
   let location = {
      city: api_weather.location.name,
      country: api_weather.location.country
   };

   weatherWeek.push(location);

   let dateDay = "";
   let maxtemp = null;
   let mintemp = null;
   let humidity = null;
   let avgtemp = null;
   let visible_km = null;
   let description_text = "";
   let description_code = null;

   for (let i = 0; i < arrayWeather.length; i++) {
      const dateUTC = new Date(arrayWeather[i].date);
      const numOfDay = dateUTC.getDay();
      const day = dateUTC.getUTCDate();

      if (today !== day) {
         dateDay += arrayWeather[i].date;
         avgtemp += Number(arrayWeather[i].day.avgtemp_c);
         maxtemp += Number(arrayWeather[i].day.maxtemp_c);
         mintemp += Number(arrayWeather[i].day.mintemp_c);
         humidity += Number(arrayWeather[i].day.avghumidity);
         visible_km += Number(arrayWeather[i].day.avgvis_km);
         description_text = arrayWeather[i].day.condition.text;
         description_code = arrayWeather[i].day.condition.code;

         if (itemsForCurrentDay !== 8) {
            weatherWeek.push({
               day: parseDays(numOfDay),
               dateDay: dateDay,
               maxtemp: maxtemp,
               avgtemp: avgtemp,
               mintemp: mintemp,
               humidity: humidity,
               visible_km: visible_km,
               descritption_text: description_text,
               description_code: description_code
            });

            itemsForCurrentDay = null;
            dateDay = "";
            avgtemp = null;
            maxtemp = null;
            mintemp = null;
            humidity = null;
            visible_km = null;
         }
      }
   }

   return weatherWeek;
};

const parseDays = (param) => {
   switch (param) {
      case 0: {
         return "Sunday";
      }
      case 1: {
         return "Monday";
      }
      case 2: {
         return "Tuesday";
      }
      case 3: {
         return "Wednesday";
      }
      case 4: {
         return "Thursday";
      }
      case 5: {
         return "Friday";
      }
      case 6: {
         return "Saturday";
      }
   }
};
