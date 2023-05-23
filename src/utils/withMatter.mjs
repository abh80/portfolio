import fm from "front-matter";
import { z } from "zod";

const BaseMatter = z.object({
  title: z.string().max(15),
  description: z.string().max(60).optional(),
  layout: z.string().default("Base"),
  caption: z.string().max(25),
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
