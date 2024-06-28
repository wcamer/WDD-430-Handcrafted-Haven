import styles from '@/app/ui/spacer.module.css';

export default function Footer() {
  return (
    <footer
      className={`bottom sticky flex flex-row justify-between rounded-t-lg ${styles.spacer} px-4 py-6`}
    >
      <p>Company Logo</p>
      <p>&copy; 2024 Handcrafted Haven Developed by:Team Echidna</p>
     
    </footer>
  );
}
