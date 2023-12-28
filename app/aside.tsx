import styles from './design/aside.module.css'

export default function Aside() {
  return (
    <>
      <aside className={styles.sid}>
        <span className={styles.span}>
          <div>
            <p>1</p>
          </div>
          <p>Step 1</p>
          <h2>Your info</h2>
        </span>

        <span>
          <div>
            <p>2</p>
          </div>
          <p>Step 2</p>
          <h2>Select plan</h2>
        </span>

        <span>
          <div>
            <p>3</p>
          </div>
          <p>Step 3</p>
          <h2>Add-ons</h2>
        </span>

        <span>
          <div>
            <p>4</p>
          </div>
          <p>Step 4</p>
          <h2> Summary</h2>
        </span>
      </aside>

      
    </>
  );
}
