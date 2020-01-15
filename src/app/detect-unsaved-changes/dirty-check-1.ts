import { BehaviorSubject } from 'rxjs';

// in real life it will be more than that
export const store = new BehaviorSubject({
  settingOne: 'demo',
  settingTwo: 'jack',
  settingThree: true
});

export const store$ = store.asObservable();