import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Что такое палиндром?</h1>
        <p className={styles.description}>
          Палиндром — это слово, фраза или число, которые одинаково читаются в обоих направлениях.
        </p>
        <Image
          src="/palindrome-example.jpg"
          alt="Пример палиндрома"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
