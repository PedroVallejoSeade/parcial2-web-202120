import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const Chart = ({ width = 600, height = 600, data }) => {
  const barChart = useRef();

  useEffect(() => {
    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const svg = d3.select(barChart.current);
    svg.attr('width', width);
    svg.attr('height', height);

    let g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const y = d3.scaleLinear().domain([0, 500]).range([iheight, 0]);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, iwidth])
      .padding(0.1);

    // Continue with implementation. Don't forget the tooltip
    const t = d3.select("body")
      .append("div")
      .style("position", "absolute")
      .style("background", "white")
      .style("border", "solid 1px")

    const rect = g.selectAll("rect").data(data);

    rect.enter().append("rect")
      .attr("class", "bar")
      .style("fill", "blue")
      .attr("height", e => iheight - y(e.stock))
      .attr("width", x.bandwidth())  
      .attr("x", e => x(e.name))
      .attr("y", e => y(e.stock))

    g.append("g")
      .classed("y--axis", true)
      .call(d3.axisLeft(y))
  });

  return (
    <div id='chartArea'>
      <svg ref={barChart}></svg>
    </div>
  );
};
