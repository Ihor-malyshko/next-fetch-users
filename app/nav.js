import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'

export default function Nav() {
  return (
    <div style={{ margin: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/dashboard">Dashboard</Link></li>
      </ul>
      <SearchBar />

    </div>
  )
}
