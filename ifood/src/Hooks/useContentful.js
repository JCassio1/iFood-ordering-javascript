import { createClient } from 'contentful'
import statusCode from '../statusCode'

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    host: process.env.REACT_APP_HOST
  })

  const getMeals = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'meal',
        select: 'fields'
      })

      const sanitizeEntries = entries.items.map((item) => {
        const mealImage = item.fields.image.fields.file.url
        return {
          ...item.fields,
          mealImage
        }
      })
      return sanitizeEntries
    } catch (error) {
      console.log(`${statusCode.SERVER_ERROR}: ${error}`)
    }
  }
  return { getMeals }
}

export default useContentful
