import React from 'react'
import DataTablee from '../components/admin/DataTable'
import { Helmet } from 'react-helmet'
import thumnail from '../icon/thumnail.png';
import logoimg from '../icon/iconlogo.png';
export default function Dashboard() {
  return (
    <main className='bg-gray-900 dark:bg-gray-300'>
        <DataTablee/>
    </main>
  )
}
