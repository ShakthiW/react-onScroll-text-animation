import styles from './page.module.css'
import Paragraph from './components/Paragraph'
import Word from './components/Word'
import Charactor from './components/Charactor'

const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

export default function Home() {
  return (
    <main>
      <div style={{height: "100vh"}}></div>
      <Paragraph value={paragraph} />
      <div style={{height: "100vh"}}></div>
      <Word value={paragraph}/>
      <div style={{height: "100vh"}}></div>
      <Charactor value={paragraph} />
      <div style={{height: "100vh"}}></div>
    </main>
  )
}
