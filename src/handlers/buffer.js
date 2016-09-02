import waitFor from 'event-to-promise'

export default async function(res) {
  const buffers = []
  res.on('data', chunk => {
    buffers.push(chunk)
  })
  await waitFor(res, 'end', true)
  return Buffer.concat(buffers)
}