import styles from  '../styles/Layout.module.scss'
import Nav from './Nav'
const Layout = ({ children })=>{
	return(
		<>
		<Nav />
		<div className={styles.container}>
		 
		 {children}
	 </div>
		</>
		
	)
}

export default Layout 