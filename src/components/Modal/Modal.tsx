import { createPortal } from "react-dom"
import {useRef, useEffect} from "react"

interface IModalProps {
  children: React.ReactNode
  opened: boolean
}

const Modal: React.FC<IModalProps> = ({ children, opened }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const modalEl = document.getElementById("modal") as HTMLElement


  useEffect(() => {
    if (dialogRef.current) {
      if (opened) {
        dialogRef.current.showModal()
        modalEl.style.display = 'block'
      } else {
        dialogRef.current.close()
        modalEl.style.display = 'none'
      }
    }
  }, [opened])

  return createPortal (
    // аккуратно с размерами w-1/3, h-1/2. Они нужны для модалки при восстановлении пароля. Если надо менять - не халтурь
    <dialog ref={dialogRef} className="w-1/3 p-5 rounded-lg text-center flex flex-col justify-between h-1/2">{children}</dialog>,
    modalEl
  )
}

export default Modal