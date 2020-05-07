import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {IRoot} from './IRoot.interface'

@Injectable()
export class RootScopeService {
    private rootScope: IRoot = new IRoot();
    private rootScopeObservable = new BehaviorSubject(null);

    constructor() {}

    setRootScope(newRootScope: IRoot) {
        this.rootScope = newRootScope;
        this.rootScopeObservable.next(this.rootScope);
    }

    getRootScope(): Observable<IRoot> {
        this.rootScopeObservable.next(this.rootScope);
        return this.rootScopeObservable.asObservable();
    }

}
