import styles from '@/app/ui/spacer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className={`bottom sticky flex flex-row items-center justify-between  ${styles.spacer} px-4 py-6`}
    >
        <Image
        src="/images/icon.png"
        width={50}
        height={50}
        alt="Company Icon"
      />

      <p className='text-white'>&copy; 2024 Handcrafted Haven Developed by: Team Echidna</p>
     
    </footer>
  );
}
