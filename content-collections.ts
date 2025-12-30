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

const profiles = defineCollection({
	name: "profile",
	directory: "contents/profile",
	include: "*.md",
	schema: z.object({}),
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
	schema: z.object({}),
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
	schema: z.object({
		title: z.string(),
		date: z.string(),
	}),
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
