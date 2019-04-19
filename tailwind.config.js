module.exports = {
  theme: {
    inset: {
      "0": 0,
      "100": "100%"
    },
    transform: {
      // defaults to this value
      none: "none"
    },
    translate: {
      "1/2": "50%",
      full: "100%"
    }
  },
  variants: {
    // all the following default to ['responsive']
    transform: ["responsive"],
    transformOrigin: ["responsive"],
    translate: ["responsive"]
  },
  plugins: [
    require("tailwindcss-transforms")({
      "3d": false // defaults to false
    })
  ]
};
