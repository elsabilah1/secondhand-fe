/* eslint-disable no-undef */
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const path = req.nextUrl.pathname
  const dashboardRoutes = path.startsWith('/dashboard')
  const profileRoutes = path.startsWith('/profile')
  const notifRoutes = path.startsWith('/notification')
  const response = NextResponse.next()

  const token = req.cookies.get('token')

  if (dashboardRoutes || profileRoutes || notifRoutes) {
    if (!token) {
      return NextResponse.redirect('http://localhost:3000/login')
    }
  }

  if (path === '/login' || path === '/register') {
    if (token) {
      return NextResponse.redirect('http://localhost:3000/dashboard')
    }
  }

  return response
}
