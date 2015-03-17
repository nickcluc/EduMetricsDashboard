function refreshChart(n) {
  lineChart.load({
    columns: [
      xAxis.slice(0,n+1),
      gon.resilience.slice(0,n+1),
      gon.timeManagement.slice(0,n+1),
      gon.safety.slice(0,n+1),
      gon.support.slice(0,n+1),
      gon.relationships.slice(0,n+1),
      gon.facilities.slice(0,n+1)
    ]
  });
}
