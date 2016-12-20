import * as React from 'react';
import {} from 'core-js'

export class PanelBody  {
    panelId : string;
    component : any;
}


interface Props {
    activePanelId : string
    panels: PanelBody[];
}

export class Panel extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.state = {activePanel: ''};
  }

  renderSelectedComponent() {
      if(this.props.activePanelId === '') {
        return (
          <div></div>
        );
      }

      const panel = this.props.panels.find(panel => panel.panelId === this.props.activePanelId);

      if(panel && panel.component) {
        return React.createElement(panel.component);
      } else {
        return (
          <div></div>
        );
      }

  }

  public render() {
      return this.renderSelectedComponent();
 }
}
