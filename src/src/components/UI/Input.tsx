

interface InputProps {
    placeholder: string;
    className: string;
    value: string | number | readonly string[] | undefined;    
    type?: string;
    error?: boolean;
    messageError?: string;
    onChange: (value: string) => void;
    onClick?: () => void;
    maxLength?: number;
    minLength?: number;
    disabled?: boolean;
    required?: boolean;
    name?: string;
    
}


export const Input = (
    { 
      placeholder, 
      className, 
      value, 
      type="text", 
      messageError,  
      onChange, 
      onClick,
      maxLength=100, 
      minLength=2,
      disabled=false,
      required=true,
      name="",
    }: InputProps
    ) => {
      
  return (
    <>
      <input 
          placeholder={placeholder}
          className={`bg-bigStone-800 border border-bigStone-900 w-full pl-8 rounded-md h-10 placeholder:text-gray-400 placeholder:text-sm focus:border-bigStone-900 active:border-bigStone-900 outline-offset outline-bigStone-900 ${className}`}
          value={value}
          onChange={e=>onChange(e.target.value)}
          type={type}
          maxLength={maxLength}
          minLength={minLength}
          disabled = {disabled}
          onClick={onClick}
          required={required}
          name={name}
      />
      {messageError?.length ?
        <p className='text-xs w-full mt-1' style={{color: '#ff5e60'}}>{messageError}</p>
        :null}
    </>
  )
}
