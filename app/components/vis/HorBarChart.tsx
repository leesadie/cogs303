'use client';

import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface SalesData {
    item: string;
    sales: number;
  }

interface HorBarChartProps {
    data: SalesData[];
    width: number;
    height: number;
    xAxisLabel?: string;
    yAxisLabel?: string;
    title?: string;
}

const HorBarChart: React.FC<HorBarChartProps> = ({
    data,
    width,
    height,
    xAxisLabel,
    yAxisLabel,
    title
}) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null); // Reference to container for dynamic sizing


    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Get the container dimensions
        const { width, height } = container.getBoundingClientRect();
        const margin = { top: 20, right: 30, bottom: 50, left: 60 };
        
        const svg = d3.select(svgRef.current);

        // Clear previous chart
        svg.selectAll("*").remove();

        // Sort and take top 5 items
        const topItems = [...data]
        .sort((a, b) => b.sales - a.sales)
        .slice(0, 5)

        // Set up scales
        const yScale = d3
        .scaleBand()
        .domain(topItems.map((d) => d.item))
        .range([margin.top, height - margin.bottom])
        .padding(0.2);

        const xScale = d3
        .scaleLinear()
        .domain([0, d3.max(topItems, (d) => d.sales) || 0])
        .nice()
        .range([margin.left, width - margin.right]);

        // Draw axes
        svg
        .append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(xScale).ticks(5))
        .attr("class", "x-axis");

        svg
        .append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale));

        // Add x-axis label
        if (xAxisLabel) {
            svg
            .append("text")
            .attr("x", width / 2)
            .attr("y", height - margin.bottom + 60)
            .attr("text-anchor", "middle")
            .attr("class", "x-axis-label")
            .text(xAxisLabel)
            .style("font-size", "12px");
        }

        // Add y-axis label
        if (yAxisLabel) {
            svg
            .append("text")
            .attr("x", -(height / 2))
            .attr("y", margin.left - 40)
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .attr("class", "y-axis-label")
            .text(yAxisLabel)
            .style("font-size", "12px");
        }

        // Draw bars
        svg
        .selectAll<SVGRectElement, SalesData>(".bar")
        .data(topItems)
        .join("rect")
        .attr("class", "bar")
        .attr("y", (d) => yScale(d.item)!)
        .attr("x", xScale(0))
        .attr("width", (d) => xScale(d.sales) - xScale(0))
        .attr("height", yScale.bandwidth())
        .attr("fill", "#4338ca")
        .on("mouseover", (event, d) => {
        d3.select(event.currentTarget).attr("opacity", 0.8); // Highlight
        })
        .on("mouseout", (event) => {
        d3.select(event.currentTarget).attr("opacity", 1); // Reset
        });
}, [data, title]);

    return (
        <div ref={containerRef} className="w-full h-full" style={{ position: "relative" }}>
            <svg ref={svgRef} className="w-full h-full" width={width} height={height}></svg>
        </div>
    );
}

export default HorBarChart;