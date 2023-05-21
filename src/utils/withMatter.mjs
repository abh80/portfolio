import fm from "front-matter";
import { z } from "zod";

const BaseMatter = z.object({
  title: z.string().max(100),
  description: z.string().max(120),
  layout: z.string().default("Base"),
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
