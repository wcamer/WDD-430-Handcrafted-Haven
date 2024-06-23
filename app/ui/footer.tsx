import styles from '@/app/ui/spacer.module.css';

export default function Footer() {
  return (
    <footer
      className={`bottom sticky flex flex-row justify-between rounded-t-lg ${styles.spacer} px-4 py-6`}
    >
      <p>Company Logo</p>
      <p>Handcrafts App 2023</p>
    </footer>
  );
}
