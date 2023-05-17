import React from 'react'
import Typed from 'typed.js'
import { Twemoji } from '../Twemoji'

export function TypedBios() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          现实中我叫<b className="font-medium">刘金生</b>。
        </li>
        <li>我是一个学习者，开发者，以及自由言论者。</li>
        <li>
          我住在 <b className="font-medium">中国重庆</b>。
        </li>
        <li>
          我出生在美丽的 <b className="font-medium">重庆忠县</b> 。
        </li>
        <li>
          我学的第一个（但忘记了的）编程语言是<b className="font-medium">Lua</b>。
        </li>
        <li>我专注游戏开发和Web技术</li>
        <li>我主要使用虚幻引擎/NextJs/Strapi/Golang</li>
        <li>我是刘钱妹的丈夫。</li>
        {/* <li>
          I'm a sport-guy. I love
          <span className="ml-1">
            <Twemoji emoji="soccer-ball" />,
            <Twemoji emoji="man-swimming" />,
            <Twemoji emoji="ping-pong" />,
            <Twemoji emoji="volleyball" />
          </span>
          .
        </li> */}
        <li>我爱看美剧。</li>
        <li>
          我喜欢玩视频游戏 <Twemoji emoji="video-game" />
          ，老头环是我最爱。
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
