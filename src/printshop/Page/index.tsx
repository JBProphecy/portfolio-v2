
import styles from "./index.module.css"

export function Page({ children }: { children?: React.ReactNode }) {
  return (
    <div className={styles.page}>
      {children}
    </div>
  )
}
