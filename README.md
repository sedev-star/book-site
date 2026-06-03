# Site personnel du livre

Projet prêt à lancer en local et à publier sur GitHub Pages.

## 1. Ajouter les images

Place tes images dans le dossier :

```text
public/images/
```

Le site attend ces noms :

```text
book1_photo.jpg
brainstorming_1.jpg
brainstorming_2.jpg
brainstorming_3.jpg
brainstorming_4.jpg
writing_1.jpg
writing_2.jpg
writing_3.jpg
writing_4.jpg
book_creation_1.jpg
book_creation_2.jpg
book_creation_3.jpg
book_creation_4.jpg
```

Si tu as plus ou moins de photos, modifie les listes dans :

```text
src/content.ts
```

## 2. Modifier le lien Amazon

Dans `src/content.ts`, remplace :

```ts
export const amazonBookUrl = "https://www.amazon.nl/";
```

par le vrai lien Amazon du livre.

## 3. Lancer en local

```bash
npm install
npm run dev
```

Ouvre ensuite l’adresse affichée dans le terminal, souvent :

```text
http://localhost:5173/
```

## 4. Tester le build

```bash
npm run build
npm run preview
```

## 5. Publier sur GitHub Pages

Crée un nouveau repository GitHub, puis depuis le dossier du projet :

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/TON-COMPTE/TON-REPO.git
git push -u origin main
```

Ensuite dans GitHub :

1. Va dans `Settings`
2. Va dans `Pages`
3. Dans `Build and deployment`, choisis `GitHub Actions`

Le workflow inclus dans `.github/workflows/deploy.yml` publiera automatiquement le site.
