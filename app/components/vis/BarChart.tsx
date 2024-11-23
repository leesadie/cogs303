'use client';

{/* THIS IS A TEST */}

import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface BarChartProps {
    data: { label: string; value: number }[];
    width: number;
    height: number;
    xAxisLabel?: string;
    yAxisLabel?: string;
}

const BarChart: React.FC<BarChartProps> = ({
    data,
    width,
    height,
    xAxisLabel,
    yAxisLabel
}) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = 600;
        const height = 400;
        const margin = { top: 20, right: 20, bottom: 50, left: 50 };

        // Clear previous chart
        svg.selectAll("*").remove();

        // Set up scales
        const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.label))
        .range([margin.left, width - margin.right])
        .padding(0.2);

        const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value) || 0])
        .nice()
        .range([height - margin.bottom, margin.top]);

        // Draw axes
        svg
        .append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(xScale))
        .selectAll("text")
        .attr("transform", "rotate(-20)")
        .style("text-anchor", "end");

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
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d) => xScale(d.label)!)
        .attr("y", (d) => yScale(d.value))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => height - margin.bottom - yScale(d.value))
        .attr("fill", "#4338ca")
        .on("mouseover", (event, d) => {
            d3.select(event.currentTarget).attr("opacity", 0.8); // Highlight
            })
            .on("mouseout", (event) => {
            d3.select(event.currentTarget).attr("opacity", 1); // Reset
            });
    }, [data, xAxisLabel, yAxisLabel])

    return (
        <div className="flex justify-center">
            <svg ref={svgRef} width={width} height={height}></svg>
        </div>
    );
}

export default BarChart;