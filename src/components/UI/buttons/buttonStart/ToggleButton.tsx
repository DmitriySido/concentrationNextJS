import Link from "next/link"
import './ToggleButton.scss'

interface IToggleButtonProps{
  path: string,
  tilte: string,
  buttonClass: string,
}

const ToggleButton = ({path, tilte, buttonClass}: IToggleButtonProps) => {
  return <Link className={`${buttonClass} toggleButton`} href={path}>{tilte}</Link>
}

export default ToggleButton