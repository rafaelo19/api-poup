const bcrypt = require('bcrypt');
const saltRounds = 10;

export async function encrypt(data: string): Promise<string> {
  return await bcrypt.hash(data, saltRounds);
}

export async function decrypt(data: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(data, hash);
}
