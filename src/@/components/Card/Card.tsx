import clsx from 'clsx';

export const Card = ({ inverse, children, centered }: CardProps) => {
  return (
    <div
      className={clsx('card', {
        inverse: inverse,
        centered: centered,
        'clr-white-bg': !inverse,
      })}
    >
      {children}
    </div>
  );
};

type CardProps = {
  inverse?: boolean;
  centered?: boolean;
  children: React.ReactNode;
};
