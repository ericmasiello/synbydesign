// 1. Import utilities from `astro:content`
import { string } from 'astro/zod';
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const educationCollection = defineCollection({
  schema: z.object({
    degree: z.string().optional(),
    institution: z.string(),
    location: z.string(),
    year: z.number(),
    isHigherEducationInstitution: z.boolean().optional().default(false),
  }),
});

const professionalExperienceCollection = defineCollection({
  schema: z.object({
    organization: z.string(),
    accomplishments: z.array(z.string()),
    roles: z.array(
      z.object({
        title: z.string(),
        yearFrom: z.number(),
        yearTo: z.number().optional(),
      })
    ),
  }),
});

const talksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().optional(),
    year: z.number(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  education: educationCollection,
  professionalExperience: professionalExperienceCollection,
  talks: talksCollection,
};
