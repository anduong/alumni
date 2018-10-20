import React from 'react'
import { Link, withRouteData } from 'react-static'

const Home = withRouteData(({ alumni: items }) => {
  const alumni = Array(40)
    .fill(null)
    .map(_ => items[Math.floor(Math.random() * items.length)])
  const half = Math.floor(alumni.length / 2)
  const firstHalf = alumni.slice(0, half)
  const secondHalf = alumni.slice(half, alumni.length)
  console.log(alumni)

  return (
    <div className="min-h-screen bg-orange-lightest pt-16 pb-24 font-serif">
      <div className="container max-w-md">
        <h1 className="text-5xl font-medium text-center mb-8">Alumni</h1>
        <p className="italic text-center mb-16">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </p>
        <div className="row flex">
          <div className="col w-1/2">
            <ul className="list-reset">
              {firstHalf.map((e, i) => (
                <li key={i} className="my-1 text-center">
                  <Link
                    to={e.slug}
                    className="text-lg text-blue hover:underline"
                  >
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col w-1/2">
            <ul className="list-reset">
              {secondHalf.map((e, i) => (
                <li key={i} className="my-1 text-center">
                  <Link
                    to={e.slug}
                    className="text-lg text-blue hover:underline"
                  >
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Home
