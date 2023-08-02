import { apiGet } from 'api/axios'
import { getLanguages } from 'api/getLanguages'

jest.mock('axios')

describe('get languages', () => {
  it('should return', async () => {
    const result = await getLanguages()
    expect(apiGet.get).toHaveBeenCalledTimes(1)
    expect(result).toBeFalsy()
  })
})
