import { X } from 'lucide-react';

type VideoPlatform = 'youtube' | 'vimeo';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  platform?: VideoPlatform;
}

export default function VideoModal({ 
  isOpen, 
  onClose, 
  videoId, 
  platform = 'youtube' 
}: VideoModalProps) {
  if (!isOpen) return null;

  const getVideoUrl = () => {
    switch (platform) {
      case 'vimeo':
        return `https://player.vimeo.com/video/${videoId.split('/')[0]}?h=${videoId.split('/')[1] || ''}`;
      case 'youtube':
      default:
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-4xl mx-4">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-primary-green transition-colors"
        >
          <X size={24} />
        </button>

        <div className="relative pt-[56.25%] w-full bg-black rounded-lg overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={getVideoUrl()}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}