import { useState } from "react";
import styles from "./NotificationTile.module.css";
import CloseIcon from "../icons/CloseIcon";
import InfoIcon from "../icons/InfoIcon";

interface NotificationTileProps {
  text: string;
  onClose?: () => void;
}

export default function NotificationTile({
  text,
  onClose,
}: NotificationTileProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.wrapper}>
      <InfoIcon style={{ color: "var(--primary-brand-hover)" }} />
      <p className={styles.text}>{text}</p>
      <button className={styles.closeButton} onClick={handleClose}>
        <CloseIcon height={20} width={20} />
      </button>
    </div>
  );
}
