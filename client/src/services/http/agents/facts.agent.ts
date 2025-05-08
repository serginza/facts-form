import type { UserInfoModel } from '../models';
import { httpClient } from './basicAgent';

const SLUG = 'api/facts';

export function sendUserInfo(userInfo: UserInfoModel): Promise<string> {
  return httpClient.post(SLUG, { json: userInfo }).json<string>();
}
