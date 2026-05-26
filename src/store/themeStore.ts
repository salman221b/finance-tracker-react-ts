import { create } from "zustand";

import { persist } from "zustand/middleware";

type Theme =
  | "light"
  | "dark";

interface ThemeState {
  theme: Theme;

  toggleTheme: () => void;
}

export const useThemeStore =
  create<ThemeState>()(
    persist(
      (set, get) => ({
        theme: "dark",

        toggleTheme: () => {
          const current =
            get().theme;

          set({
            theme:
              current ===
              "dark"
                ? "light"
                : "dark",
          });
        },
      }),

      {
        name:
          "theme-storage",
      }
    )
  );