const sortLeaders = (leaderTitle, data, locations) => {
  let leaders = []
  data.allWordpressWpLeader.edges.map(({ node }) =>
    node.acf.all_locations && node.acf.title.trim() === leaderTitle
      ? node.acf.all_locations.map(({ post_title }) =>
          post_title === locations.title ? leaders.push(node) : null
        )
      : null
  )
  return leaders.sort(function(a, b) {
    var lastName1 = a.title
      .trim()
      .split(' ')
      .pop()
    var lastName2 = b.title
      .trim()
      .split(' ')
      .pop()

    if (lastName1 < lastName2) {
      return -1
    }
    if (lastName1 > lastName2) {
      return 1
    }
    return 0
  })
}

export default sortLeaders
