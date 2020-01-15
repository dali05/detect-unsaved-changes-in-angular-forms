@Component({
  template: `<form>...</form>`
})
export class SettingsComponent {
  settings = new FormGroup({
    settingOne: new FormControl(null),
    settingTwo: new FormControl(null),
    settingThree: new FormControl(true),
  });

  ngOnInit() {
    store$.pipe(
      untilDestroyed(this)
    ).subscribe(state => this.settings.patchValue(state));
  }

  submit() {
    store.next(this.settings.value);
  }
}