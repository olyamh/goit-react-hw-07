import clsx from 'clsx';
import s from './Notification.module.css'

const Notification =() => {
    return (
<div>
    <p className={clsx(s.notification)}>Your phone book is empty. Please add your first contact!</p>
</div>
    )
}
export default Notification