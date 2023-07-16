import { useState } from "react";
import useSound from "use-sound";

const useHoverSoundEffect = (volume: number = 0.5) => {
  const soundUrl = "/sounds/camera-shutter-click.mp3";
  const [isHovering, setIsHovering] = useState(false);
  const [play, { stop }] = useSound(soundUrl, { volume });

  const handleMouseEnter = () => {
    setIsHovering(true);
    play();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    stop();
  };

  return {
    isHovering,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useHoverSoundEffect;
