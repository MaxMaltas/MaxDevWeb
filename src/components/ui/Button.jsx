import { Link } from "react-router-dom"
import styles from "./Button.module.css"
export default function Button({ variant="primary", accent="neon", to, href, label, children, className="", ...props }) {
  const cls = [styles.btn, styles[variant], styles[accent], className].filter(Boolean).join(" ")
  const content = label || children
  if (to)   return <Link to={to} className={cls} {...props}>{content}</Link>
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...props}>{content}</a>
  return <button className={cls} {...props}>{content}</button>
}
