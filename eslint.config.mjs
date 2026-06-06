import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "motion",
              message:
                'Import from "motion/react" instead. Example: import { motion } from "motion/react"',
            },
            {
              name: "framer-motion",
              message:
                'This template uses the "motion" package — import from "motion/react", not "framer-motion".',
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
