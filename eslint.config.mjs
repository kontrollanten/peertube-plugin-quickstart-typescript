import tseslint from 'typescript-eslint'
import love from 'eslint-config-love'

/* eslint-disable @typescript-eslint/no-magic-numbers -- Disable for eslint config */

export default tseslint.config(
    {
        ignores: ["**/dist", "**/node_modules", "**/*.mjs"],
    },
    love,
    ...tseslint.configs.recommended,
    {
        rules: {
            "@typescript-eslint/no-unused-vars": [2, {
                argsIgnorePattern: "^_",
            }],

            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/no-misused-promises": "error",
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/strict-boolean-expressions": "off",
            "@typescript-eslint/return-await": [2, "in-try-catch"],
            "@typescript-eslint/no-invalid-void-type": "off",
            "@typescript-eslint/triple-slash-reference": "off",

            "max-len": ["error", {
                code: 120,
                comments: 120,
            }],

            "no-unused-vars": "off",
        }
    }
)

/* eslint-enable @typescript-eslint/no-magic-numbers */
