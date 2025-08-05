export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: string;
  redirectUrl?: string;
  ctaText?: string;
}
