import React from 'react';
import { DeployAction, Site } from '../types';
interface Props {
    isLoading: boolean;
    sites?: Site[];
    onDeploy: DeployAction;
}
export default class SiteList extends React.Component<Props> {
    render(): JSX.Element;
}
export {};
