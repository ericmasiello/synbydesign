// 1. Import utilities from `astro:content`
import { string } from 'astro/zod';
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)

const role = z.object({
  title: z.string(),
  yearFrom: z.number(),
  yearTo: z.number().optional(),
});

const website = z.object({
  url: z.string(),
});

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
    roles: z.array(role),
  }),
});

const relatedExperienceCollection = defineCollection({
  schema: z.object({
    accomplishments: z.array(z.string()),
    role: role,
    title: z.string(),
    website: website.optional(),
    meta: z.string().optional(),
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

const resumeCollection = defineCollection({
  schema: z.object({
    lead: z.string(),
    name: z.string(),
    title: z.string(),
    expertise: z.array(z.string()),
    learning: z.array(z.string()).optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  resume: resumeCollection,
  education: educationCollection,
  professionalExperience: professionalExperienceCollection,
  talks: talksCollection,
  relatedExperience: relatedExperienceCollection,
};
