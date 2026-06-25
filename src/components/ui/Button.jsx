
import clsx from 'clsx';
import './ui.css';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  icon,
  ...props 
}) => {
  return (
    <button 
      className={clsx(
        'btn',
        `btn-${variant}`,
        className
      )}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
};
