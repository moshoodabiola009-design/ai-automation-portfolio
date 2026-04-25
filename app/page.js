import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Linkedin, Cloud, Bot } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold">Moshood Adenekan</h1>
        <p className="text-lg md:text-xl text-gray-600 mt-2">
          AI Automation Engineer | Cloud & AI Systems Builder
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Open to Remote AI / Cloud Roles (US & EU)
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:Moshoodabiola009@gmail.com">
            <Button><Mail className="w-4 h-4 mr-2" />Email</Button>
          </a>
          <a href="https://linkedin.com">
            <Button variant="outline"><Linkedin className="w-4 h-4 mr-2" />LinkedIn</Button>
          </a>
        </div>
      </motion.div>

      {/* ABOUT */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-600">
            I build AI automation systems, intelligent workflows, and cloud-based
            solutions using tools like OpenAI, Claude, Gemini, n8n, AWS, and Azure.
            My focus is turning manual business processes into scalable automated systems.
          </p>
        </CardContent>
      </Card>

      {/* SKILLS */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-2">Core Skills</h2>
          <div className="grid md:grid-cols-3 gap-2 text-gray-600">
            <p>AI Automation & Agents</p>
            <p>n8n Workflow Design</p>
            <p>Cloud (AWS / Azure)</p>
            <p>API Integration</p>
            <p>System Architecture</p>
            <p>Revenue Ops Automation</p>
          </div>
        </CardContent>
      </Card>

      {/* PROJECTS */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">AI Projects</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">AI Employee Onboarding Agent</h3>
              <p className="text-gray-600 text-sm">
                Automated full onboarding workflow using AI agents and task automation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Revenue Ops AI System</h3>
              <p className="text-gray-600 text-sm">
                Built lead capture, content generation, and scoring automation pipeline.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">AI Influencer System</h3>
              <p className="text-gray-600 text-sm">
                Automated AI influencer content creation, video generation, and social posting.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CONTACT */}
      <Card>
        <CardContent className="p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Let’s Work Together</h2>
          <p className="text-gray-600 mb-4">
            Open to remote AI Automation and Cloud Engineering roles.
          </p>
          <div className="flex justify-center gap-3">
            <Bot className="w-5 h-5" />
            <Cloud className="w-5 h-5" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
