#!/bin/bash
echo "================="
echo "auto git by JOEY"
echo "======= 🤪  ========="
echo "
▶ git add .
"
git add .
git status
echo "
▶ commit message:
" 
read msg

echo "
▶ git commit -m "msg"
"
git commit -m "$msg"

echo "
▶ git push
"
git push