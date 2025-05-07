import { action, computed, makeObservable, observable } from 'mobx';
import { createSingleton } from 'shared/helpers';
import type { UserInfoEntity } from 'entities/ContactUs';
import { FactsAdapter } from 'services/adapters/facts.adapter';
import { sendUserInfo } from 'services/http';

type PrivateField = '_isLoading' | '_responseMessage';

class ContactUsStoreProto {
  constructor() {
    makeObservable<this, PrivateField>(this, {
      _isLoading: observable,
      isLoading: computed,

      _responseMessage: observable,
      responseMessage: computed,

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

  private _responseMessage: null | string = null;

  get responseMessage() {
    return this._responseMessage;
  }

  set responseMessage(responseMessage) {
    this._responseMessage = responseMessage;
  }

  async sendUserInfo(userInfo: UserInfoEntity) {
    this.isLoading = true;
    try {
      const adaptedUserInfo = FactsAdapter.toExternal(userInfo);
      await sendUserInfo(adaptedUserInfo).then(
        (message) => (this.responseMessage = message)
      );
    } catch (error) {
      if (error instanceof Error) throw error;
    } finally {
      this.isLoading = false;
    }
  }
}

export const ContactUsStore = createSingleton(ContactUsStoreProto);
