import { NextRequest } from 'next/server';

export function requireAdmin(request: NextRequest): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  const header = request.headers.get('x-admin-secret');
  return header === secret;
}
