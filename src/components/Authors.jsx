import { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { ALL_AUTHORS, EDIT_AUTHOR } from '../queries'

const Authors = () => {
  const [name, setName] = useState('')
  const [born, setBorn] = useState('')
  const { loading, data } = useQuery(ALL_AUTHORS)
  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  })

  const authors = data?.allAuthors

  if (loading) {
    return <div>loading...</div>
  }

  if (!authors) {
    return <div>No authors available</div>
  }

  const submit = async (event) => {
    event.preventDefault()

    editAuthor({
      variables: { name, setBornTo: parseInt(born) },
    }).catch((error) => {
      console.error('Error updating author:', error.message)
    })

    setName('')
    setBorn('')
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born || 'N/a'}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Set birthyear</h3>
      <form onSubmit={submit}>
        <div>
          <label>
            Name
            <select
              value={name}
              onChange={({ target }) => setName(target.value)}
            >
              <option value="" disabled>
                Select author
              </option>
              {authors.map((a) => (
                <option key={a.name} value={a.name}>
                  {a.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Born
            <input
              type="number"
              value={born}
              onChange={({ target }) => setBorn(target.value)}
            />
          </label>
        </div>
        <button type="submit">Update birth year</button>
      </form>
    </div>
  )
}

export default Authors
