import { NextResponse } from 'next/server'

export default async function middleware(req) {
  const { token } = req.cookies
  const url = req.url

  if (token && (url.includes('login') || url.includes('register'))) {
    return NextResponse.redirect('http://localhost:3000/dashboard')
  }
}
