import React, { useState, useEffect } from 'react'
const [articles, setArticles] = useState([])

useEffect(() => {
  fetch('http://localhost:1337/articles')
    .then((response) => response.json())
    .then((data) => setArticles(data))
}, [])

console.log('FETCH..:', articles)
