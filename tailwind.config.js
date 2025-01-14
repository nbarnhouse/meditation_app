// Original text from https://www.nativewind.dev/getting-started/expo-router
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};

// Config file from https://github.com/stevenGarciaDev/simple-meditation-app-expo-react-native?tab=readme-ov-file
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./App.{js,jsx,ts,tsx}",
//     "./app/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the app folder
//     "./components/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the components folder]
//     "./app/(tabs)/meditate.tsx",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         rmono: ["Roboto-Mono", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };
