import React from 'react';
import TreeItem from '@mui/lab/TreeItem';
import Badge from '@mui/material/Badge';

import { useStyles } from './Child.styles';


const Child = ({ treeItems }) => {
    const classes = useStyles();

    return treeItems.map(treeItemData => {

        let children = undefined;
        if (treeItemData.children && treeItemData.children.length > 0) {
          children = <Child treeItems={treeItemData.children} />
        }

        return (
            <div key={treeItemData.id} className={classes.root} >
                <Badge className={classes.badge} badgeContent={treeItemData.count} color="secondary">
                    <TreeItem className={classes.tree}
                    key={treeItemData.id}
                    nodeId={treeItemData.id}
                    label={treeItemData.name}
                    children={children}
                />
                </Badge>
            </div>
        );
      });
}

export default Child;