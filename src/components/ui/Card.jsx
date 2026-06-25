
import clsx from 'clsx';
import './ui.css';

export const Card = ({ children, className }) => {
  return (
    <div className={clsx('card', className)}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => {
  return (
    <div className={clsx('card-header', className)}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={clsx('card-content', className)}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className }) => {
  return (
    <div className={clsx('card-footer', className)}>
      {children}
    </div>
  );
};
