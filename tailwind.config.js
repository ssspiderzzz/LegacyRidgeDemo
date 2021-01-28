module.exports = {
  purge: {
    content: ["./src/**/*.html", "./src/**/*.jsx"],
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      spacing: {
        "my-header": "700px",
        "effect-cell-md": "33vw",
        "effect-cell-sm": "50vw",
        "effect-cell-2md": "66vw",
        "effect-cell-3sm": "150vw",
        "80vw": "80vw",
        "100vw": "100vw",
        thin: "0.5rem",
      },
      opacity: {
        70: "0.7",
      },
      borderWidth: {
        min: "0.016rem",
      },
      backgroundImage: (theme) => ({
        "gallary-background":
          'url("https://legacyridge.ca/wp-content/uploads/2018/08/Parallax.jpg")',
      }),
    },
  },

  variants: {
    extend: {
      opacity: ["hover", "disabled", "focus"],
      cursor: ["hover", "disabled", "focus"],
    },
  },
  corePlugins: {
    float: false,
    appearance: false,
  },
};
