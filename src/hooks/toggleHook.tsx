
import { useState } from 'react'

const ToggleHook = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleFunction = (): void => {
    setToggle(!toggle);
  }
  return { toggle, toggleFunction };
}

export default ToggleHook;