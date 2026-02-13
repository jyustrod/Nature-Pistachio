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
  const baseStyles = 'font-body font-bold tracking-wider uppercase rounded-full transition-all inline-flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary-600 hover:shadow-lg hover:shadow-primary/20',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-lg',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
  };

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4.5 text-base',
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
