"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function Technologies() {
  const [activeTab, setActiveTab] = useState("frontend")

  const technologies = {
    frontend: [
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Three.js",
      "WebGL",
    ],
    backend: ["Node.js", "Python", "Java", "Go", "PHP", "Express", "Django", "Spring Boot", "FastAPI", "Laravel"],
    cloud: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Vercel",
      "Netlify",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Serverless",
      "CI/CD",
    ],
    data: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Elasticsearch",
      "GraphQL",
      "REST API",
      "Apache Kafka",
      "RabbitMQ",
      "BigQuery",
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="tecnologias" className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stack Tecnológico</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Utilizamos las tecnologías más avanzadas para crear soluciones robustas, escalables y de alto rendimiento.
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-12">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="cloud">Cloud & DevOps</TabsTrigger>
            <TabsTrigger value="data">Datos & APIs</TabsTrigger>
          </TabsList>

          {Object.entries(technologies).map(([key, techs]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={activeTab === key ? "visible" : "hidden"}
              >
                {techs.map((tech, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Badge
                      variant="outline"
                      className="w-full py-6 flex justify-center text-base font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

