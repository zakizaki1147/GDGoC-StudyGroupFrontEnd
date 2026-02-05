import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function NoItem() {
  return (
    <ul className='no-item'>
      <FaSearch />
      <h3>Tidak ada tugas yang tercatat.</h3>
    </ul>
  )
}
