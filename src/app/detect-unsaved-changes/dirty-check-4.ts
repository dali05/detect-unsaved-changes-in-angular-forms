@Component({
  template: `
   <form>
     ...
     <button (click)="submit()" *ngIf="isDirty$ | async">Save</button>
   </form>
  `
})
export class SettingsComponent {
  settings = new FormGroup({...});

  isDirty$: Observable<boolean>;

  ngOnInit() {
    this.isDirty$ = this.settings.valueChanges.pipe(
      dirtyCheck(store$),
    );

  }
}