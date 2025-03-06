#!/bin/bash

# Lista de archivos que contienen variant="medium"
files=(
  "src/components/sections/ResearcherFAQ/index.tsx"
  "src/components/sections/ResearcherPricing/PricingCard.tsx"
  "src/components/sections/ResearcherPricing/index.tsx"
  "src/components/sections/ResearcherFinalCTA/index.tsx"
  "src/components/sections/ResearcherCallToAction/index.tsx"
  "src/components/sections/ResearchersSolutions/index.tsx"
  "src/components/sections/ResearcherTestimonials/index.tsx"
)

# Reemplazar variant="medium" por variant="large" en cada archivo
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Procesando $file"
    sed -i '' 's/variant="medium"/variant="large"/g' "$file"
  else
    echo "El archivo $file no existe"
  fi
done

echo "Proceso completado"
