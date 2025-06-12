import { z } from "zod";

export const nameSchema = z.string().trim().min(1).max(255);
export const emojiSchema = z.string().trim().optional();
export const descriptionSchema = z.string().trim().optional();

export const projectIdSchema = z.string().trim().min(1)

export const createProjectSchema = z.object({
  name: nameSchema,
  emoji: emojiSchema,
  description: descriptionSchema,
});

export const updateProjectSchema = z.object({
  name: nameSchema,
  emoji: emojiSchema,
  description: descriptionSchema,
});
