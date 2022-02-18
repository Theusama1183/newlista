// Demographic Chart Js
var trace1 = {
  x: [ "Jan", "Feb"," March", "April", "May", "june", "july", "Aug"],
  y: [25, 50, 60, 20, -10, 20],
  name: "yaxis data",
  type: "scatter",
};


var data = [trace1];

var layout = {
  title: "Market Value",
  font: { size: 14 },

  yaxis2: {
    titlefont: { color: "rgb(148, 103, 189)" },
    tickfont: { color: "rgb(148, 103, 189)" },
    overlaying: "y",
    side: "right",
  },
};

var config = { responsive: true };

Plotly.newPlot("Demographics-chart", data, layout, config);


