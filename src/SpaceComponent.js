import React, {Component} from 'react';

export default class SpaceComponent extends Component {

  render() {
    const {index, space} = this.props;
    return (
      <div id={"space_" + index}>
        <input id={("id_" + index)}  type="hidden" value={space.id}/>
        <input id={("name_" + index)} name="name" value={space.name}/>
        <input name="memory" value={space.memory_quotamb}/>
        <input name="disk" value={space.disk_quotamb}/>
        <input id={("edit_" + index)} type="button" value="edit"/>
        <input id={("delete_" + index)} type="button" value="delete"/>
      </div>
    );
  }
}
