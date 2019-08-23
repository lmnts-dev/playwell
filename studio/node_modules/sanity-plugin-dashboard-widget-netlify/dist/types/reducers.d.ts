import { Site } from './types';
interface Deployment {
    id: string;
}
interface Action {
    type: string;
    sites?: Site[];
    site?: Site;
    error?: Error;
    deployments?: Deployment[];
}
interface State {
    sites: Site[];
    action: Action;
}
export declare const stateReducer$: import("rxjs").OperatorFunction<Action, State | {
    error: Error | undefined;
    sites: Site[];
    action: Action;
}>;
export {};
