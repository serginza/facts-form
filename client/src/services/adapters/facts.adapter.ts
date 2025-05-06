import {
  createSingleton,
  isValueExistStrict,
} from 'shared/helpers';
import type { UserInfoModel } from 'services/http';
import type { UserInfoEntity } from 'entities/ContactUs';

class FactsAdapterProto {
  // toInternal(task: string): string {
  //   return task
  // }

  toExternal(entity: UserInfoEntity): UserInfoModel {
    return {
      name: isValueExistStrict(entity.name, 'Отсутствует name'),
      email: isValueExistStrict(entity.email, 'Отсутствует email'),
      message: isValueExistStrict(entity.message, 'Отсутствует message'),
    };
  }
}

export const FactsAdapter = createSingleton(FactsAdapterProto);
