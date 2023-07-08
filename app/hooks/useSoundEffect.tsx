import { useEffect, useState } from "react";
import useSound from "use-sound";

const useSoundEffect = (soundFile: any) => {
  const [play, { stop }] = useSound(soundFile);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      play();
    }
    return () => {
      stop();
    };
  }, [isPlaying, play, stop]);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
  };

  return toggleSound;
};

export default useSoundEffect;
