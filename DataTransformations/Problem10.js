const students = [
    {
      id: 1,
      name: 'Alice',
      scores: [
        { subject: 'Math', score: 90 },
        { subject: 'English', score: 85 },
      ],
    },
    {
      id: 2,
      name: 'Bob',
      scores: [
        { subject: 'Math', score: 75 },
        { subject: 'English', score: 95 },
      ],
    },
    {
      id: 3,
      name: 'Charlie',
      scores: [
        { subject: 'Math', score: 85 },
        { subject: 'English', score: 80 },
      ],
    },
    {
      id: 4,
      name: 'David',
      scores: [
        { subject: 'Math', score: 95 },
        { subject: 'English', score: 90 },
      ],
    },
  ];

  
  const expectedOutput = ['David', 'Alice', 'Charlie']

  function getTopStudents(students){

    let result

    let studentsScore = students.reduce((acc, item, i, arr) => {
        acc.push({name: item.name, averageScore: calculateAvgScore(item.scores), id: item.id})
    }, [])

    result = studentsScore.sort((a,b) => b.averageScore - a.averageScore).map(item => item.name)

    if(studentsScore.length > 3){
        result.splice(0, 3)
    }

    return result

  }

  function calculateAvgScore(scores){
    return scores.reduce((acc, item, i, arr) => acc+= item.score, 0) / 2
  }