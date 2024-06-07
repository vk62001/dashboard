

interface CardProps {
    children: any;
    className: string;
    title?: string;
    classTitle?: string;
    classHR?: string;
    id?: string | null;
}

export const Card = ({children,  className, title, classTitle='', classHR, id=''}:CardProps) => {
  return (
    <div className={`rounded-2xl p-8 shadow-sm ${ className}`} id={id || undefined}>
        <h1 className={`mulishBold title ${classTitle}`}>{title}</h1>
        <div className={`border-b mt-2 ${classHR}`}/>
        <div className='cardBody'>
            {children}
        </div>
    </div>
  )
}