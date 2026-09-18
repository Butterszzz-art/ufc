#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Activating Supabase backend..."
cp package.supabase.json package.json
cp index.supabase.html index.html

npm install

echo ""
echo "Done. Next steps:"
echo "1. Add SUPABASE_URL and SUPABASE_ANON_KEY to .env"
echo "2. Run supabase/schema.sql in your Supabase SQL editor"
echo "3. npm start"
echo "4. Open http://localhost:4173"
