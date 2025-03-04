import { createPortal } from 'react-dom'
import { useRef, useEffect, ReactNode } from 'react'

interface IModalProps {
	children: ReactNode
	opened: boolean
}

const Modal: React.FC<IModalProps> = ({ children, opened }) => {
	const dialogRef = useRef<HTMLDialogElement | null>(null)
	const modalEl = document.getElementById('modal') as HTMLElement

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

	return createPortal(
		<dialog
			ref={dialogRef}
			className='w-[533px] h-[768px] p-[22px] rounded-[10px] flex flex-col justify-between items-center'>
			{children}
		</dialog>,
		modalEl
	)
}

export default Modal
