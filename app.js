var flights = JSON.parse('[{"airline":"Oceanic","status":"crashed","departure":{"iata":"SYD","time":"2004-09-22 14:55"}},{"airline":"Delta","status":"on_time","departure":{"iata":"JFK","time":"2018-04-26 12:34"},"arrival":{"iata":"SFO","time":"2018-04-26 18:55"}},{"airline":"American","status":"landed","departure":{"iata":"LAX","time":"2018-04-25 14:55"},"arrival":{"iata":"BOG","time":"2018-04-25 18:55"}}]');

for (var i=0; i < flights.length; i++) {
  var flight = flights[i];

  var arrivalIata = flight.arrival ? flight.arrival.iata : "";
  var arrivalTime = flight.arrival ? flight.arrival.time : "";

  var className = "";
  if (flight.status == "crashed") {
    className = "table-danger";
  } else if (flight.status == "landed") {
    className = "table-success";
  }

  flight.className = className

  var html = $("#flight-template").html();
  var template = Handlebars.compile(html);
  var tr = template(flight);

  $("tbody").append(tr);
}
