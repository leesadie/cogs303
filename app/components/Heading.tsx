'use client';

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center
}) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <div className="text-2xl text-neutral-900 font-semibold">
                {title}
            </div>
            <div className=" text-neutral-500 mt-2">
                {subtitle}
            </div>
        </div>
    );
}

export default Heading;