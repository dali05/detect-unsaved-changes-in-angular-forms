export function dirtyCheck<U>(source: Observable<U>) {
  let subscription: Subscription;
  let isDirty = false;
  
  return function <T>(valueChanges: Observable<T>): Observable<boolean> {
    const isDirty$ = combineLatest(
      source,
      valueChanges,
    ).pipe(
      debounceTime(300),
      map(([a, b]) => {
        return isDirty = isEqual(a, b) === false;
      }),
      finalize(() => subscription.unsubscribe()),
      startWith(false),
      shareReplay({ bufferSize: 1, refCount: true }),
    );

    subscription = fromEvent(window, 'beforeunload').subscribe(event => {
      isDirty && (event.returnValue = false);
    });

    return isDirty$;
  };
}