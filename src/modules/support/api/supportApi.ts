import { apiClient, apiEndpoints } from '@core/api'
import type { ApiListResponse } from '@shared/types'

import type { SupportFilters, SupportItem } from '../types/support.types'

export const supportApi = {
  list: (filters?: SupportFilters) =>
    apiClient.get<ApiListResponse<SupportItem>>(apiEndpoints.support.tickets, { params: filters }),
}
