function drawViz(data, config, element) {
    element.innerHTML = "";
  
    const width = element.offsetWidth;
    const height = 200;
  
    const svg = d3.select(element)
      .append("svg")
      .attr("width", width)
      .attr("height", height);
  
    svg.append("circle")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", 60)
      .style("fill", "#4CAF50");
  }
  
  dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
  