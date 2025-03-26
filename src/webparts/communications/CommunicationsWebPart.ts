import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import * as strings from 'CommunicationsWebPartStrings';
import Communications from './components/Communications';
import { ICommunicationsProps } from './models/ICommunicationsProps';

export interface ICommunicationsWebPartProps {
  description: string;
}

export default class CommunicationsWebPart extends BaseClientSideWebPart<ICommunicationsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICommunicationsProps> = React.createElement(
      Communications,
      {
        context: this.context,
      }
    );

    ReactDom.render(element, this.domElement);
  }

 

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
