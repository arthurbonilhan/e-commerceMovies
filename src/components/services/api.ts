import axios from 'axios'

export const fetchMovies = async () => {
  try {
    const response = await axios.get('https://wefit-movies.vercel.app/api/movies')
    return response.data
  } catch (error) {
    throw new Error('Network response was not ok')
  }
}
