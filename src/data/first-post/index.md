---
title: "FIRST POST FIRST POST FIRST POST FIRST POST FIRST POST "
createdAt: "2021-05-01"
updateAt: "2021-05-02"
thumbnail: "./18.jpeg"
description: "このサイトはGatsby と TailwindCSS を使用してつくています。このサイトはGatsby と TailwindCSS を使用してつくています。"
tags: ["HTML"]
category: "JavaScript"
---

## HTML とは

```html:title=index.html
<div>
  <p>Hello Gatsbyjs!!!!!</p>
</div>
```

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">HTML and CSS cheat sheet 📃👇 <a href="https://t.co/cO5fqKxoXs">pic.twitter.com/cO5fqKxoXs</a></p>&mdash; Pratham (@Prathkum) <a href="https://twitter.com/Prathkum/status/1385640752978354183?ref_src=twsrc%5Etfw">April 23, 2021</a></blockquote>

<a className="bg-gray-800" href="https://google.com">hello</a>  
[hello](https://google.com)

<div class="hogehoge">
  <p>World</p>
</div>

## Gatsbyjs

![Gatsbyjs](./icon.png)

```jsx:title=gatsby
const data = [
  {id: 1, title: "a"},
  {id: 2, title: "b"},
  {id: 3, title: "c"},
]

const IndexPage = () => {
  <ul>
    {data.map((item) => {
      return (
        <li key={item.id}>
         {item.title}
        </li>
      )
    })}
  </ul>
}

export default IndexPage
```

## HTML

```HTML
<h1>Hello Gatsby</h1>
```

## JS

```js:title=app.js
console.log("Hello Gatsby")
```
