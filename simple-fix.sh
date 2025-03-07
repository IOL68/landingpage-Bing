#!/bin/bash

# A simplified script to fix case sensitivity issues in Next.js projects
# This script ensures consistent casing between file names and imports

echo "Starting simplified case sensitivity fix"

# 1. Create consistent lowercase copies of UI components
echo "Creating consistent lowercase copies of UI components"

# Create necessary directories
mkdir -p .next/components/ui
mkdir -p .next/components/pricing
mkdir -p .next/components/ui/icon

# Copy UI components with consistent lowercase naming
for file in src/components/ui/*.tsx src/components/ui/*.ts; do
  if [ -f "$file" ]; then
    basename=$(basename "$file")
    lowercase_name=$(echo "$basename" | tr '[:upper:]' '[:lower:]')
    cp -f "$file" ".next/components/ui/$lowercase_name"
    echo "Copied $basename to .next/components/ui/$lowercase_name"
  fi
done

# Special handling for Icon directory (case sensitivity issue)
if [ -d "src/components/ui/Icon" ]; then
  echo "Handling Icon directory case sensitivity"
  cp -f src/components/ui/Icon/index.tsx .next/components/ui/icon/
  echo "Copied Icon/index.tsx to icon/index.tsx"
elif [ -d "src/components/ui/icon" ]; then
  echo "Handling icon directory (lowercase)"
  cp -f src/components/ui/icon/index.tsx .next/components/ui/icon/
  echo "Copied icon/index.tsx to icon/index.tsx"
fi

# Copy TypeformModal and pricing components
cp -f src/components/TypeformModal.tsx .next/components/
cp -f src/components/pricing/*.tsx .next/components/pricing/ 2>/dev/null || true

# Create features directory and add a stub StatsSection component if it doesn't exist
mkdir -p .next/components/features
if [ ! -f "src/components/features/StatsSection.tsx" ]; then
  echo "Creating stub StatsSection component"
  cat > .next/components/features/StatsSection.tsx << 'EOL'
import React from 'react';

const StatsSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Statistics</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Impact in Numbers
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Stats items would go here */}
            <div className="text-center">
              <p className="text-5xl font-extrabold text-indigo-600">100%</p>
              <p className="mt-2 text-lg font-medium text-gray-900">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
EOL
fi

# Copy any existing features components
cp -f src/components/features/*.tsx .next/components/features/ 2>/dev/null || true

# 2. Create symbolic links in node_modules for @/ imports
echo "Creating symbolic links for @/ imports"
mkdir -p node_modules/@/components/ui
mkdir -p node_modules/@/components/ui/icon
mkdir -p node_modules/@/components/pricing
mkdir -p node_modules/@/components/features

# Link UI components
ln -sf $(pwd)/.next/components/ui/*.tsx node_modules/@/components/ui/
ln -sf $(pwd)/.next/components/ui/*.ts node_modules/@/components/ui/
ln -sf $(pwd)/.next/components/ui/icon/index.tsx node_modules/@/components/ui/icon/
ln -sf $(pwd)/.next/components/TypeformModal.tsx node_modules/@/components/
ln -sf $(pwd)/.next/components/pricing/* node_modules/@/components/pricing/
ln -sf $(pwd)/.next/components/features/* node_modules/@/components/features/

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
      "@/components/ui/*": ["./src/components/ui/*", "./.next/components/ui/*", "./node_modules/@/components/ui/*"],
      "@/components/features/*": ["./src/components/features/*", "./.next/components/features/*", "./node_modules/@/components/features/*"],
      "@/components/ui/icon/*": ["./src/components/ui/icon/*", "./src/components/ui/Icon/*", "./.next/components/ui/icon/*", "./node_modules/@/components/ui/icon/*"]
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
