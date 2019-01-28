export const parsing = (api_weather) => {

   const date = new Date(api_weather.forecast.forecastday[0].date);
   const today = date.getUTCDay();
   let itemsForCurrentDay = 0;

   const arrayWeather = api_weather.forecast.forecastday;

   const weatherWeek = [];

   const days = [];

   let location = {
      city: api_weather.location.name,
      country: api_weather.location.country
   };

   let current = {
      dateDay: arrayWeather[0].date,
      day: parseDays(date.getDay()),
      maxtemp: Math.round(arrayWeather[0].day.maxtemp_c),
      avgtemp: Math.round(arrayWeather[0].day.avgtemp_c),
      mintemp: Math.round(arrayWeather[0].day.mintemp_c),
      humidity: Math.round(arrayWeather[0].day.avghumidity),
      visible_km: Math.round(Number(arrayWeather[0].day.avgvis_km)),
      description_text: arrayWeather[0].day.condition.text,
      description_code: parseImg(arrayWeather[0].day.condition.code)
   };



   weatherWeek.push(location);
   weatherWeek.push(current);
   weatherWeek.push(days);

   let dateDay = "";
   let maxtemp = null;
   let mintemp = null;
   let humidity = null;
   let avgtemp = null;
   let visible_km = null;
   let description_text = "";
   let description_code = null;

   for (let i = 1; i < arrayWeather.length; i++) {
      const dateUTC = new Date(arrayWeather[i].date);
      const numOfDay = dateUTC.getDay();
      const day = dateUTC.getUTCDate();

      if (today) {
         dateDay += arrayWeather[i].date;
         avgtemp += Number(arrayWeather[i].day.avgtemp_c);
         maxtemp += Number(arrayWeather[i].day.maxtemp_c);
         mintemp += Number(arrayWeather[i].day.mintemp_c);
         humidity += Number(arrayWeather[i].day.avghumidity);
         visible_km += Number(arrayWeather[i].day.avgvis_km);
         description_text = arrayWeather[i].day.condition.text;
         description_code = arrayWeather[i].day.condition.code;

         if (itemsForCurrentDay !== 1) {
            days.push({
               day: parseDays(numOfDay),
               dateDay: dateDay,
               maxtemp: maxtemp,
               avgtemp: avgtemp,
               mintemp: mintemp,
               humidity: humidity,
               visible_km: visible_km,
               description_text: description_text,
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

const parseImg = (param) => {
   switch (param) {
      case 1198: {
         return "Light freezing rain";
      }
      case 1243: {
         return "Moderate or heavy rain shower"
      }
      case 1003: {
         return "Partly cloudy"
      }
      case 1258: {
         return "Moderate or heavy snow showers"
      }
      case 1240: {
         return "Light rain shower"
      }
      case 1183: {
         return "Light rain"
      }
      case 1186: {
         return "Moderate rain at times"
      }
/*      case : {
         return ""
      }
      case : {
         return ""
      }
      case : {
         return ""
      }*/
   }
}