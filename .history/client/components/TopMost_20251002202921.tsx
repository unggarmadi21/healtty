import { Phone, Clock, MapPin } from "lucide-react";

export default function Topmost() {
  return (
    <div className="w-full h-20 bg-white flex items-center justify-between px-4 md:px-8 lg:px-[119px]">
      <div className="flex items-center gap-4 md:gap-8 lg:gap-12">
        {/* Emergency */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Phone className="w-10 h-10 text-secondary stroke-[2]" />
          </div>
          <div className="hidden sm:block">
            <div className="text-secondary text-xs md:text-sm font-medium uppercase tracking-wide">Emergency</div>
            <div className="text-primary text-sm md:text-base">(237) 681-812-255</div>
          </div>
        </div>

        {/* Work Hour */}
        <div className="flex items-center gap-3">
          <Clock className="w-8 h-8 text-secondary stroke-[2]" />
          <div className="hidden sm:block">
            <div className="text-secondary text-xs md:text-sm font-medium uppercase tracking-wide">Work Hour</div>
            <div className="text-primary text-sm md:text-base">09:00 - 20:00 Everyday</div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3">
          <MapPin className="w-8 h-8 text-secondary stroke-[2]" />
          <div className="hidden sm:block">
            <div className="text-secondary text-xs md:text-sm font-medium uppercase tracking-wide">Location</div>
            <div className="text-primary text-sm md:text-base">0123 Some Place</div>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="font-yeseva text-2xl md:text-4xl uppercase">
        <span className="text-secondary">Healt</span>
        <span className="text-primary">ty</span>
      </div>
    </div>
  );
}
