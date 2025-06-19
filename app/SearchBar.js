'use client';

import { useState } from "react";
import UsersList from "./UsersList";

export default function SearchBar() {

  const [value, setValue] = useState('')
  //username search
  //dropdown with users
  //select user button
  return (
    <div >
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <UsersList value={value} />
    </div>
  )
}
