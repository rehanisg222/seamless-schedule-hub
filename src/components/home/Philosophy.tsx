
import React, { ReactNode } from 'react';
import { Container } from "@/components/ui/Container";

interface PhilosophyProps {
  title: string;
  content: ReactNode;
}

export function Philosophy({ title, content }: PhilosophyProps) {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{title}</h2>
          <div className="text-lg space-y-6">
            {content}
          </div>
        </div>
      </Container>
    </section>
  );
}
