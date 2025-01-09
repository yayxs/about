"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="mb-8 text-center text-3xl font-bold">关于我</h2>
        <div className="mx-auto max-w-3xl space-y-6 text-lg text-muted-foreground">
          <p>
            我是一名充满热情的前端开发工程师，专注于创建美观、高效且用户友好的web应用。
            我热衷于将设计转化为直观的用户界面，并且始终关注代码质量和性能优化。
          </p>
          <p>
            在我的职业生涯中，我积累了丰富的React和TypeScript开发经验，
            并且对现代前端技术栈有深入的理解。我善于解决复杂问题，并且乐于在团队中分享知识和经验。
          </p>
          <p>
            除了编程，我还热衷于学习新技术，关注前端发展趋势，
            并且经常参与技术社区的讨论和分享。我相信持续学习和成长是保持竞争力的关键。
          </p>
        </div>
      </motion.div>
    </section>
  );
}
