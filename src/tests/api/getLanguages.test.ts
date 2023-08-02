import { getLanguages } from 'api/getLanguages'
import { apiGet } from 'api/axios'

jest.mock('axios')

describe('get languages', () => {
  it('should return', async () => {
    const result = await getLanguages()
    expect(apiGet.get).toHaveBeenCalledTimes(1)
    expect(result).toBeFalsy()
  })
})
