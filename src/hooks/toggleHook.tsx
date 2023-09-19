
import { useState } from 'react'

const ToggleHook = () => {
  const [toggle, setToggle] = useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
  }
  return {toggle, toggleFunction};
}

export default ToggleHook;