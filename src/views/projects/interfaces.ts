export enum Category {
  frontend = "Front-end",
  backend = "Back-end",
  design = "Design",
  challenge = "Challenges",
}

export type TabName = keyof typeof Category;

export const tabEntries = Object.keys(Category) as TabName[];
