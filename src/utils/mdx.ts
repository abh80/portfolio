export const getSlug = (s: string) => s && s.split(" ").join("-");

export const getCodeLanguageString = (language: string | null) => {
  switch (language) {
    case "jsx":
      return "React Javascript (JSX)";

    default:
      return language;
  }
};
