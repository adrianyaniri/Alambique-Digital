module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // Le dice a ESLint que use el 'parser' de TypeScript para entender la sintaxis moderna.
    plugins: ['@typescript-eslint'], // Carga el plugin con las reglas específicas de TypeScript.
    extends: [
        'eslint:recommended', // Usa las reglas base recomendadas por ESLint.
        'plugin:@typescript-eslint/recommended', // Usa las reglas recomendadas para TypeScript.
        'prettier', // IMPORTANTE: Desactiva las reglas de ESLint que puedan chocar con Prettier. Siempre va al final.
    ],
};