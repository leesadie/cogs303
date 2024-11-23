'use client';

{/* THIS IS A TEST */}

import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface DonutProps {
    data: { label: string; value: number }[];
    width?: number;
    height?: number;
    label?: string;
    colorSchemeSize?: number;
}

const Donut: React.FC<DonutProps> = ({
    data,
    width,
    height,
    label,
    colorSchemeSize = 4
}) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null); // Reference to container for dynamic sizing

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Get the container dimensions
        const { width, height } = container.getBoundingClientRect();
        const radius = Math.min(width, height) / 2 - 20; // Subtract margin for padding
        
        const svg = d3.select(svgRef.current);

        // Clear previous chart
        svg.selectAll("*").remove();

        // Create a group for the chart
        const chartGroup = svg
        .attr("viewBox", `0 0 ${width} ${height}`)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

        // Set up color scale
        const colorScheme = d3.schemeBlues[colorSchemeSize]; // e.g., d3.schemeBlues[7]
        const colorScale = d3.scaleOrdinal<string>()
        .domain(data.map((d) => d.label))
        .range(colorScheme);

        // Create pie generator
        const pie = d3
        .pie<{ label: string; value: number }>()
        .value((d) => d.value)
        .sort(null);

        // Create arc generator
        const arc = d3
        .arc<d3.PieArcDatum<{ label: string; value: number }>>()
        .innerRadius(radius * 0.5) // Donut hole size
        .outerRadius(radius);

        // Append paths for pie slices
        chartGroup
        .selectAll("path")
        .data(pie(data))
        .join("path")
        .attr("d", arc)
        .attr("fill", (d) => colorScale(d.data.label))
        .on("mouseover", (event, d) => {
        d3.select(event.currentTarget).attr("opacity", 0.8); // Highlight
        })
        .on("mouseout", (event) => {
        d3.select(event.currentTarget).attr("opacity", 1); // Reset
        });

        // Add labels
        const labelArc = d3
        .arc<d3.PieArcDatum<{ label: string; value: number }>>()
        .innerRadius(radius * 0.6)
        .outerRadius(radius * 0.8);

        chartGroup
        .selectAll("text")
        .data(pie(data))
        .join("text")
        .attr("transform", (d) => `translate(${labelArc.centroid(d)})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .text((d) => `${d.data.label}`);

    }, [data])

    return (
        <div ref={containerRef} className="w-full h-full">
            <svg ref={svgRef} className="w-full h-full"></svg>
        </div>
    );
}

export default Donut;
