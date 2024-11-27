'use client';

import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

interface RevBarProps {
    data: { name: string; value: number }[];
    width: number;
    height: number;
}

const RevBar: React.FC<RevBarProps> = ({
    data,
    width,
    height
}) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove()

        // Margins
        const margin = { top: 20, right: 130, bottom: 30, left: 120 };
        const { width, height } = container.getBoundingClientRect();

        // Scales
        const xScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.value) || 0])
            .range([margin.left, width - margin.right]);
        
        const yScale = d3
            .scaleBand()
            .domain(data.map((d) => d.name))
            .range([margin.top, height - margin.bottom])
            .padding(0.1);
        
        const colorScale = d3
            .scaleSequential(d3.interpolateRdBu)
            .domain([0, d3.max(data, (d) => d.value) || 0]);

        const chartGroup = svg
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Bars
        chartGroup
            .selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('y', (d) => yScale(d.name) || 0)
            .attr('x', 0)
            .attr('height', yScale.bandwidth())
            .attr('width', (d) => xScale(d.value))
            .attr('fill', (d) => colorScale(d.value || 0))

        // Axes
        const xAxis = d3.axisBottom(xScale).ticks(5).tickFormat(d3.format('~s'));
        const yAxis = d3.axisLeft(yScale);

        chartGroup.append('g').attr('class', 'x-axis').attr('transform', `translate(0, ${height})`).call(xAxis);
        chartGroup.append('g').attr('class', 'y-axis').call(yAxis);
    }, [data, width, height])

    return (
        <div ref={containerRef} className="w-full h-full" style={{ position: "relative" }}>
            <svg ref={svgRef} className="w-full h-full" width={width} height={height}></svg>
        </div>
    );
}

export default RevBar;