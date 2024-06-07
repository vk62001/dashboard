import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ButtonProps {
    className: string;
    title: string;
    icon?: any;
    classIcon?: string;
    onClick: () => void;
    disabled?: boolean;
}

export const Button = ({className, title, icon, classIcon, onClick, disabled=false}:ButtonProps) => {
  return (
    <div className='relative '>
        <button
            className={`mulishRegular relative   w-full p-2 rounded-md justify-center items-center hover:shadow-md hover:shadow-gray-900 ${className}`}
            onClick={onClick}
            disabled={disabled}
        >{icon ? <FontAwesomeIcon icon={icon} className={`top-4 ${classIcon}`} />:null} {' '} {title}</button>
    </div>
  )
}
