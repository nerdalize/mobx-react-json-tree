import React, { PropTypes } from 'react';
import JSONNestedNode from './JSONNestedNode';
import { observer } from 'mobx-react';

// Returns the "n Items" string for this node,
// generating and caching it if it hasn't been created yet.
function createItemString(data) {
  return `${data.length} ${data.length !== 1 ? 'items' : 'item'}`;
}

// Configures <JSONNestedNode> to render an Array
const JSONArrayNode = observer(({ data, ...props }) =>
  <JSONNestedNode
    {...props}
    data={data}
    nodeType='Array'
    nodeTypeIndicator='[]'
    createItemString={createItemString}
    expandable={data.length > 0}
  />);

JSONArrayNode.propTypes = {
  data: PropTypes.array
};

export default JSONArrayNode;
