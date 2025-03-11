
import { Container } from "@/components/ui/Container";

interface StatsProps {
  title: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export function Stats({ title, description, stats }: StatsProps) {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-2 font-sans tracking-tight">{title}</h2>
              <p className="text-lg text-gray-600">{description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#110027] rounded-lg p-6">
                <h4 className="text-white text-lg uppercase mb-1 font-semibold">{stat.label}</h4>
                <p className="text-5xl font-bold text-[#FF4D8F]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
