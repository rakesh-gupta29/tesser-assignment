import styles from "./UserProfile.module.css";

interface AvatarProps {
  height: number;
  width: number;
}
export default function UserProfileAvatar({ height, width }: AvatarProps) {
  return (
    <div className={styles.avatarContainer}>
      <img
        src="https://images.unsplash.com/photo-1746793329190-e2c6bea16388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
        alt="User Profile Avatar"
        style={{ height, width }}
      />
    </div>
  );
}
