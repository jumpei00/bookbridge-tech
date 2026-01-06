import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import rehypeShiki from "@shikijs/rehype";
import remarkGfm from "remark-gfm";
import type { Pluggable } from "unified";
import { z } from "zod";

const markdownOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [[rehypeShiki, { theme: "github-light" }] as Pluggable],
};

const profileSchema = z.object({
  name: z.string(),
  nameJa: z.string(),
  job: z.string(),
  workplace: z.string(),
  workplaceUrl: z.string(),
  location: z.string(),
  birthplace: z.string(),
  bio: z.string(),
  skills: z.array(
    z.object({
      name: z.string(),
      years: z.string(),
      level: z.number(),
    }),
  ),
  careers: z.array(
    z.object({
      period: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  ),
  certifications: z.array(
    z.object({
      period: z.string(),
      name: z.string(),
      url: z.string(),
    }),
  ),
});

const booksSchema = z.object({
  title: z.string(),
  description: z.string(),
  categories: z.array(
    z.object({
      name: z.string(),
      icon: z.string(),
      books: z.array(z.string()),
    }),
  ),
});

const postsSchema = z.object({
  title: z.string(),
  date: z.string(),
});

const profiles = defineCollection({
  name: "profile",
  directory: "contents/profile",
  include: "*.md",
  schema: profileSchema,
  transform: async (content, context) => {
    const html = await compileMarkdown(context, content, markdownOptions);
    return {
      ...content,
      html,
    };
  },
});

const books = defineCollection({
  name: "books",
  directory: "contents/study",
  include: "*.md",
  schema: booksSchema,
  transform: async (content, context) => {
    const html = await compileMarkdown(context, content, markdownOptions);
    return {
      ...content,
      html,
    };
  },
});

const posts = defineCollection({
  name: "posts",
  directory: "contents/posts",
  include: "*.md",
  schema: postsSchema,
  transform: async (content, context) => {
    const html = await compileMarkdown(context, content, markdownOptions);
    return {
      ...content,
      html,
    };
  },
});

export default defineConfig({
  collections: [books, posts, profiles],
});
