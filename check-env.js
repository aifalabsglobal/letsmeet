const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

function checkFile(filename) {
    const filePath = path.join(process.cwd(), filename);
    if (!fs.existsSync(filePath)) {
        console.log(`${filename} does not exist.`);
        return;
    }

    console.log(`--- Analyzing ${filename} ---`);
    const content = fs.readFileSync(filePath, 'utf8');
    const config = dotenv.parse(content);

    Object.keys(config).forEach(key => {
        const value = config[key];
        const maskedValue = value ? `${value.substring(0, 5)}...${value.substring(value.length - 3)}` : '(empty)';
        console.log(`Found key: ${key} = ${maskedValue}`);
    });

    // Check for specific expected keys
    if (!config.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) console.log('ERROR: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is missing');
    if (!config.CLERK_SECRET_KEY) console.log('ERROR: CLERK_SECRET_KEY is missing');

    // Check for potential typos/wrong names
    if (config.STREAM_API_SECRET) console.log('WARNING: Found STREAM_API_SECRET. Did you mean STREAM_SECRET_KEY?');
}

console.log('Starting detailed check...');
checkFile('.env.local');
checkFile('.env');
