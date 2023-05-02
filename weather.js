function showWeather() {
  const apiKey = "06714f1989bb5f6739ab6a2100b92f74";
  const city = "Jakarta";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

  // Buat HTTP request ke API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      // Tampilkan suhu untuk 5 hari kedepan
      console.log("Ramalan cuaca untuk kota Jakarta:");
      for (let i = 0; i < 5; i++) {
        // Konversi waktu timestamp ke waktu lokal
        const timestamp = data.list[i * 8].dt;
        const t = new Date(timestamp * 1000);

        //Konversi suhu ke format string
        const temp = data.list[i * 8].main.temp.toFixed(1);

        //Tampilkan ramalan cuaca untuk hari tersebut
        console.log(
          `${i + 1}. Tanggal ${t.toLocaleDateString(
            "id-ID"
          )}: suhu ${temp} derajat Celcius`
        );
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

showWeather();
