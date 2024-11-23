'use client';

{/* THIS IS A TEST */}

import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface DonutRatioProps {
    x: number;
    y: number;
    xLabel: string;
    yLabel: string;
}

const DonutRatio: React.FC<DonutRatioProps> = ({
    x,
    y,
    xLabel,
    yLabel
}) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Get container dimensions
        const { width, height } = container.getBoundingClientRect();
        const radius = Math.min(width, height) / 2 - 20; // Subtract margin for padding

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove(); // Clear previous content

        // Create a group for the chart
        const chartGroup = svg
        .attr("viewBox", `0 0 ${width} ${height}`)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

        // Total value (x + y)
        const total = x + y;

        // Pie data
        const data = [
            { label: xLabel, value: x },
            { label: yLabel, value: y },
        ];

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

        // Color scale
        const colorScale = d3.scaleOrdinal<string>()
        .domain(data.map(d => d.label)) // Use dynamic labels as the domain
        .range(["#ffffff", "#1D3167"]);

        // Append paths for pie slices
        chartGroup
            .selectAll("path")
            .data(pie(data))
            .join("path")
            .attr("d", arc)
            .attr("fill", (d) => colorScale(d.data.label))

        const ratio = ((y / x) * 100).toFixed(1); // Calculate the y / x ratio
        chartGroup
            .append("text")
            .attr("x", 0)
            .attr("y", 0)
            .attr("text-anchor", "middle")
            .attr("font-size", "28px")
            .attr("fill", "black")
            .style("font-weight", "bold")
            .text(`${ratio}%`);

    }, [x, y, xLabel, yLabel])

    return (
        <div ref={containerRef} className="w-full h-full">
            <svg ref={svgRef} className="w-full h-full"></svg>
        </div>
    );
}

export default DonutRatio;