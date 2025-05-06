import { action, computed, makeObservable, observable } from 'mobx';
import { createSingleton } from 'shared/helpers';
import type { UserInfoEntity } from 'entities/ContactUs';
import { FactsAdapter } from 'services/adapters/facts.adapter';
import { sendUserInfo } from 'services/http';

type PrivateField = '_isLoading';

class ContactUsStoreProto {
  constructor() {
    makeObservable<this, PrivateField>(this, {
      _isLoading: observable,
      isLoading: computed,

      sendUserInfo: action.bound,
    });
  }

  private _isLoading: boolean = false;

  get isLoading() {
    return this._isLoading;
  }

  set isLoading(isLoading) {
    this._isLoading = isLoading;
  }

  async sendUserInfo(userInfo: UserInfoEntity) {
    this.isLoading = true;
    try {
      console.log('userInfo: ', userInfo);
      const adaptedUserInfo = FactsAdapter.toExternal(userInfo);
      await sendUserInfo(adaptedUserInfo);
    } catch (error) {
      if (error instanceof Error) throw error;
    } finally {
      this.isLoading = false;
    }

  }
}

export const ContactUsStore = createSingleton(ContactUsStoreProto);
