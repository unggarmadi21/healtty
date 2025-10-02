interface SubHeadProps {
  title: string;
  breadcrumb: string;
}

export default function SubHead({ title, breadcrumb }: SubHeadProps) {
  return (
    <div className="relative w-full h-48 md:h-60 lg:h-[250px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1920&h=400&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1366 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.5" cx="1366" cy="250" r="128" fill="hsl(var(--accent))"/>
          <circle opacity="0.3" cx="0.5" cy="0.5" r="119.5" fill="hsl(var(--secondary))"/>
        </svg>
      </div>

      {/* Color Bars */}
      <div className="absolute bottom-0 left-0 right-0 h-2 flex">
        <div className="w-[22%] bg-accent"></div>
        <div className="w-[61%] bg-primary"></div>
        <div className="w-[17%] bg-secondary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full px-4 md:px-8 lg:px-[187px] flex flex-col justify-center">
        <p className="text-primary text-base md:text-lg mb-1 md:mb-2">{breadcrumb}</p>
        <h1 className="font-yeseva text-3xl md:text-4xl lg:text-5xl text-primary">{title}</h1>
      </div>
    </div>
  );
}
