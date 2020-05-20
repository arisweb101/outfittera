set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://arisweb101:arya052117@github.com/arisweb101/outfittera.git master:gh-pages

cd -

