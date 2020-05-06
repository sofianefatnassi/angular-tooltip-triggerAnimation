import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class RootScopeService {
    private rootScope: any;
    private rootScopeObservable = new BehaviorSubject(null);

    constructor() {}

    setRootScope(newRootScope: any) {
        this.rootScope = newRootScope;
        this.rootScopeObservable.next(this.rootScope);
    }

    getRootScope(): Observable<any> {
        this.rootScopeObservable.next(this.rootScope);
        return this.rootScopeObservable.asObservable();
    }

}
