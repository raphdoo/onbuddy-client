import React, {useState, useEffect} from 'react';
import { FaTimes } from 'react-icons/fa';

interface ErrorProps {
  errors: Record<string, any>[]
}

const Error: React.FC<ErrorProps> = ({errors}) => {

  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setVisible(true)
    
    if(errors) {
      const timeout = setTimeout(() => {
        setVisible(false)
      }, 5000)

      return () => clearTimeout(timeout);
    }
  }, [errors])

  return (
    <div className="">
      <ul className=''>
        {visible && errors && errors.map((error, index) => (
          <div className='flex'>
            <FaTimes size={25} color="red" />
            <li style={{ color: 'red', marginLeft:"15px"}} className='' key={index}>{error.message}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Error;