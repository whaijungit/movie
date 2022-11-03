const awit = (duration: number = Math.random() * ((800 - 400) + 400)) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(duration)
    }, duration);
  })
}

export default awit
