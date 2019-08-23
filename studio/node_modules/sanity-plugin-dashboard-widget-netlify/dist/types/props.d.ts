import { Site, WidgetOptions } from './types';
export declare const props$: (options: WidgetOptions) => import("rxjs").Observable<{
    title: string;
    sites: never[];
    isLoading: boolean;
    onDeploy: () => undefined;
} | {
    sites: {
        id: string;
        name: string | undefined;
        title: string;
        buildHookId: string;
        url: string | undefined;
        adminUrl: string | undefined;
    }[];
    title: string;
    description: string | undefined;
    isLoading: boolean;
    onDeploy: (event: Site) => void;
}>;
