import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          Welcome to Software Engineering Guide
        </h1>
        <p className="text-lg text-gray-300">
          Your comprehensive resource for learning software engineering fundamentals and best practices.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card hover-lift">
          <h2 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Getting Started
          </h2>
          <p className="text-gray-300">
            Begin your journey with our comprehensive introduction to software engineering fundamentals.
          </p>
        </div>

        <div className="card hover-lift">
          <h2 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Core Concepts
          </h2>
          <p className="text-gray-300">
            Master essential programming concepts, data structures, and algorithms.
          </p>
        </div>

        <div className="card hover-lift">
          <h2 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Web Development
          </h2>
          <p className="text-gray-300">
            Learn modern web development with HTML, CSS, JavaScript, and React.
          </p>
        </div>

        <div className="card hover-lift">
          <h2 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Backend Development
          </h2>
          <p className="text-gray-300">
            Explore server-side development with Node.js, databases, and API design.
          </p>
        </div>
      </div>

      <section className="card">
        <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          Why Learn Software Engineering?
        </h2>
        <div className="space-y-4">
          <p className="text-gray-300">
            Software engineering is a dynamic and rewarding field that combines creativity with technical expertise. 
            As a software engineer, you'll have the opportunity to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Build innovative solutions to real-world problems</li>
            <li>Work with cutting-edge technologies</li>
            <li>Collaborate with teams worldwide</li>
            <li>Continuously learn and grow</li>
            <li>Make a positive impact on society</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

interface CategoryCardProps {
  title: string;
  description: string;
  items: { href: string; label: string }[];
}

function CategoryCard({ title, description, items }: CategoryCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-indigo-500 transition-all duration-200">
      <h2 className="text-2xl font-semibold text-indigo-400 mb-3">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
