
import React, { ReactNode } from "react";
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
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">{title}</h2>
          <div className="prose prose-lg max-w-none">
            {content}
          </div>
        </div>
      </Container>
    </section>
  );
}
