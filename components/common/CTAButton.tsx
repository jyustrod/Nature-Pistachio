interface CTAButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export function CTAButton({
  label,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
}: CTAButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-colors inline-block text-center';

  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-earth-600 text-white hover:bg-earth-700',
    outline: 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {label}
    </a>
  );
}
