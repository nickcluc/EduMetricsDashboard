$(function(){
  var chartHeight = 100;
  var chartColors = {
    "Strongly Agree": '#00A7E6',
    "Somewhat Agree": '#7CCD32',
    "Somewhat Disagree": '#FD0076',
    "Strongly Disagree": '#FFC800'
  };
  var donutOptions = {
    label: { show: false },
    width: 18,
    expand: false
  }
  var donutChart1 = c3.generate({
    bindto: "#donut-graph-1",
    size: {
      height: chartHeight
    },
    padding: {
      top: 0,
      right: 100,
      bottom: 0,
      left: -100
    },
    data: {
      columns: [
        ["Strongly Agree", 15],
        ["Somewhat Agree", 32],
        ["Somewhat Disagree", 18],
        ["Strongly Disagree", 35]
      ],
      colors: chartColors,
      type: "donut"
    },
    donut: donutOptions,
    legend: {
      position: 'right'
    }
  });

  var donutChart2 = c3.generate({
    bindto: "#donut-graph-2",
    size: {
      height: chartHeight
    },
    data: {
      columns: [
        ["Strongly Agree", 48],
        ["Somewhat Agree", 27],
        ["Somewhat Disagree", 21],
        ["Strongly Disagree", 4]
      ],
      colors: chartColors,
      type: "donut",
      labels: false
    },
    donut: donutOptions,
    legend: {
      position: 'right'
    }
  });

});
