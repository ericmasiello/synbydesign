// 1. Import utilities from `astro:content`
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
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  education: educationCollection,
};
