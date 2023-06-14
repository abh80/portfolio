import fm from "front-matter";
import { z } from "zod";

const BaseMatter = z.object({
  title: z.string(),
  description: z.string().optional(),
  layout: z.string().default("Base"),
  caption: z.string().optional(),
  tag: z.string().optional(),
  cover: z.string().optional(),
  topics: z.array(z.string()).optional(),
  date: z.string().optional(),
  author: z.string().optional(),
});
const withMatter = () => (tree, file) => {
  const data = fm(file.value).attributes;
  if (Object.keys(data).length === 0) return;

  try {
    file["matter-data"] = BaseMatter.parse(data);
  } catch (e) {
    if (e instanceof z.ZodError) {
      throw new Error(JSON.stringify(e.issues));
    }
  }
};

export default withMatter;
