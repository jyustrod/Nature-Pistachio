import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
  link?: {
    label: string;
    href: string;
  };
}

export function Card({
  title,
  description,
  image,
  icon,
  link,
}: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {icon && <div className="mb-4 text-3xl">{icon}</div>}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {link && (
          <a
            href={link.href}
            className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center gap-2"
          >
            {link.label}
            <span>→</span>
          </a>
        )}
      </div>
    </div>
  );
}
