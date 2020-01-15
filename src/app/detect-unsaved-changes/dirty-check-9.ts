export function dirtyCheck<U>(source: Observable<U>) {
  return function <T>(valueChanges: Observable<T>): Observable<boolean> {
    const isDirty$ = combineLatest(
      source,
      valueChanges,
    ).pipe(
      debounceTime(300),
      map(([a, b]) => isEqual(a, b) === false),
      shareReplay({ bufferSize: 1, refCount: true }),
    );

    return isDirty$;
  };
}