import { useState } from 'react'
import { Header } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

// authors {avatar_url: String, name: String, role: String}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/C4D03AQEILot3OHU8hw/profile-displayphoto-shrink_100_100/0/1648603447477?e=1715817600&v=beta&t=N66ZVUEdpit4uoCfrl8MxWxk7he42MWT3yx5TR3_Cs4',
      name: "Lucas Moraes",
      role: "Web Dev",
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/C4D03AQEILot3OHU8hw/profile-displayphoto-shrink_100_100/0/1648603447477?e=1715817600&v=beta&t=N66ZVUEdpit4uoCfrl8MxWxk7he42MWT3yx5TR3_Cs4',
      name: "Lucas Moraes",
      role: "Web Dev",
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-15 11:26:52')
  }
]

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>

    </div>
  )
}