import { ButtonProps } from './button.type';
import { getClass } from './helper';

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'primary', disabled, children, icon, ...childProps } = props;

  return (
    <button
      disabled={disabled}
      className={getClass({
        'px-4 py-2 duration-300 outline-none rounded flex items-center': true,
        'bg-blue-600 hover:bg-blue-700 text-gray-50': variant === 'primary' && !disabled,
        'bg-green-600 hover:bg-green-700 text-gray-50': variant === 'success' && !disabled,
        'bg-red-600 hover:bg-red-700 text-gray-50': variant === 'danger' && !disabled,
        'bg-yellow-400 hover:bg-yellow-500': variant === 'warning' && !disabled,
        'bg-teal-600 hover:bg-teal-700 text-gray-50': variant === 'info' && !disabled,
        'bg-gray-700 hover:bg-gray-800 text-gray-50': variant === 'dark' && !disabled,
        'bg-white hover:bg-gray-50 border border-gray-200': variant === 'light' && !disabled,
        'bg-gray-500 hover:bg-gray-500 cursor-not-allowed text-gray-50': !!disabled,
      })}
      {...childProps}
    >
      {((icon && icon.position === 'left') || (icon && !icon.position)) && <div className="mr-1.5">{icon.element}</div>}
      {children}
      {icon && icon.position === 'right' && <div className="ml-1.5">{icon.element}</div>}
    </button>
  );
};
