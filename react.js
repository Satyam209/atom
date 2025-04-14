import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { Mail } from "lucide-react";

export default function BYBAHome() { return ( <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white"> <header className="text-center py-20 px-4"> <h1 className="text-5xl font-bold mb-4">Build Your Best Architecture</h1> <p className="text-xl mb-6 max-w-2xl mx-auto"> Custom semiconductor design, faster and smarter than ever. </p> <div className="space-x-4"> <Button className="text-lg">Get in Touch</Button> <Button variant="outline" className="text-lg">See Our Work</Button> </div> </header>

<section className="py-16 px-6 max-w-5xl mx-auto">
    <h2 className="text-3xl font-semibold mb-6 text-center">What We Do</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: "Custom Chip Design", desc: "Tailored silicon solutions for specific applications." },
        { title: "Chiplet Architecture", desc: "Scalable and modular designs for future-ready systems." },
        { title: "AI-Driven Workflows", desc: "Accelerated design using intelligent automation." },
        { title: "IP Development", desc: "Reusable and optimized IP blocks for rapid integration." },
      ].map((item, idx) => (
        <Card key={idx} className="bg-gray-700 border-none">
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>

  <section className="py-16 px-6 text-center bg-gray-900">
    <h2 className="text-3xl font-semibold mb-4">Why BYBA?</h2>
    <p className="max-w-3xl mx-auto mb-10">
      Speed, scalability, and smart silicon. Our AI-powered and chiplet-based architecture approach reduces time-to-market and development cost while maximizing performance.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        "50% faster time-to-market",
        "Reduced NRE cost",
        "Modular and reusable architecture",
        "Built by industry veterans"
      ].map((point, idx) => (
        <Card key={idx} className="bg-gray-800 border-none">
          <CardContent className="p-4 text-white font-medium text-sm text-center">
            {point}
          </CardContent>
        </Card>
      ))}
    </div>
  </section>

  <section className="py-16 px-6 max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
    <p className="mb-6">Ready to build your best architecture? Let's talk.</p>
    <Button className="text-lg"><Mail className="mr-2 w-5 h-5" /> contact@byba.ai</Button>
  </section>

  <footer className="text-center py-6 text-sm text-gray-400">
    © {new Date().getFullYear()} BYBA. All rights reserved.
  </footer>
</div>

); }

