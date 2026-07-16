import { useEffect, useState } from 'react'
import './ProblemSolving.css'

const LEETCODE_USERNAME = 'ujwal2749'
const API_URL = 'https://leetcode-stats.tashif.codes/ujwal2749/stats'

function ProblemSolving() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(API_URL)

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const data = await response.json()

        setStats(data.data)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const difficultyStats = stats
    ? [
        {
          label: 'Easy',
          solved: stats.byDifficulty.easy,
          color: '#2dd4bf',
        },
        {
          label: 'Medium',
          solved: stats.byDifficulty.medium,
          color: '#f5b942',
        },
        {
          label: 'Hard',
          solved: stats.byDifficulty.hard,
          color: '#f43f5e',
        },
      ]
    : []

  const maxSolved = Math.max(
    ...difficultyStats.map((item) => item.solved),
    1
  )

  return (
    <section className="problem-solving" id="problem-solving">
      <h2 className="problem-solving__title">
        Problem Solving
      </h2>

      <div className="problem-solving__card">
        <div className="problem-solving__left">
          <div className="problem-solving__icon">
            {'</>'}
          </div>

          <h3 className="problem-solving__count">
            {loading
              ? '...'
              : error
              ? '--'
              : `${stats.totalSolved}+`}
          </h3>

          <p className="problem-solving__label">
            Problems Solved
          </p>

          <p className="problem-solving__desc">
            Continuous learning through algorithmic
            challenges and data structures.
            Consistent practice on LeetCode focusing
            on Data Structures, Algorithms,
            and System Design.
          </p>

          <p className="problem-solving__cached">
            {loading
              ? 'Loading live stats...'
              : error
              ? 'Could not load LeetCode stats.'
              : 'Live profile stats.'}
          </p>

          <a
            href="https://leetcode.com/u/ujwal2749/"
            target="_blank"
            rel="noopener noreferrer"
            className="problem-solving__profile-btn"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <path d="M15 3h6v6" />
              <path d="M10 14L21 3" />
            </svg>

            View Profile
          </a>
        </div>

        <div className="problem-solving__right">
          {loading && <p>Loading...</p>}

          {!loading &&
            !error &&
            difficultyStats.map((stat) => (
              <div
                key={stat.label}
                className="problem-solving__stat"
              >
                <div className="problem-solving__stat-header">
                  <span
                    style={{
                      color: stat.color,
                    }}
                  >
                    {stat.label}
                  </span>

                  <span className="problem-solving__stat-count">
                    <strong
                      style={{
                        color: stat.color,
                      }}
                    >
                      {stat.solved}
                    </strong>{' '}
                    solved
                  </span>
                </div>

                <div className="problem-solving__bar-track">
                  <div
                    className="problem-solving__bar-fill"
                    style={{
                      width: `${
                        (stat.solved / maxSolved) *
                        100
                      }%`,
                      background: stat.color,
                    }}
                  />
                </div>
              </div>
            ))}

          {!loading && error && (
            <p>
              Failed to load LeetCode statistics.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProblemSolving