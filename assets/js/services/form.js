function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const handleSubmit = (event, form) => {
  return new Promise((resolve, reject) => {
    event.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        ...form,
      }),
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(err);
      })
  })
}
