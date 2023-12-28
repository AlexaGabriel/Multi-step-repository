import  style from './design/stepone.module.css';

export default function Stepone() {
  return (
    <>
      <div className={style.total}>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form action="">
          <span>Name</span>
          <input type="text" placeholder="Stephen King" />
          <span>Email Address</span>
          <input type="text" placeholder="stephenking@lorem.com" />
          <span>Phone Number</span>
          <input type="text" placeholder="+1 234 567 890" />
          <input type="button" value="Next Step" />
        </form>
      </div>
    </>
  );
}
