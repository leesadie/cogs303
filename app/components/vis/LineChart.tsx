'use client';

import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

interface LineData {
    month: string;
    value1: number;
    value2?: number;
}

interface LineChartProps {
    data: LineData[];
    width: number;
    height: number;
    xLabel?: string;
    yLabel?: string;
}

const LineChart: React.FC<LineChartProps> = ({
    data,
    width,
    height,
    xLabel,
    yLabel
}) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove()

        // Dimensions
        const { width, height } = container.getBoundingClientRect();
        const margin = { top: 50, right: 40, bottom: 60, left: 60 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        // Data
        const months = data.map((d) => d.month);
        const maxY = d3.max(data.flatMap((d) => [d.value1 || 0, d.value2 || 0])) || 0;

        // Scales
        const xScale = d3
            .scalePoint()
            .domain(months)
            .range([0, innerWidth])
            .padding(0.5);

        const yScale = d3
            .scaleLinear()
            .domain([0, maxY])
            .nice()
            .range([innerHeight, 0]);

        // Line generators
        const line1 = d3
            .line<LineData>()
            .x((d) => xScale(d.month)!)
            .y((d) => yScale(d.value1 || 0))
            .curve(d3.curveLinear);
        
        const line2 = d3
            .line<LineData>()
            .x((d) => xScale(d.month)!)
            .y((d) => yScale(d.value2 || 0))
            .curve(d3.curveLinear);

        // Chart group
        const chartGroup = svg
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Draw axes
        chartGroup
            .append('g')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(d3.axisBottom(xScale));

        chartGroup
            .append('g')
            .call(d3.axisLeft(yScale)
            .ticks(5))

        // Axes labels
        if (xLabel) {
            svg
                .append('text')
                .attr('x', width/2)
                .attr('y', height - margin.bottom/3)
                .attr('text-anchor', 'middle')
                .text(xLabel)
                .style('font-size', '14px');
        }

        if (yLabel) {
            svg
                .append('text')
                .attr('x', -(height/2))
                .attr('y', margin.left/3)
                .attr('text-anchor', 'middle')
                .attr('transform', 'rotate(-90)')
                .text(yLabel)
                .style('font-size', '14px')
        }

        // Draw lines
        chartGroup
            .append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', '#4A90E2')
            .attr('stroke-width', 2)
            .attr('d', line1);

        // Conditionally draw line2 if value2 exists
        if (data.some(d => d.value2 !== undefined)) {
            chartGroup
                .append('path')
                .datum(data)
                .attr('fill', 'none')
                .attr('stroke', '#E94E77')
                .attr('stroke-width', 2)
                .attr('d', line2);
        }

        // Draw data points
        chartGroup
            .selectAll('.circle1')
            .data(data)
            .enter()
            .append('circle')
            .attr('class', 'circle1')
            .attr('cx', (d) => xScale(d.month)!)
            .attr('cy', (d) => yScale(d.value1))
            .attr('r', 4)
            .attr('fill', '#4A90E2');

        // Conditionally draw data points for line2 if value2 exists
        if (data.some(d => d.value2 !== undefined)) {
            chartGroup
                .selectAll('.circle2')
                .data(data)
                .enter()
                .append('circle')
                .attr('class', 'circle2')
                .attr('cx', (d) => xScale(d.month)!)
                .attr('cy', (d) => yScale(d.value2 || 0))
                .attr('r', 4)
                .attr('fill', '#E94E77');
        }

    }, [data, xLabel, yLabel])

    return (
        <div ref={containerRef} className="w-full h-full" style={{ position: "relative" }}>
            <svg ref={svgRef} className="w-full h-full" width={width} height={height}></svg>
        </div>
    );
}

export default LineChart;