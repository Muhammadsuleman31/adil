import path from 'path';
import fs from 'fs';

export async function GET() {
  const dataFilePath = path.join(process.cwd(), 'datap.json');
  
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return new Response(data, { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to read data' }), { status: 500 });
  }
}
