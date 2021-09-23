import React from 'react';

import Child from '../Child/Child.component';

import {TreeView, TreeItem} from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Badge from '@mui/material/Badge';

import { useStyles } from './Parent.styles';

const Parent = ({ items }) => {
    const classes = useStyles();
    return (
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
            <Badge className={classes.badge} badgeContent={items.count} color="secondary">
                <TreeItem key={items.id} nodeId={items.id} label={items.name} >
                    <Child treeItems={items.children} />
                </TreeItem>
            </Badge>
        </TreeView>
      );
  }

export default Parent;