export const DEFAULT_THEMES = [
  {
    name: "Default",
    value: "default",
  },
  {
    name: "Blue",
    value: "blue",
  },
  {
    name: "Green",
    value: "green",
  },
  {
    name: "Amber",
    value: "amber",
  },
]

export const SCALED_THEMES = [
  {
    name: "Default",
    value: "default-scaled",
  },
  {
    name: "Blue",
    value: "blue-scaled",
  },
]

export const MONO_THEMES = [
  {
    name: "Mono",
    value: "mono-scaled",
  },
]

export type Theme = (typeof DEFAULT_THEMES)[number] | (typeof SCALED_THEMES)[number] | (typeof MONO_THEMES)[number]
