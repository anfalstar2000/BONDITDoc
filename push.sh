#!/bin/bash

# Script to commit and push changes to GitHub

echo "🔄 Adding all changes..."
git add .

echo ""
echo "📝 Enter commit message:"
read commit_message

if [ -z "$commit_message" ]; then
    commit_message="Update project files"
fi

echo ""
echo "💾 Committing changes..."
git commit -m "$commit_message"

echo ""
echo "🚀 Pushing to GitHub..."
git push

echo ""
echo "✅ Done! Changes have been pushed to GitHub."
