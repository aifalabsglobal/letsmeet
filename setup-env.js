const fs = require('fs');
const path = require('path');

const content = `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y2FyZWZ1bC1mbGVhLTI5LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_M4rOxSaGVUac9a504c9NlUhAADvEBD2gLJO4A68n18

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=8bcpc4y5emtm
STREAM_SECRET_KEY=5h8nyu5xqm7r75nrzgrn7bsadxmtgrz2gwjsayw7bczj5jev8wxqnn996g9pa7gj
`;

try {
    fs.writeFileSync(path.join(process.cwd(), '.env'), content);
    fs.writeFileSync(path.join(process.cwd(), '.env.local'), content);
    console.log('Successfully wrote .env and .env.local');
} catch (err) {
    console.error('Error writing files:', err);
    process.exit(1);
}
