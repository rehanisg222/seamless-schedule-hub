
import React from "react";
import { Container } from "@/components/ui/Container";

interface StatItem {
  value: string;
  label: string;
}

interface StatsProps {
  title: string;
  description: string;
  stats: StatItem[];
}

export function Stats({ title, description, stats }: StatsProps) {
  return (
    <section className="py-16 bg-blue-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">{title}</h2>
          <p className="text-lg text-blue-700 max-w-3xl mx-auto">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm uppercase tracking-wider text-blue-900 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
