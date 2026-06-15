# bonnes pratiques de développement

ce document rassemble les normes, conventions et directives techniques à appliquer lors du développement sur ce projet.

---

## architecture et stack technique

- **runtime / gestionnaire** : utiliser uniquement **bun** pour l'installation des dépendances et l'exécution des scripts de développement (`bun dev`, `bun run build`).
- **versioning node/npm** : la version de node/npm de secours est verrouillée via **volta** dans le fichier `package.json` (`node: 22.12.0`, `npm: 10.9.0`).
- **framework** : vue 3 avec la composition api (`<script setup lang="ts">`).
- **compilation et bundler** : vite 8 pour le serveur de développement et les builds de production.

---

## styles et design (tailwind css v4)

- **utility-first** : privilégier l'usage des classes tailwind css natives. Éviter d'ajouter des règles css personnalisées ad-hoc.
- **configuration des thèmes** : toute personnalisation de thème (couleurs, polices, espacements) doit être déclarée directement dans `src/assets/main.css` sous la directive `@theme` spécifique à tailwind v4.
- **tri des classes** : le tri automatique des classes est géré par `prettier-plugin-tailwindcss`. la feuille de style référente pour le compilateur est configurée dans le fichier `.prettierrc.json` (`tailwindStylesheet`).

---

## linting et qualité du code

- **validation rapide** : utiliser **oxlint** pour une analyse statique instantanée (exécuté via `bun lint:oxlint`).
- **validation complète** : utiliser **eslint** (exécuté via `bun lint:eslint`) pour la validation typescript avancée et les règles spécifiques à vue 3.
- **typescript strict** : la règle `noUncheckedIndexedAccess` est activée dans `tsconfig.app.json` pour prévenir les erreurs d'accès aux index undefined.

---

## workflow git et pre-commit

- **hooks de commit** : un hook de pre-commit géré par **husky** exécute automatiquement `lint-staged` avant chaque validation de commit.
- **lint-staged** : seuls les fichiers modifiés et indexés (`.js`, `.ts`, `.vue`, `.mts`) sont analysés par `oxlint --fix` puis formatés par `prettier --write`.

---

## gestion de la documentation (markdown)

- **règle absolue de casse** : tous les noms de fichiers markdown (`.md`) ainsi que l'intégralité des titres/en-têtes (`#`, `##`, `###`, etc.) à l'intérieur de ces fichiers doivent obligatoirement être rédigés en **minuscules** (pas de majuscules).
- cette règle est documentée dans la configuration du projet ([.editorconfig](file:///C:/Users/Rayhan/Documents/Dev_Pro_Perso/Rashops_Labs/home/.editorconfig) et [.vscode/settings.json](file:///C:/Users/Rayhan/Documents/Dev_Pro_Perso/Rashops_Labs/home/.vscode/settings.json)).
