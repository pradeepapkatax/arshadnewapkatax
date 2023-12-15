import styles from './page.module.css'
import { getDictionary } from '../../../getI18n';

export default async function Home({params}) {
  const lang =await getDictionary(params.langI18)
  // console.log(params);
  return (
    <main className={styles.main}>
    <p>  {lang?.SRK?.bio}</p>
    </main>
  )
}
