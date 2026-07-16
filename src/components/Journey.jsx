import './Journey.css'

const timelineItems = [
  {
    title: 'Student',
    org: 'Bennett University',
    period: '2023 - 2027',
    points: [
      'B.Tech in Computer Science and Engineering with a 8.34 CGPA.',
      'Relevant coursework includes Operating Systems, DSA, Algorithms, SQL and DBMS.',
      'Solved 150+ DSA problems across multiple platforms.',
    ],
  },
  {
    title: 'Java Intern',
    org: 'Elevated Lab',
    period: '1 Month',
    points: [
  'Developed Java applications using OOP principles.',
  'Built CRUD-based management systems in Java.',
  'Applied DSA to improve code efficiency.',
  'Participated in code reviews and mentor feedback sessions.',
  'Tech: Java, OOP, Git.',
],
  },
]

function Journey() {
  return (
    <section className="journey" id="journey">
      <h2 className="journey__title">The Journey</h2>

      <div className="journey__timeline">
        <div className="journey__line" />

        {timelineItems.map((item, index) => (
          <div
            key={item.title}
            className={`journey__item ${
              index % 2 === 0 ? 'journey__item--left' : 'journey__item--right'
            }`}
          >
            <span className="journey__dot" />
            <div className="journey__card">
              <h3>{item.title}</h3>
              <p className="journey__meta">
                {item.org} | {item.period}
              </p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Journey