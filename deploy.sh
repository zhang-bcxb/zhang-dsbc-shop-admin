#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'dsbc.itzhang520.top' > CNAME

git init
git add -A
git commit -m 'deploy'

# 发布到 gh-pages 分支
# https://github.com/zhang-bcxb/zhang-dsbc-shop-admin.git
git push -f git@github.com:zhang-bcxb/zhang-dsbc-shop-admin.git master:dist

cd -
