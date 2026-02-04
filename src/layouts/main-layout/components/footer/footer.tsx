import Galaxy from "@/components/galaxy/galaxy";

export function Footer() {
  return (
    <div className="relative w-full h-30">
      <Galaxy
        mouseRepulsion
        mouseInteraction
        density={1}
        glowIntensity={0.3}
        saturation={0}
        hueShift={140}
        twinkleIntensity={0.3}
        rotationSpeed={0.1}
        repulsionStrength={2}
        autoCenterRepulsion={0}
        starSpeed={0.5}
        speed={1}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-black dark:text-white/50">
          © {new Date().getFullYear()} Lê Trần Tấn Tài (DevT). Bảo lưu mọi
          quyền.
        </p>
      </div>
    </div>
  );
}
