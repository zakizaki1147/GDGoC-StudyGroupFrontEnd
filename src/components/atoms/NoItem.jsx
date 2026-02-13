import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function NoItem() {
  return (
    <ul className='flex flex-col justify-center items-center gap-2 py-8 text-gray-500'>
      <FaSearch />
      <h3>Tidak ada tugas yang tercatat.</h3>
    </ul>
  )
}
