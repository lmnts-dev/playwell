import { Site } from '../types';
export declare function deploy(site: Site): import("rxjs").Observable<Error> | import("rxjs").Observable<{
    result: number;
    site: Site;
}>;
