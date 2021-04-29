import Head from 'next/head'
import styles from './style.module.css'
import Link from 'next/link';
import Image from 'next/image'
import {useState} from 'react'

export default function Home() {
  const [toggle,setToggle]  = useState(true)
  
  return (
    <div className={styles.body}>
      <header>
        <span>Abdullah Fabrica</span>
        <div className={styles.leftBar}>
          <span>About Us</span>
          <span>Mission & Vision</span>
          <span>Our Partners</span>
          <span>Testimonials</span>
        </div>
      </header>
    </div>
  )
}
