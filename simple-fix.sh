#!/bin/bash

# A simplified script to fix case sensitivity issues in Next.js projects
# This script ensures consistent casing between file names and imports

echo "Starting simplified case sensitivity fix"

# 1. Create consistent lowercase copies of UI components
echo "Creating consistent lowercase copies of UI components"

# Create necessary directories
mkdir -p .next/components/ui
mkdir -p .next/components/pricing

# Copy UI components with consistent lowercase naming
for file in src/components/ui/*.tsx src/components/ui/*.ts; do
  if [ -f "$file" ]; then
    basename=$(basename "$file")
    lowercase_name=$(echo "$basename" | tr '[:upper:]' '[:lower:]')
    cp -f "$file" ".next/components/ui/$lowercase_name"
    echo "Copied $basename to .next/components/ui/$lowercase_name"
  fi
done

# Copy TypeformModal and pricing components
cp -f src/components/TypeformModal.tsx .next/components/
cp -f src/components/pricing/*.tsx .next/components/pricing/ 2>/dev/null || true

# 2. Create symbolic links in node_modules for @/ imports
echo "Creating symbolic links for @/ imports"
mkdir -p node_modules/@/components/ui
mkdir -p node_modules/@/components/pricing

# Link UI components
ln -sf $(pwd)/.next/components/ui/* node_modules/@/components/ui/
ln -sf $(pwd)/.next/components/TypeformModal.tsx node_modules/@/components/
ln -sf $(pwd)/.next/components/pricing/* node_modules/@/components/pricing/

# 3. Update tsconfig.json to include multiple path options
echo "Updating tsconfig.json with additional module resolution paths"
if [ -f "tsconfig.json" ]; then
  # Backup original tsconfig.json
  cp tsconfig.json tsconfig.json.bak
  
  # Create a new tsconfig.json with updated paths
  cat > tsconfig.json.new << EOL
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*", "./*"],
      "@/components/*": ["./src/components/*", "./.next/components/*", "./node_modules/@/components/*"],
      "@/components/ui/*": ["./src/components/ui/*", "./.next/components/ui/*", "./node_modules/@/components/ui/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOL

  # Replace the original tsconfig.json with our new version
  mv tsconfig.json.new tsconfig.json
  echo "Updated tsconfig.json with additional module resolution paths"
fi

echo "Completed simplified case sensitivity fix"
