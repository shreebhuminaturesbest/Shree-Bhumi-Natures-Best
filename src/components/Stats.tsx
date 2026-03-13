"use client";

import React from 'react';

const features = [
  { value: "7+", label: "Years Experience", description: "Serving global markets with excellence" },
  { value: "25+", label: "Global Clients", description: "Trusted partners worldwide" },
  { value: "100+", label: "Farm Partners", description: "Direct sourcing network" },
  { value: "50+", label: "Products", description: "Wide product range" },
];

export function Stats() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {features.map((item, i) => (
            <div 
              key={i} 
              className={`text-center p-6 ${i < features.length - 1 ? 'border-r border-border' : ''}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{item.value}</div>
              <div className="text-sm font-semibold text-secondary mb-1">{item.label}</div>
              <div className="text-xs text-muted-foreground">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
