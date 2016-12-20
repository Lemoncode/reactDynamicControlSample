import * as React from 'react';
import { NameDisplayContainer } from '../components/nameDisplay'
import { NameEditContainer } from '../components/nameEditor'
import { Panel, PanelBody } from '../components/panel/panel'
import { panelViews} from '../common/panelViews'
import { MyDummy } from '../components/mydummy'

interface Props {

}

interface State {
  activePanel : string;
  panels : PanelBody[];
}

export class MainPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
                  activePanel: '',
                  panels: [
                      {
                        panelId: panelViews.displayName,
                        component: NameDisplayContainer
                      },
                      {
                        panelId: panelViews.editName,
                        component: NameEditContainer
                      }
                  ]
                };
  }

  onToggleShowAreaName(e) {
    const activePanelNext = (this.state.activePanel === '') ? panelViews.empty : panelViews.displayName;

    this.setState({activePanel: activePanelNext} as State);
  }

  onToggleEditMode(e) {
    // Later on add some flag real stuff to map between several views
    const activePanelNext = (this.state.activePanel === panelViews.displayName) ? panelViews.editName : panelViews.displayName;

    this.setState({activePanel: activePanelNext} as State);
  }

  public render() {


      return (
       <div>
         <input type="submit" value="Show 'name' area" className="btn btn-default" onClick={this.onToggleShowAreaName.bind(this)} />
         <input type="submit" value="Edit Mode" className="btn btn-default" onClick={this.onToggleEditMode.bind(this)} />

         <Panel activePanelId={this.state.activePanel} panels={this.state.panels} />

       </div>
      );
 }
}
