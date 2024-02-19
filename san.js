const res = document.getElementById("res")
const butres = document.getElementById("butres")
let lat = document.getElementById("lat")
let lon = document.getElementById("lon")

navigator.geolocation.getCurrentPosition(pos => {
    lat = pos.coords.latitude
    lon = pos.coords.longitude
})

butres.addEventListener("click", a)

async function a() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`

    // const revers = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json`
    // let r = await fetch(revers)
    // // console.log(r);
    // let data1 = await r.json()
    // console.log(data1);
    let x = await fetch(url)
    let data = await x.json()
    console.log(data);
    const date = String(data.hourly.time[0])

    res.innerHTML = "Latitude : " + data.latitude + ", Longitude : " + data.longitude + "<br>weather : " + data.hourly.temperature_2m[0] + data.hourly_units.temperature_2m + "<br> Date: " + date.substr(0, 10)
}

