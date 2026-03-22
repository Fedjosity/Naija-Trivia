import { z } from 'zod';

export const QuestionSchema = z.object({
  id: z.string(),
  text: z.string(),
  options: z.array(z.string()).length(4),
  correctAnswerIndex: z.number().min(0).max(3),
  explanation: z.string(),
  category: z.enum(['History', 'Sports', 'Music', 'Pop Culture']),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']),
  culturalContext: z.string().optional(), // Why is this relevant to Nigeria?
});

export type Question = z.infer<typeof QuestionSchema>;

export const PackSchema = z.object({
  id: z.string(),
  title: z.string(),
  rarity: z.enum(['Standard', 'Exclusive']).default('Standard'),
  version: z.string(), // e.g., "2024-01-25.01"
  questions: z.array(QuestionSchema),
  publishedAt: z.string(), // ISO date
  checksum: z.string(),
});

export type Pack = z.infer<typeof PackSchema>;
