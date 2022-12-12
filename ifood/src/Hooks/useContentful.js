import { createClient } from 'contentful'
import statusCode from '../statusCode'

const useContentful = () => {
  const client = createClient({
    space: '', // API KEY HERE (Do not hard code)
    accessToken: '', // API KEY HERE (Do not hard code)
    host: '' // API KEY HERE (DO not hard code)
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
      console.log(`${statusCode.API_ERROR}: ${error}`)
    }
  }
  return { getMeals }
}

export default useContentful
