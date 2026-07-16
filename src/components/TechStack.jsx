import './TechStack.css'
import {
  SiPython, SiCplusplus, SiJavascript, SiMysql,
  SiReact,
  SiNodedotjs,
  SiDocker, SiKubernetes,
  SiGit, SiGithub, SiIntellijidea,
  SiUnrealengine, SiUnity,
} from 'react-icons/si'
import { FaJava, FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

const categories = [
  {
    name: 'Languages',
    items: [
      { icon: <SiPython color="#3776AB" />, label: 'Python' },
      { icon: <SiCplusplus color="#00599C" />, label: 'C++' },
      { icon: <SiJavascript color="#F7DF1E" />, label: 'JavaScript' },
      { icon: <FaDatabase color="#4479A1" />, label: 'SQL' },
    ],
  },
  {
    name: 'Frontend',
    items: [
      { icon: <SiReact color="#61DAFB" />, label: 'React.js' },
      { icon: <FaHtml5 color="#E34F26" />, label: 'HTML' },
      { icon: <FaCss3Alt color="#1572B6" />, label: 'CSS' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { icon: <SiNodedotjs color="#339933" />, label: 'Node.js' },
      { icon: <FaJava color="#f89820" />, label: 'Java' },
    ],
  },
  {
    name: 'Databases',
    items: [
      { icon: <SiMysql color="#4479A1" />, label: 'MySQL' },
    ],
  },
  {
    name: 'Cloud',
    items: [
      { icon: <SiDocker color="#2496ED" />, label: 'Docker' },
      { icon: <SiKubernetes color="#326CE5" />, label: 'Kubernetes' },
    ],
  },
  {
    name: 'Tools',
    items: [
      { icon: <SiGit color="#F05032" />, label: 'Git' },
      { icon: <SiGithub color="#ffffff" />, label: 'GitHub' },

      { icon: <VscVscode color="#007ACC" />, label: 'VS Code' },
      { icon: <SiIntellijidea color="#ffffff" />, label: 'IntelliJ' },
      { icon: <SiUnrealengine color="#ffffff" />, label: 'UE5' },
      { icon: <SiUnity color="#ffffff" />, label: 'Unity' },
    ],
  },
]

function TechStack() {
  return (
    <section className="techstack" id="techstack">
      <h2 className="techstack__title">Tech Stack</h2>

      <div className="techstack__grid">
        {categories.map((category) => (
          <div key={category.name} className="techstack__category">
            <h3>{category.name}</h3>
            <div className="techstack__items">
              {category.items.map((item) => (
                <div key={item.label} className="techstack__item">
                  <span className="techstack__icon">{item.icon}</span>
                  <span className="techstack__label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack