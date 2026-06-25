import { forwardRef } from 'react';
import clsx from 'clsx';
import './ui.css';

export const Input = forwardRef(({ 
  label, 
  error, 
  className, 
  id, 
  ...props 
}, ref) => {
  return (
    <div className={clsx('input-wrapper', className)}>
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}
      <input 
        id={id}
        ref={ref}
        className={clsx('input-field', error && 'border-error')}
        {...props}
      />
      {error && (
        <span className="text-label-sm text-error">{error}</span>
      )}
    </div>
  );
});

Input.displayName = 'Input';
