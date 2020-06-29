import React from 'react'


// const url = `Request URL: https://www.instagram.com/graphql/query/?query_hash=eddbde960fed6bde675388aac39a3657&variables=%7B%22id%22%3A%227638698%22%2C%22first%22%3A12%2C%22after%22%3A%22QVFEVlhkMFc3UWJlamxzN3JoVDJQOHVSZGxIS191c05yMVRGSHdzNVB1NlkwTldiNjlSWXZGblhUTVVKd09jeDdFMXF4czl3ekxEMWJZOGhZNVhxUm9leg%3D%3D%22%7D`
// const url = `Request URL: https://www.instagram.com/graphql/query/?query_hash=eddbde960fed6bde675388aac39a3657&variables={"id":"227638698", "first":4}`;

// async function getPosts() {
//   const data = await fetch(url).then(res => res.json())
//   console.log(data)
//   return data
// }

// exports.handler = async function (event, context, callback) {
//   const posts = await getPosts()
//   callback(null, {
//     statusCode: 200,
//     "headers": {
//       "Content-Type": "application/json",
//     },
//   })
// }


export default function instagram() {
  return (
    <div>
      instagram
    </div>
  )
}
